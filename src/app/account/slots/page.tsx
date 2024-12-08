'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Spin, Calendar, ConfigProvider } from 'antd';
import { Dayjs } from 'dayjs';
import styles from './styles.module.scss';
import Button from '@/src/components/Button/Button';

interface Booking {
    _id: string;
    start: string;
    end: string;
    user_email: string;
    __v: number;
}

const Slots: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBookings = async () => {
            const access_token = Cookies.get('access_token');

            if (!access_token) {
                setError('Authorization token is missing. Please log in.');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('https://cyclix-backend.vercel.app/api/bookings/my', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch bookings.');
                }

                const data: Booking[] = await response.json();
                setBookings(data);
            } catch (err) {
                setError((err as Error).message || 'An unexpected error occurred.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const dateCellRender = (value: Dayjs) => {
        const dayBookings = bookings.filter(
            (booking) =>
                value.isSame(new Date(booking.start), 'day')
        );

        if (dayBookings.length > 0) {
            return (
                <ul className={styles.calendarEvents}>
                    {dayBookings.map((booking) => (
                        <li key={booking._id}>
                            <div className={styles.indecator} />
                        </li>
                    ))}
                </ul>
            );
        }
        return null;
    };

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.slots}>
            <div className={styles.info}>
                <h3>Hello,</h3>
                <h5>Your active booking dates:</h5>
                <p>We're excited to let you know that your subscription is now active and valid for one month! 🎉
                    You can check your account details and subscription status by visiting your Account Page.
                    Want to learn more about your plan or explore other options? Check out our Subscription Plans.
                </p>
                <div className={styles.controll}>
                    <Button variant="primary" size="small">
                        My profile
                    </Button>
                    <Button variant="secondary" size="small">
                        Read more
                    </Button>
                </div>
            </div>
            {bookings.length > 0 ? (
                <ul className={styles.wrapper}>
                    {bookings.map((booking, i) => (
                        <li key={booking._id} className={styles.element}>
                            <p><span>Day:</span> {i + 1}</p>
                            <p><span>Date:</span> {new Date(booking.start).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found.</p>
            )}
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
                <Calendar dateCellRender={dateCellRender} />
            </ConfigProvider>
        </div>
    );
};

export default Slots;
