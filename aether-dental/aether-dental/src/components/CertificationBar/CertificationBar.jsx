import React from 'react';
import styles from './CertificationBar.module.css';

const certifications = ['ADA', 'FDA', 'ISO'];

function CertificationBar() {
  return (
    <div className={styles.certSection}>

      <p className={styles.certLabel}>Certified Partner Of</p>

      <div className={styles.badgeRow}>
        {certifications.map((cert) => (
          <div className={styles.badge} key={cert}>
            <i className="bi bi-shield-check"></i>
            <span>{cert}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CertificationBar;
