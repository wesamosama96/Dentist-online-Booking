import styles from "./Contact.module.css";

export default function ContactHero() {
  return (
    <div className={`text-center ${styles.heroWrapper}`}>

      <h1 className={styles.heroTitle}>
        Get in Touch
      </h1>

      <p className={styles.heroText}>
        We're here to provide the clinical excellence and compassionate care you<br />
        deserve. Reach out to schedule an appointment or ask any questions.
      </p>

    </div>
  );
}
