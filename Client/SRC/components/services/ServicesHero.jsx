import styles from "./Services.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>

      <div className="container text-center">

        <p className={styles.heroLabel}>
          EXPERTISE & COMPASSION
        </p>

        <h1 className={styles.heroTitle}>
          Our Dental Services
        </h1>

        <p className={styles.heroText}>
          Experience clinical excellence in a calm, modern environment.
          From routine care to advanced aesthetics, we specialize in
          maintaining your vibrant oral health.
        </p>

      </div>

    </section>
  );
}