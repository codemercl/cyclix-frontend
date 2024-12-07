"use client";

import React, { useState } from 'react';
import { signUp } from '../../app/actions/sign-up';
import { useRouter } from 'next/navigation';
import Button from '@/src/components/Button/Button';
import styles from './styles.module.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { SiHiveBlockchain } from "react-icons/si";
import { FaDollarSign } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { RiBikeLine } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";


const ClientSignUpForm = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

    const handlePriceSelect = (price: string) => {
        setSelectedPrice(price);
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        const role = "user";

        const result = await signUp(email, password, role, name, selectedPrice || "");

        setIsLoading(false);

        if (result.success) {
            router.push("/account/booking");
        } else {
            setError(result.error || "An unexpected error occurred.");
        }
    };


    return (
        <div className={styles.login}>
            <h1>Sign up to <span className={styles.gradientText}>Cyclix</span></h1>

            {step === 1 && (
                <section className={styles.prices} id="sign-up-section">
                    <div className={styles.column}>
                        <div className={styles.head}>
                            <h1>Basic</h1>
                            <p>Suitable for those who want basic regular maintenance <span>DKK. 49 /month</span>, per member.</p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.items}>
                                <SiHiveBlockchain />
                                <span>Chain lubrication</span>
                            </div>
                            <div className={styles.items}>
                                <FaCheckDouble />
                                <span>Checking the condition of the bike</span>
                            </div>
                            <div className={styles.items}>
                                <MdCleaningServices />
                                <span>Deep cleaning</span>
                            </div>
                            <div className={styles.items}>
                                <RiBikeLine />
                                <span>Inflating tires</span>
                            </div>
                            <div className={styles.items}>
                                <RiDiscountPercentFill />
                                <span>20% discount on repair services</span>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Button variant="tertiary" size="large" onClick={() => handlePriceSelect("Basic")}>
                                Choose
                            </Button>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.head}>
                            <h1>Standard</h1>
                            <p>An ideal choice for active cyclists <span>DKK. 159 /month</span>, per member.</p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.items}>
                                <SiHiveBlockchain />
                                <span>Chain lubrication</span>
                            </div>
                            <div className={styles.items}>
                                <FaCheckDouble />
                                <span>Checking the condition of the bike</span>
                            </div>
                            <div className={styles.items}>
                                <MdCleaningServices />
                                <span>Deep cleaning</span>
                            </div>
                            <div className={styles.items}>
                                <RiBikeLine />
                                <span>Inflating tires</span>
                            </div>
                            <div className={styles.items}>
                                <FaDollarSign />
                                <span>Free visit of a specialist</span>
                            </div>
                            <div className={styles.items}>
                                <RiDiscountPercentFill />
                                <span>50% discount on repair services</span>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Button variant="tertiary" size="large" onClick={() => handlePriceSelect("Standard")}>
                                Choose
                            </Button>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.head}>
                            <h1>Premium</h1>
                            <p>Maximum comfort and everything included. <span>DKK. 1.299 /month</span>, per member.</p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.items}>
                                <SiHiveBlockchain />
                                <span>Chain lubrication</span>
                            </div>
                            <div className={styles.items}>
                                <FaCheckDouble />
                                <span>Checking the condition of the bike</span>
                            </div>
                            <div className={styles.items}>
                                <MdCleaningServices />
                                <span>Deep cleaning</span>
                            </div>
                            <div className={styles.items}>
                                <RiBikeLine />
                                <span>Inflating tires</span>
                            </div>
                            <div className={styles.items}>
                                <FaDollarSign />
                                <span>100% discount on repairs</span>
                            </div>
                            <div className={styles.items}>
                                <FaHome />
                                <span>A technician will come to your home for service.</span>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Button variant="tertiary" size="large" onClick={() => handlePriceSelect("Premium")}>
                                Choose
                            </Button>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.head}>
                            <h1>Premium</h1>
                            <p>Maximum comfort and everything included <span>DKK. 1200 /month</span>, per member.</p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.items}>
                                <SiHiveBlockchain />
                                <span>Chain lubrication</span>
                            </div>
                            <div className={styles.items}>
                                <FaCheckDouble />
                                <span>Checking the condition of the bike</span>
                            </div>
                            <div className={styles.items}>
                                <MdCleaningServices />
                                <span>Deep cleaning</span>
                            </div>
                            <div className={styles.items}>
                                <RiBikeLine />
                                <span>Inflating tires</span>
                            </div>
                            <div className={styles.items}>
                                <FaDollarSign />
                                <span>100% discount on repairs</span>
                            </div>
                            <div className={styles.items}>
                                <FaHome />
                                <span>A technician will come to your home for service.</span>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Button variant="tertiary" size="large" onClick={() => handlePriceSelect("Premium+")}>
                                Choose
                            </Button>
                        </div>
                    </div>
                </section>
            )}

            {step === 2 && (
                <form className={styles.controll} onSubmit={handleSubmit}>
                    <label htmlFor="email">Your Name</label>
                    <input
                        name="email"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Your Email</label>
                    <input
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Your Password</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className={styles.error}>{error}</p>}

                    <Button variant="tertiary" size="large">
                        {isLoading ? (
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 20 }} />} size="small" />
                        ) : (
                            'Sign Up'
                        )}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default ClientSignUpForm;
