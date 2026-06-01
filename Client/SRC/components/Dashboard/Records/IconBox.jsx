import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Records.module.css";
import Icon5 from '../../../Assets/Icon5.png'

export default function IconBox({ icon, link }) {
  const isImageIcon = typeof icon === "string";

  const content = (
    <div className={`${styles.iconBoxContainer} rounded-4 d-flex align-items-center justify-content-center`}>
      {icon ? (
        isImageIcon ? (
          <img src={icon} alt="icon" style={{ width: "24px", height: "24px", objectFit: "contain" }} />
        ) : (
          <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
        )
      ) : (
        /* مكان محجوز للصورة لو الـ src لسه فاضي */
        <div style={{ width: "24px", height: "24px", backgroundColor: "#e2e8f0" }}>
            <img src={Icon5} alt="icon" />
        </div>
      )}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className="text-decoration-none">
      {content}
    </a>
  ) : (
    content
  );
}