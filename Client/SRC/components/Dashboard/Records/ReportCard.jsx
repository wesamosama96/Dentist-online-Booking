import IconBox from "./IconBox";
import { faMicroscope, faFileMedical } from "@fortawesome/free-solid-svg-icons";
import styles from "./Records.module.css";

export default function ReportCard({ type }) {
  return (
    <div className={`${styles.reportCard} card p-4 mb-3 border-0 position-relative`}>

      {type === "biopsy" && (
        <>
          {/* Official Badge */}
          <span className={`${styles.officialBadge} position-absolute`}>OFFICIAL</span>

          <div className="d-flex align-items-center gap-3 mb-2">
            <div className={styles.biopsyIconColor}>
              <IconBox icon={faMicroscope} />
            </div>
            <h6 className={`${styles.recordTitle} mb-0`}>Biopsy Report: Mucosal Tissue</h6>
          </div>

          <small className="text-muted ms-5 d-block styleSampleDate">Sample date: Sep 28, 2023</small>

          <div className={`${styles.conclusionBox} p-3 rounded-3 my-3`}>
            <strong className={styles.conclusionTitle}>Conclusion:</strong>
            <p className={`${styles.conclusionText} mb-0 mt-1`}>
              "Negative for malignancy. Benign inflammatory changes noted. Recommended regular monitoring during hygiene visits."
            </p>
          </div>

          <button className={`${styles.actionBtn} btn btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center gap-2`}>
            <i className="fa-regular fa-eye"></i> Full Lab Details
          </button>
        </>
      )}

      {type === "allergy" && (
        <>
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className={styles.allergyIconColor}>
              <IconBox icon={faFileMedical} />
            </div>
            <h6 className={`${styles.recordTitle} mb-0`}>Comprehensive Allergy Test</h6>
          </div>

          <small className="text-muted ms-5 d-block styleSampleDate">Completed: May 18, 2023</small>

          <div className="my-3 d-flex flex-wrap gap-2 ms-5 styleBadgesContainer">
            <span className={`${styles.badgeCustom} ${styles.badgeDanger}`}>Penicillin (Severe)</span>
            <span className={`${styles.badgeCustom} ${styles.badgeBlue}`}>Latex (Negative)</span>
            <span className={`${styles.badgeCustom} ${styles.badgeBlue}`}>Lidocaine (Negative)</span>
          </div>

          <button className={`${styles.actionBtn} btn btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center gap-2`}>
            <i className="fa-solid fa-print"></i> Print Certificate
          </button>
        </>
      )}

    </div>
  );
}