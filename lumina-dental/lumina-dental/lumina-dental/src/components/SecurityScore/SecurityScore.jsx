import styles from './SecurityScore.module.css';

function SecurityScore() {
  return (
    <div className={styles.card}>

      <p className={styles.title}>Security Score</p>
      <p className={styles.subtitle}>Your account is well protected</p>

      <div className={styles.circleWrapper}>
        <svg className={styles.svg} viewBox="0 0 100 100">
          <circle
            className={styles.trackCircle}
            cx="50" cy="50" r="40"
            fill="none"
            strokeWidth="10"
          />
          <circle
            className={styles.progressCircle}
            cx="50" cy="50" r="40"
            fill="none"
            strokeWidth="10"
            strokeDasharray="251.2"
            strokeDashoffset="37.7"
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.percentage}>85%</span>
      </div>

      <button className={styles.updateButton}>
        <i className="bi bi-lock"></i> Update Password
      </button>

    </div>
  );
}

export default SecurityScore;
