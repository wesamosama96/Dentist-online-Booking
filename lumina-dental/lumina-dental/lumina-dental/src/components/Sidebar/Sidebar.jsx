import styles from './Sidebar.module.css';

const navLinks = [
  { id: 'overview',     icon: 'bi bi-grid',         label: 'Overview'      },
  { id: 'appointments', icon: 'bi bi-calendar',      label: 'Appointments'  },
  { id: 'records',      icon: 'bi bi-folder',        label: 'Records'       },
  { id: 'billing',      icon: 'bi bi-credit-card-2-back', label: 'Billing'  },
  { id: 'settings',     icon: 'bi bi-gear',          label: 'Settings'      },
];

function Sidebar() {
  return (
    <div className={styles.sidebar}>

      <div className={styles.top}>
        <h2 className={styles.logo}>Aether Dental</h2>
        <p className={styles.welcomeTitle}>Welcome back</p>
        <p className={styles.welcomeSub}>Manage your care</p>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href="#"
            className={`${styles.navLink} ${link.id === 'settings' ? styles.active : ''}`}
          >
            <i className={`${link.icon} ${styles.navIcon}`}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className={styles.bottom}>
        <hr className={styles.divider} />
        <a href="#" className={styles.support}>
          <i className="bi bi-question-circle"></i>
          <span>Support</span>
        </a>
      </div>

    </div>
  );
}

export default Sidebar;
