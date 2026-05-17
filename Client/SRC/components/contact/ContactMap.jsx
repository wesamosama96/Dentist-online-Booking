import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

export default function ContactMap() {
  return (
    <div className={styles.mapWrapper}>

      <h2 className={styles.mapTitle}>Our Location</h2>

      <div className={styles.mapBox}>
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      {/* INFO UNDER MAP */}
      <div className={styles.mapInfo}>

        <p>
          <FaMapMarkerAlt className={styles.iconInline} />
          Cairo, Egypt
        </p>

        <p>
          <FaClock className={styles.iconInline} />
          Sun - Thu: 9AM - 10PM
        </p>

        <p>
          <FaPhone className={styles.iconInline} />
          +20 123 456 789
        </p>

      </div>

    </div>
  );
}