import styles from './TwoFactorPanel.module.css';

function TwoFactorPanel() {
  return (
    <div className={styles.card}>

      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <i className="bi bi-shield-check"></i>
        </div>
        <p className={styles.headerTitle}>Two Factor Auth</p>
      </div>

      <p className={styles.description}>
        Add an extra layer of security to your dental records by requiring a code from your phone at login.
      </p>

      <button className={styles.enableButton}>
        Enable 2FA &nbsp;&rarr;
      </button>

    </div>
  );
}

export default TwoFactorPanel;
