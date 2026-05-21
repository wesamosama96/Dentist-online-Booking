import React from 'react';
import styles from './TermsCheckbox.module.css';

function TermsCheckbox() {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="terms" className={styles.checkbox} />
      <label htmlFor="terms" className={styles.label}>
        I agree to the{' '}
        <a href="#" className={styles.link}>Terms of Service</a>
        {' '}and{' '}
        <a href="#" className={styles.link}>Privacy Policy</a>.
      </label>
    </div>
  );
}

export default TermsCheckbox;
