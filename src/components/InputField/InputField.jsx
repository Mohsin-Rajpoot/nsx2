import React from 'react';
import styles from './InputField.module.css';

export function InputField({ label, placeholder }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input 
        type={label.toLowerCase() === 'password' ? 'password' : 'text'}
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
      <div className={styles.underline} />
    </div>
  );
}