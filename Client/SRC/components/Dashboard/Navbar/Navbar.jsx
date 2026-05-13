import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import styles from "./Navbar.module.css";

export default function WelcomeSection() {
  return (
    <>
      <div className={`d-flex justify-content-between align-items-center mb-4 px-3 py-2 ${styles["welcome-section"]}`}>
        <h4 className={`m-0 fw-bold ${styles["h2"]}`}>Patient Dashboard</h4>
        <div className="d-flex align-items-center gap-4">
          <FontAwesomeIcon icon={faBell} className={styles.icon} />
          <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon} />
          <div className="vr"></div>
          <button className="btn btn-outline-primary">Log Out</button>
        </div>
      </div>

    </>
  )
}