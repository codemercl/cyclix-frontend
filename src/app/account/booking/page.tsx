'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ConfigProvider, TimePicker, App } from 'antd';
import { Dayjs } from 'dayjs';
import { CiSquareRemove } from "react-icons/ci";
import styles from './styles.module.scss';
import Button from '@/src/components/Button/Button';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

type TariffType = {
    name: string;
    maxDates: number;
};

const tariffs: Record<string, TariffType> = {
    Basic: { name: 'Basic', maxDates: 1 },
    Standard: { name: 'Standard', maxDates: 3 },
    Premium: { name: 'Premium', maxDates: 2 },
    PremiumFull: { name: 'PremiumFull', maxDates: 2 },
};

const Booking = () => {
    const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<Record<string, Dayjs | null>>({});
    const [currentTariff, setCurrentTariff] = useState<TariffType | null>(null);
    const [priceFromCookies, setPriceFromCookies] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const price = Cookies.get('price') || 'Basic';
        setPriceFromCookies(price);

        const matchedTariff = tariffs[price] || tariffs.Basic;
        setCurrentTariff(matchedTariff);
    }, []);

    const handleDateSelect = (value: Dayjs) => {
        if (!currentTariff) return;

        const formattedDate = value.startOf('day');
        setSelectedDates((prevSelectedDates) => {
            const alreadySelected = prevSelectedDates.some(date => date.isSame(formattedDate, 'day'));

            if (alreadySelected) {
                // Remove the date
                const updatedDates = prevSelectedDates.filter(date => !date.isSame(formattedDate, 'day'));
                setSelectedTimes((prevTimes) => {
                    const updatedTimes = { ...prevTimes };
                    delete updatedTimes[formattedDate.format('YYYY-MM-DD')];
                    return updatedTimes;
                });
                return updatedDates;
            } else if (prevSelectedDates.length < currentTariff.maxDates) {
                // Add the date
                return [...prevSelectedDates, formattedDate];
            } else {
                console.log(`You can only select up to ${currentTariff.maxDates} dates with the ${currentTariff.name} plan.`);
                return prevSelectedDates;
            }
        });
    };

    const handleDateRemove = (dateToRemove: Dayjs) => {
        setSelectedDates((prevSelectedDates) => 
            prevSelectedDates.filter(date => !date.isSame(dateToRemove, 'day'))
        );
        setSelectedTimes((prevTimes) => {
            const updatedTimes = { ...prevTimes };
            delete updatedTimes[dateToRemove.format('YYYY-MM-DD')];
            return updatedTimes;
        });
    };

    const handleTimeChange = (date: Dayjs, time: Dayjs | null) => {
        const formattedKey = date.format('YYYY-MM-DD');
        setSelectedTimes((prevTimes) => ({
            ...prevTimes,
            [formattedKey]: time,
        }));
    };

    const handleSubmit = async () => {
        const access_token = Cookies.get('access_token');

        const payload = selectedDates.map(date => {
            const time = selectedTimes[date.format('YYYY-MM-DD')];
            return {
                start: `${date.format('YYYY-MM-DD')}T${time?.format('HH:mm') || '00:00'}:00Z`,
                end: `${date.format('YYYY-MM-DD')}T${time?.add(2, 'hour')?.format('HH:mm') || '02:00'}:00Z`,
            };
        });

        try {
            const response = await fetch('https://cyclix-backend.vercel.app/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Booking successful!');
                router.push('/account/slots');
            } else {
                const error = await response.json();
                alert(`Error booking dates: ${error.message || 'Please try again.'}`);
            }
        } catch (error) {
            alert('Network error. Please check your connection.');
        }
    };

    const cellRender = (current: Dayjs) => {
        if (!currentTariff) return null;

        const isSelected = selectedDates.some(date => date.isSame(current, 'day'));
        const isMaxSelected = selectedDates.length >= currentTariff.maxDates;

        return (
            <div
                style={{
                    backgroundColor: isSelected ? '#1890ff' : undefined,
                    borderRadius: '50%',
                    cursor: isMaxSelected && !isSelected ? 'not-allowed' : 'pointer',
                    width: '10px',
                    height: '10px',
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isMaxSelected || isSelected) {
                        handleDateSelect(current);
                    }
                }}
            />
        );
    };

    if (!currentTariff) {
        return <p>Loading tariff...</p>;
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1890ff',
                    colorBgBase: '#1f1f1f',
                    colorTextBase: '#fff',
                    controlItemBgActive: '#1c1a1a',
                },
            }}
        >
            <App>
                <div className={styles.booking}>
                    <div className={styles.calendar}>
                        <Calendar
                            cellRender={cellRender}
                            onSelect={handleDateSelect}
                        />
                    </div>

                    <div className={styles.table}>
                        <div className={styles.info}>
                            <h3>
                                In the tariff <b>{priceFromCookies || currentTariff.name}</b> you have access to: <span>{currentTariff.maxDates} days</span> a year
                            </h3>
                        </div>
                        <h3>Your selected dates:</h3>
                        {selectedDates.length > 0 ? (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {selectedDates.map(date => (
                                    <li
                                        key={date.toString()}
                                        style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}
                                    >
                                        <span>{date.format('DD.MM.YYYY')}</span>
                                        <TimePicker
                                            value={selectedTimes[date.format('YYYY-MM-DD')] || null}
                                            onChange={(time) => handleTimeChange(date, time)}
                                            format="HH:mm"
                                            placeholder="Select Time"
                                        />
                                        <CiSquareRemove className={styles.button} onClick={() => handleDateRemove(date)} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No dates selected.</p>
                        )}
                        {selectedDates.length > 0 && (
                            <Button variant="primary" size="small" onClick={handleSubmit} disabled={selectedDates.some(date => !selectedTimes[date.format('YYYY-MM-DD')])}>
                                Book dates and times
                            </Button>
                        )}
                    </div>
                </div>
            </App>
        </ConfigProvider>
    );
};

export default Booking;
