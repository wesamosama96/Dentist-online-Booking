import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.brand}>Aether Dental</h3>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Privacy Policy</a>
        <a href="#" className={styles.link}>Terms of Service</a>
        <a href="#" className={styles.link}>Contact Support</a>
      </div>
      <p className={styles.copy}>
        &copy; 2026 Aether Dental. All rights reserved. Clinical Excellence. Compassionate Care.
      </p>
    </footer>
  );
}

export default Footer;
