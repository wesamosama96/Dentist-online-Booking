import styles from './AccountManagement.module.css';

function AccountManagement() {
  return (
    <div className={styles.card}>
      <div className={styles.textBlock}>
        <p className={styles.title}>Account Management</p>
        <p className={styles.warning}>
          Deactivating your account will restrict access to all previous records and treatment plans.
        </p>
      </div>
      <button className={styles.deactivateButton}>
        Deactivate Account
      </button>
    </div>
  );
}

export default AccountManagement;
