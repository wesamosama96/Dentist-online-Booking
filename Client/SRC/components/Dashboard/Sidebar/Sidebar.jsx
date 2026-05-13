import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import jane from "../../../Assets/Jane Doe.png";

export default function Sidebar() {
  const links = [
    {
      icon: "fa-border-all", 
      title: "Overview", path: "/Overview"
    },
    {
      icon: "fa-calendar-check",
      title: "Appointments", path: "/Appointments"
    },
    {
      icon: "fa-folder-minus",
      title: "Records", path: "/Records"
    },
    {
      icon: "fa-money-check-alt",
      title: "Billing", path: "/Billing"
    },
    {
      icon: "fa-gear",
      title: "Settings", path: "/Settings"
    },
  ];

  return (
    <aside className={`${styles.Sidebar} min-vh-100 p-4`}>
      <div className={`${styles.text} px-4 mb-3 fs-5 fw-bold`}>Aether Dental</div>
      <img src={jane} alt="Jane Doe" className="img-fluid rounded-circle mb-3" />
      <h2 className={`${styles.text} fw-bold fs-4`}>Jane Doe</h2>
      <p className={`${styles.Patient}`}>Patient #8821</p>

      <nav>
        {links.map((item, index) => (
          <NavLink 
            to={`/dashboard/${item.path}`} 
            className={({ isActive }) => 
              `${styles.navItem} d-flex align-items-center gap-3 py-2 ${isActive ? styles.active : ""}`
            } 
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}