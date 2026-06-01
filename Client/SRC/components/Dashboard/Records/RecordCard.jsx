import IconBox from "./IconBox";
import styles from "./Records.module.css";

export default function RecordCard({ title, subtitle, icon }) {
  return (
    <div className={`${styles.card} p-3 mb-3 d-flex flex-row align-items-center justify-content-between`}>
      
      <div className="d-flex align-items-center gap-3">
        <IconBox icon={icon} link="" /> 
        <div>
          <h6 className={`${styles.recordTitle} mb-1`}>{title}</h6>
          <small className="text-muted">{subtitle}</small>
        </div>
      </div>

      <button className={`${styles.downloadBtn} btn d-flex align-items-center justify-content-center`}>
        <i className="fa-solid fa-download"></i>
      </button>
    </div>
  );
}