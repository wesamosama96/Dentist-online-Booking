import styles from './NotificationsPanel.module.css';
import NotificationRow from '../NotificationRow/NotificationRow';

function NotificationsPanel() {
  return (
    <div className={styles.card}>

      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <i className="bi bi-bell"></i>
        </div>
        <div>
          <p className={styles.headerTitle}>Notifications</p>
          <p className={styles.headerSub}>Choose how we keep you updated</p>
        </div>
      </div>

      <div className={styles.rows}>
        <NotificationRow
          title="Appointment Reminders"
          description="Get notified 24h before your visit"
          smsChecked={true}
          emailChecked={true}
        />
        <NotificationRow
          title="Lab Result Notifications"
          description="Secure alerts when records are ready"
          smsChecked={false}
          emailChecked={true}
        />
      </div>

    </div>
  );
}

export default NotificationsPanel;
