import React from 'react';
import styles from './TrustBar.module.css';

const badges = [
  { id: 'hipaa',      icon: 'bi bi-shield-check',   label: 'HIPAA Compliant'   },
  { id: 'encryption', icon: 'bi bi-lock',            label: '256-bit Encryption'},
  { id: 'rated',      icon: 'bi bi-hand-thumbs-up',  label: '5-Star Rated Care' },
];

function TrustBar() {
  return (
    <div className={styles.trustBar}>
      {badges.map((badge) => (
        <div className={styles.badge} key={badge.id}>
          <i className={`${badge.icon} ${styles.icon}`}></i>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

export default TrustBar;
