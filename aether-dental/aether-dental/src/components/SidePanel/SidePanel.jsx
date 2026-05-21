import React from 'react';
import styles from './SidePanel.module.css';

function SidePanel() {
  return (
    <div className={styles.panel}>

     
      <div className={styles.logo}>
        <i className="bi bi-person-video3"></i>
        <span>Aether Dental</span>
      </div>

      
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Experience clinical excellence in a space of calm.
        </h1>
        <p className={styles.subtext}>
          Join our community and discover a new standard of compassionate oral healthcare.
        </p>
      </div>

      
      <div className={styles.accreditation}>
        <p className={styles.accreditLabel}>Accredited Partner</p>
        <div className={styles.iconRow}>
          <i className="bi bi-shield"></i>
          <i className="bi bi-shield"></i>
          <i className="bi bi-circle"></i>
        </div>
      </div>

    </div>
  );
}

export default SidePanel;
