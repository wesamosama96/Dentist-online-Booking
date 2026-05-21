import styles from './PersonalInfoForm.module.css';
import TextInput from '../TextInput/TextInput';

function PersonalInfoForm() {
  return (
    <div className={styles.card}>

      <div className={styles.cardHeader}>
        <div className={styles.iconCircle}>
          <i className="bi bi-person"></i>
        </div>
        <div>
          <p className={styles.headerTitle}>Personal Information</p>
          <p className={styles.headerSub}>Update your identity and contact details</p>
        </div>
      </div>

      <div className={styles.twoColumnRow}>
        <TextInput
          label="Full Name"
          type="text"
          placeholder="Ahmed Atalla"
        />
        <TextInput
          label="Email Address"
          type="email"
          placeholder="ahmed.atalla@example.com"
        />
      </div>

      <div className={styles.fieldSpacing}>
        <TextInput
          label="Phone Number"
          type="tel"
          placeholder="+20 1234567891"
        />
      </div>

      <div className={styles.saveRow}>
        <button className={styles.saveButton}>Save Changes</button>
      </div>

    </div>
  );
}

export default PersonalInfoForm;
