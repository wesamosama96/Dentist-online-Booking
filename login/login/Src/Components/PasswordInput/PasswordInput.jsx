import React from 'react';
import styles from './PasswordInput.module.css';

function PasswordInput() {
  return (
    <div className={styles.inputGroup}>

      
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <a className={styles.forgotLink} href="#">
          Forgot Password?
        </a>
      </div>

     
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>
          <i className="bi bi-lock"></i>
        </span>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="••••••••"
        />
      </div>

    </div>
  );
}

export default PasswordInput;
