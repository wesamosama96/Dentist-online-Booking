import React from 'react';
import styles from './LoginForm.module.css';
import TextInput from '../TextInput/TextInput';

function LoginForm() {
  return (
    <div className={styles.card}>

      
      <h2 className={styles.title}>Welcome Back</h2>
      <p className={styles.subtitle}>Please enter your details to sign in.</p>

      
      <div className={styles.fieldSpacing}>
        <TextInput
          label="Email Address"
          icon="bi bi-envelope"
          placeholder="dr.vance@aether.com"
          type="email"
        />
      </div>

     
      <div className={styles.fieldSpacing}>
        <div className={styles.passwordLabelRow}>
          <span className={styles.passwordLabel}>Password</span>
          <a href="#" className={styles.forgotLink}>Forgot Password?</a>
        </div>
        
        <div className={styles.inputWrapper}>
          <span className={styles.icon}>
            <i className="bi bi-lock"></i>
          </span>
          <input
            className={styles.input}
            type="password"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className={styles.checkboxRow}>
        <input type="checkbox" id="remember" className={styles.checkbox} />
        <label htmlFor="remember" className={styles.checkboxLabel}>
          Keep me signed in for 30 days
        </label>
      </div>

  
      <button className={styles.signInButton}>
        Sign In &nbsp;<i className="bi bi-box-arrow-in-right"></i>
      </button>

      
      <hr className={styles.divider} />

    
      <p className={styles.newUser}>New to our practice?</p>
      <button className={styles.createAccountButton}>
        Create an Account
      </button>

    </div>
  );
}

export default LoginForm;
