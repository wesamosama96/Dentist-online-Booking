import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./AppointmentTable.module.css";
import doctor from "../../../Assets/doctor.png";
import Logo from "../../../Assets/Logo.png";
import icoon from "../../../Assets/icoon.png";

export default function AppointmentTable() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container-fluid">
      <div className="container-content">
        {/* Header */}
        <div
          className={`${styles.Appointments} d-flex justify-content-between`}
        >
          <div className={styles.Appointments_text}>
            <h2>Your Appointments</h2>
            <p>Manage your upcoming visits and view clinical history.</p>
          </div>

          <div
            className={`${styles.button} btn d-flex gap-3 align-items-center`}
          >
            <i className="fa-solid fa-circle-plus"></i>
            <h3 className="m-0">Book New Appointment</h3>
          </div>
        </div>

        {/* Layout */}
        <div className="row mt-4">
          {/* Calendar */}
          <div className="col-md-7">
            <div className={styles.calendarBox}>
              <Calendar
                onChange={(value) => setSelectedDate(value)}
                value={selectedDate}
                tileClassName={({ date, view }) => {
                  if (view === "month" && date.getDate() === 13) {
                    return styles.activeDay;
                  }
                  return null;
                }}
              />

              <p className="mt-3 text-center">
                Selected: {selectedDate.toDateString()}
              </p>
            </div>
          </div>

          {/* Upcoming */}
          <div className="col-md-5">
            <div className={`${styles.upcoming} d-flex gap-2`}>
              <i className="fa-solid fa-right-to-bracket py-1"></i>
              <h4 className="mb-3">Upcoming</h4>
            </div>

            <div className={styles.card}>
              <div className="d-flex align-items-center gap-3">
                <h6>Routine Dental Prophylaxis</h6>
                <span className={styles.status}>Confirmed</span>
              </div>

              <div className="d-flex gap-2 py-2">
                <i className="fa-regular fa-user py-1"></i>
                <p className="text-muted">Dr. Sarah Mitchell</p>
              </div>

              <div className="d-flex gap-2 py-1">
                <i class="fa-regular fa-calendar py-1"></i>
                <span>Oct 17, 2024</span>
                <span>09:30 AM</span>
              </div>

              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-primary btn-sm">
                  Reschedule
                </button>
                <button className="btn btn-link text-secondary btn-sm">
                  Cancel
                </button>
              </div>
            </div>

            <div className={styles.card}>
              <div className="d-flex gap-3">
                <div className="img">
                  <img src={doctor} alt="" />
                </div>
                <div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>Invisalign Consultation</h6>
                    <span className={styles.status}>New</span>
                  </div>
                  <div className="d-flex gap-2 py-2">
                    <i className="fa-regular fa-user py-1"></i>
                    <p className="text-muted">Dr. Robert Chen</p>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 py-1">
                <i class="fa-regular fa-calendar py-1"></i>
                <span>Nov 04, 2024</span>
                <span>02:15 PM</span>
              </div>

              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-primary btn-sm">
                  Reschedule
                </button>
                <button className="btn btn-link text-secondary btn-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History */}

      <div className={styles.History}>
        <div className={styles.History_content}>
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
          <p className="m-0 text-muted small" style={{ marginLeft: "10px" }}>
            Recognized by Leading Providers
          </p>
        </div>

        <div className={styles.History_text}>
          <div className="d-flex gap-2 align-items-center">
            <i
              className="fa-solid fa-arrow-rotate-right fs-4"
              style={{ color: "#00236F" }}
            ></i>
            <h2
              style={{
                color: "#00236F",
                fontWeight: "bold",
                margin: 0,
                fontSize: "28px",
              }}
            >
              History
            </h2>
          </div>

          <div className={styles.history_card_wrapper}>
            <div className={styles.Deep}>
              <div className={styles.Deep_info}>
                <h2>Deep Cleaning</h2>
                <p>July 12, 2024 • Dr. Sarah Mitchell</p>
              </div>
              <img src={icoon} alt="" />
            </div>

            <div className={styles.Deep}>
              <div className={styles.Deep_info}>
                <h2>Emergency Filling</h2>
                <p>May 30, 2024 • Dr. Robert Chen</p>
              </div>
              <img src={icoon} alt="" />
            </div>

            <div className={styles.Deep}>
              <div className={styles.Deep_info}>
                <h2>Initial Consultation</h2>
                <p>April 15, 2024 • Dr. Sarah Mitchell</p>
              </div>
              <img src={icoon} alt="" />
            </div>

            <div className={styles.view_all_btn}>View All History</div>
          </div>
        </div>
      </div>
    </div>
  );
}
