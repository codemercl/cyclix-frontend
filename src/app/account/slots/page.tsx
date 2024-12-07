'use client';

import React from 'react';
import Button from '@/src/components/Button/Button';
import styles from './styles.module.scss';

const Slots = () => {
    return (
        <div className={styles.slots}>
            <div className={styles.info}>
                <h3>Hello, <span>{'Jake'}</span></h3>
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
            <div className={styles.wrapper}>
                <div className={styles.element}>
                    <p>1 days</p>
                    <span>20.10.2022</span>
                    <span>12:33</span>
                </div>
                <div className={styles.element}>
                    <p>2 days</p>
                    <span>20.10.2022</span>
                    <span>12:33</span>
                </div>
                <div className={styles.element}>
                    <p>3 days</p>
                    <span>20.10.2022</span>
                    <span>12:33</span>
                </div>
                <div className={styles.element}>
                    <p>4 days</p>
                    <span>20.10.2022</span>
                    <span>12:33</span>
                </div>
            </div>
        </div>
    );
};

export default Slots;
