import React from 'react';
import styles from './RegisterPage.module.css';
import SidePanel     from '../../components/SidePanel/SidePanel';
import RoleSelector  from '../../components/RoleSelector/RoleSelector';
import TextInput     from '../../components/TextInput/TextInput';
import TermsCheckbox from '../../components/TermsCheckbox/TermsCheckbox';
import TrustBar      from '../../components/TrustBar/TrustBar';

function RegisterPage() {
  return (
    <div className={styles.page}>

   
      <SidePanel />

    
      <div className={styles.rightSection}>
        <div className={styles.card}>

        
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>
            Complete the form below to begin your journey with Aether.
          </p>

       
          <RoleSelector />

          
          <div className={styles.twoColumnRow}>
            <TextInput
              label="Full Name"
              icon="bi bi-person-badge"
              placeholder="ahmed atalla"
              type="text"
            />
            <TextInput
              label="Phone Number"
              icon="bi bi-telephone"
              placeholder="+20 11 000-0000"
              type="tel"
            />
          </div>

          {/* Email */}
          <div className={styles.fieldSpacing}>
            <TextInput
              label="Email Address"
              icon="bi bi-envelope"
              placeholder="ahmed.atalla@example.com"
              type="email"
            />
          </div>

          {/* Password + hint */}
          <div className={styles.fieldSpacing}>
            <TextInput
              label="Create Password"
              icon="bi bi-lock"
              placeholder="••••••••"
              type="password"
              hint="Must be at least 8 characters with one special symbol."
            />
          </div>

          {/* Terms */}
          <TermsCheckbox />

          {/* Submit */}
          <button className={styles.registerButton}>
            Complete Registration
          </button>

          {/* Divider */}
          <hr className={styles.divider} />

          {/* Sign in */}
          <p className={styles.signInText}>
            Already have an account?{' '}
            <a href="/" className={styles.signInLink}>Sign In</a>
          </p>

        </div>

        {/* Trust badges */}
        <TrustBar />
      </div>

    </div>
  );
}

export default RegisterPage;
