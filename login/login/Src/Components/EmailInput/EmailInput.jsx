import React from 'react';
import styles from './EmailInput.module.css';

function EmailInput() {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor="email">
        Email Address
      </label>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>
          
          <i className="bi bi-envelope"></i>
        </span>
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder="dr.wes@example.com"
        />
      </div>
    </div>
  );
}

export default EmailInput;
