import icon1 from "../../../Assets/icon1.png";
import styles from "./Records.module.css";

export default function Records() {
  return (
    <div className="container-fluid">

      {/* Header */}
      <div className={styles.clinical}>
        <h2>Clinical Records</h2>
        <p>
          Manage your diagnostic history, imaging, and lab reports in one secure
          location.
        </p>
      </div>

      {/*Cards */}
      <div className={`d-flex flex-wrap ${styles.cardsWrapper}`}>

        {/* Visit Card */}
        <div className={styles.Visit}>
          <h1>TOTAL VISITS</h1>
          <span>14</span>

          <div className="d-flex align-items-center gap-2">
            <img src={icon1} alt="icon" width="20" />
            <p>Last visit: Oct 12, 2023</p>
          </div>
        </div>

        {/* XRay Card */}
        <div className={styles.XRay}>
          <h1>LAST X-RAY DATE</h1>
          <span>Nov 04, 2023</span>
          <div className={`${styles.btn} btn btn-outline-primary`}>View Image</div>
        </div>

        {/* Health Card */}
        <div className={styles.Health}>
          <h1>ORAL HEALTH SCORE</h1>

          <p>
            <span>92</span>/100
          </p>

          <div></div>

          <p>Excellence maintained since 2022</p>
        </div>

      </div>
    </div>
  );
}