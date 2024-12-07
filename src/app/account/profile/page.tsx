'use client';

import React from 'react';
import styles from './styles.module.scss';
import Button from '@/src/components/Button/Button';
import { Input, InputNumber, ConfigProvider } from 'antd';

const Profile = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1890ff',
                    colorBgBase: '#1f1f1f',
                    colorTextBase: '#ffffff',
                },
            }}
        >
            <div className={styles.profile}>
                <form action="">
                    <h3>Your account setting</h3>

                    <Input placeholder="Email"
                        style={{
                            padding: '10px',
                        }}
                    />
                    <InputNumber placeholder="Password"
                        style={{
                            padding: '10px 0',
                            width: '100%',
                        }}
                    />
                    <Button variant="primary" size="large">
                        Update profile settings
                    </Button>
                </form>
            </div>
        </ConfigProvider>
    );
};

export default Profile;
