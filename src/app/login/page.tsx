"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Button from '@/src/components/Button/Button';
import styles from './styles.module.scss';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { signin } from '../actions/auth';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await signin(email, password);

    if (result.success) {
      router.push('/account/booking');
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.login}>
      <h1>Log in to <span className={styles.gradientText}>Cyclix</span></h1>
      <form className={styles.controll} onSubmit={handleSubmit}>
        <label htmlFor="email">Your Name</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Your password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className={styles.error}>{error}</p>}

        <Button variant="tertiary" size="large">
          {isLoading ?
              <Spin indicator={<LoadingOutlined style={{ fontSize: 20 }} />} size="small" />
            : 'Continue'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
