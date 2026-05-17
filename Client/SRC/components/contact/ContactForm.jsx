import styles from "./Contact.module.css";

export default function ContactForm() {
  return (
    <div className={styles.formWrapper}>

      <h2 className={styles.formTitle}>Send us a message</h2>

      <form className="d-flex flex-column gap-3">

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className={`form-control ${styles.input}`}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className={`form-control ${styles.input}`}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className={`form-control ${styles.input}`}
        />

        {/* Message */}
        <textarea
          rows="5"
          placeholder="Your Message"
          className={`form-control ${styles.textarea}`}
        />

        {/* Button */}
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>

      </form>

    </div>
  );
}