import React from 'react';
import styles from './RoleCard.module.css';


function RoleCard({ icon, label, selected, onClick }) {
  return (
    <button
      className={`${styles.card} ${selected ? styles.active : ''}`}
      onClick={onClick}
    >
      
      <i className={`${icon} ${styles.icon}`}></i>

      
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default RoleCard;
