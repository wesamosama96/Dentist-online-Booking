import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>

     
      <div className={styles.iconCircle}>
        <i className="bi bi-hospital"></i>
      </div>

      
      <h1 className={styles.title}>Aether Dental</h1>

      
      <p className={styles.tagline}>Clinical excellence with compassionate care.</p>

    </div>
  );
}

export default Header;
