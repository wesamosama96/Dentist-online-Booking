import styles from "./gallery.module.css";

export default function StatsSection() {
  return (
    <div className={`container ${styles.statsWrapper}`}>

      <div className={`row ${styles.statsBox}`}>

        <div className={`col-3 ${styles.statItem}`}>
          <h2>15+</h2>
          <p>SPECIALISTS</p>
        </div>

        <div className={`col-3 ${styles.statItem}`}>
          <h2>25k+</h2>
          <p>SMILES RESTORED</p>
        </div>

        <div className={`col-3 ${styles.statItem}`}>
          <h2>4.9/5</h2>
          <p>PATIENT RATING</p>
        </div>

        <div className={`col-3 ${styles.statItem}`}>
          <h2>100%</h2>
          <p>DIGITAL CARE</p>
        </div>

      </div>

    </div>
  );
}