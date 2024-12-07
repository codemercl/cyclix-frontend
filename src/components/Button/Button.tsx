import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, onClick }) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;