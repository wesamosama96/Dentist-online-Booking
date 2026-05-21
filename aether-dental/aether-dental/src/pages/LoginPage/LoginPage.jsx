import React from 'react';
import styles from './LoginPage.module.css';
import Header          from '../../components/Header/Header';
import LoginForm       from '../../components/LoginForm/LoginForm';
import CertificationBar from '../../components/CertificationBar/CertificationBar';

function LoginPage() {
  return (
    <div className={styles.page}>
      <Header />
      <LoginForm />
      <CertificationBar />
    </div>
  );
}

export default LoginPage;
