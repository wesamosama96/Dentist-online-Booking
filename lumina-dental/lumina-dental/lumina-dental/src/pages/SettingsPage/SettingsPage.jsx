import styles from './SettingsPage.module.css';
import Sidebar            from '../../components/Sidebar/Sidebar';
import Topbar             from '../../components/Topbar/Topbar';
import PersonalInfoForm   from '../../components/PersonalInfoForm/PersonalInfoForm';
import SecurityScore      from '../../components/SecurityScore/SecurityScore';
import NotificationsPanel from '../../components/NotificationsPanel/NotificationsPanel';
import TwoFactorPanel     from '../../components/TwoFactorPanel/TwoFactorPanel';
import AccountManagement  from '../../components/AccountManagement/AccountManagement';
import Footer             from '../../components/Footer/Footer';

function SettingsPage() {
  return (
    <div className={styles.layout}>

      <Sidebar />

      <div className={styles.mainColumn}>

        <Topbar />

        <div className={styles.content}>

          <div className={styles.topRow}>
            <div className={styles.personalInfoWrapper}>
              <PersonalInfoForm />
            </div>
            <div className={styles.securityWrapper}>
              <SecurityScore />
            </div>
          </div>

          <div className={styles.middleRow}>
            <NotificationsPanel />
            <TwoFactorPanel />
          </div>

          <AccountManagement />

        </div>

        <Footer />

      </div>

    </div>
  );
}

export default SettingsPage;
