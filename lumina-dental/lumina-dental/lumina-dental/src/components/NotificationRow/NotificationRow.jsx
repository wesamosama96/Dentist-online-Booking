import styles from './NotificationRow.module.css';

function NotificationRow({ title, description, smsChecked, emailChecked }) {
  return (
    <div className={styles.row}>
      <div className={styles.textBlock}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            defaultChecked={smsChecked}
            className={styles.checkbox}
          />
          SMS
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            defaultChecked={emailChecked}
            className={styles.checkbox}
          />
          Email
        </label>
      </div>
    </div>
  );
}

export default NotificationRow;
