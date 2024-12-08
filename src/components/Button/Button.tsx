import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: any;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, onClick, disabled }) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;