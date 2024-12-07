'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, ConfigProvider, TimePicker, App } from 'antd';
import { Dayjs } from 'dayjs';
import { CiSquareRemove } from "react-icons/ci";
import styles from './styles.module.scss';
import Button from '@/src/components/Button/Button';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();

    useEffect(() => {
        const price = localStorage.getItem('price');
        if (price) {
            const matchedTariff = tariffs[price] || tariffs.Basic; 
            setCurrentTariff(matchedTariff);
        } else {
            setCurrentTariff(tariffs.Basic);
        }
    }, []);

    const handleDateSelect = (value: Dayjs) => {
        if (!currentTariff) return;

        const formattedDate = value.startOf('day');
        const alreadySelected = selectedDates.some(date => date.isSame(formattedDate, 'day'));

        if (alreadySelected) {
            setSelectedDates(selectedDates.filter(date => !date.isSame(formattedDate, 'day')));
            const formattedKey = formattedDate.format('YYYY-MM-DD');
            const updatedTimes = { ...selectedTimes };
            delete updatedTimes[formattedKey];
            setSelectedTimes(updatedTimes);
        } else if (selectedDates.length < currentTariff.maxDates) {
            setSelectedDates([...selectedDates, formattedDate]);
        } else {
            console.log(`You can only select up to ${currentTariff.maxDates} dates with the ${currentTariff.name} plan.`);
        }
    };

    const handleDateRemove = (dateToRemove: Dayjs) => {
        setSelectedDates(selectedDates.filter(date => !date.isSame(dateToRemove, 'day')));
        const formattedKey = dateToRemove.format('YYYY-MM-DD');
        const updatedTimes = { ...selectedTimes };
        delete updatedTimes[formattedKey];
        setSelectedTimes(updatedTimes);
    };

    const handleTimeChange = (date: Dayjs, time: Dayjs | null) => {
        const formattedKey = date.format('YYYY-MM-DD');
        setSelectedTimes(prev => ({
            ...prev,
            [formattedKey]: time,
        }));
    };

    const handleSubmit = async () => {
        const payload = selectedDates.map(date => ({
            date: date.format('YYYY-MM-DD'),
            time: selectedTimes[date.format('YYYY-MM-DD')]?.format('HH:mm') || null,
        }));

        try {
            const response = await fetch('http://localhost:4001', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Booking successful!');
                router.push('/account/slots');
            } else {
                alert('Error booking dates. Please try again.');
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
                    cursor: 'pointer',
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
                                In the tariff <b>{currentTariff.name}</b> you have access to: <span>{currentTariff.maxDates} days</span> a year
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
                            <Button variant="primary" size="small" onClick={handleSubmit}>
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
