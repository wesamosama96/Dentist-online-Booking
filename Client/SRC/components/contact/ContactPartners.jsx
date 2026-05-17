import styles from "./Contact.module.css";

export default function ContactPartners() {
  const partners = ["MEDICARE", "AETNA", "BLUECROSS", "DELTA"];

  return (
    <div className={styles.partnersWrapper}>

      <p className={styles.partnersTitle}>
        PARTNERED WITH LEADING INSURERS
      </p>

      <div className={styles.partnersList}>
        {partners.map((item, index) => (
          <span key={index} className={styles.partnerItem}>
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}