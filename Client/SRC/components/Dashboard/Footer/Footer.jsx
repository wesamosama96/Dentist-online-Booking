import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Aether}>
      
      <div>
        <h2>Aether Dental Clinic</h2>
        <p>© 2024 Aether Dental Clinic. Clinical Excellence & Compassionate Care.</p>
      </div>
      
      <div className={styles.Aether_text}>
        <ul>
          <li><a href="#privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a></li>
          <li><a href="#terms" style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Service</a></li>
          <li><a href="#rights" style={{ textDecoration: 'none', color: 'inherit' }}>Patient Rights</a></li>
          <li><a href="#careers" style={{ textDecoration: 'none', color: 'inherit' }}>Careers</a></li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;