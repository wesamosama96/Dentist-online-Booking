import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import jane from "../../../Assets/Jane Doe.png";

export default function Sidebar() {
  const links = [
    { icon: "fa-border-all", title: "Overview", path: "/Overview" },
    { icon: "fa-calendar-check", title: "Appointments", path: "/Appointments" },
    { icon: "fa-folder-minus", title: "Records", path: "/Records" },
    { icon: "fa-money-check-alt", title: "Billing", path: "/Billing" },
    { icon: "fa-gear", title: "Settings", path: "/Settings" },
  ];

  return (
    <aside
      className={`${styles.Sidebar} min-vh-100 p-4 d-flex flex-column align-items-center`}
    >
      <div className="w-100 text-center mb-4">
        <div
          className={`${styles.text} fs-5 fw-bold mb-3`}
          style={{ color: "#00236F" }}
        >
          Aether Dental
        </div>
        <img
          src={jane}
          alt="Jane Doe"
          className="rounded-circle mb-2"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <h2 className="fw-bold fs-5 mb-1" style={{ color: "#00236F" }}>
          Jane Doe
        </h2>
        <p className={`${styles.Patient} text-muted small mb-0`}>
          Patient #8821
        </p>
      </div>

      <nav className="d-flex flex-column gap-2 w-100 h-100">
        {links.map((item, index) => (
          <NavLink
            to={`/dashboard/${item.path}`}
            className={({ isActive }) =>
              `${styles.navItem} d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-decoration-none ${isActive ? styles.active : ""}`
            }
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span className="fw-semibold">{item.title}</span>
          </NavLink>
        ))}

        <button
          className={`${styles.newAppBtn} btn w-100 mt-auto py-2.5 fw-bold`}
        >
          <i className="fa-solid fa-plus me-2"></i> New Appointment
        </button>
      </nav>
    </aside>
  );
}
