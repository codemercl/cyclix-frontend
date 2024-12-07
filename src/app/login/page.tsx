"use client";

import Button from '@/src/components/Button/Button'
import React from 'react'
import styles from './styles.module.scss';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/account/booking');
  };

  return (
    <div className={styles.login}>
      <h1>Log in to <span className={styles.gradientText}>Cyclix</span></h1>
      <form className={styles.controll}>
        <label htmlFor="email">Your Name</label>
        <input name='email' type="text" />

        <label htmlFor="password">Your password</label>
        <input name='password' type="password" />

        <Button variant='tertiary' size='large' onClick={handleClick}>Continue</Button>
      </form>
    </div>
  );
};

export default Login;
