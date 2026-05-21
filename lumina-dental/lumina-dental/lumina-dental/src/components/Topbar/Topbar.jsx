import styles from './Topbar.module.css';

function Topbar() {
  return (
    <div className={styles.topbar}>
      <h1 className={styles.title}>Account Settings</h1>
      <div className={styles.avatar}>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User avatar"
          className={styles.avatarImg}
        />
      </div>
    </div>
  );
}

export default Topbar;
