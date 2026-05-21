import img from "../../Assets/img.png";
import icon from "../../Assets/icon.png";
import container from "../../Assets/Container (1).png";
import icon2 from "../../Assets/Icon 2.png";
import styles from "./Status.module.css";

function Status() {
  const appointments = [
    {
      id: 1,
      service: "Bi-Annual Cleaning",
      category: "Preventative Care",
      doctor: "Dr. Sarah Miller",
      date: "Oct 24, 2024",
      status: "Confirmed",
      actionType: "menu",
    },
    {
      id: 2,
      service: "Wisdom Tooth Consultation",
      category: "Oral Surgery",
      doctor: "Dr. James Wilson",
      date: "Aug 12, 2024",
      status: "Completed",
      actionType: "download",
    },
    {
      id: 3,
      service: "Dental Filling",
      category: "Restorative Care",
      doctor: "Dr. Sarah Miller",
      date: "Mar 05, 2024",
      status: "Completed",
      actionType: "download",
    },
  ];

  return (
    <section className="py-4">
      <div className="container-fluid">
        <div className="row g-4 align-items-stretch">
          {/* Welcome Card */}
          <div className="col-12 col-lg-8">
            <div
              className={`${styles.welcome_card} p-4 h-100 d-flex flex-column flex-md-row align-items-center justify-content-between`}
            >
              <div className={styles.welcome_text}>
                <h2 className="fw-bold mb-3">Welcome back, John!</h2>
                <p className="text-muted mb-4">
                  Your oral health is looking great. You have an upcoming{" "}
                  <span className="fw-bold" style={{ color: "#00236F" }}>
                    Bi-Annual Cleaning
                  </span>{" "}
                  scheduled for next Tuesday.
                </p>

                <div
                  className={`${styles.next_visit} p-3 d-flex align-items-center`}
                >
                  <img
                    src={icon}
                    alt="Next Appointment"
                    className="me-3"
                    style={{ width: "26px", height: "26px" }}
                  />
                  <div>
                    <small
                      className="text-muted d-block fw-bold"
                      style={{ fontSize: "11px" }}
                    >
                      NEXT VISIT
                    </small>
                    <h5
                      className={`${styles.next} m-0 fw-bold`}
                      style={{ fontSize: "16px" }}
                    >
                      Oct 24, 2024 at 10:30 AM
                    </h5>
                  </div>
                </div>
              </div>

              <div className={`${styles.welcome_img} mt-3 mt-md-0`}>
                <img
                  src={img}
                  alt="Status"
                  className={`${styles.clinic_image} img-fluid`}
                />
              </div>
            </div>
          </div>

          {/* Health Tips Card */}
          <div className="col-12 col-lg-4">
            <div
              className={`${styles.health_card} p-4 h-100 d-flex flex-column text-white`}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={container}
                  alt="Health"
                  className="me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                <h4 className="m-0 fw-bold">Health Tips</h4>
              </div>

              <p className="mb-4" style={{ fontSize: "14px", opacity: 0.9 }}>
                Did you know? Replacing your toothbrush every 3-4 months is
                essential for effective plaque removal.
              </p>

              <div className="d-flex align-items-start mb-3">
                <img
                  src={icon2}
                  alt="Health Tip"
                  className="me-2 mt-1"
                  style={{ width: "16px" }}
                />
                <p className="m-0" style={{ fontSize: "13px", opacity: 0.85 }}>
                  Floss at least once daily to remove food particles between
                  teeth.
                </p>
              </div>

              <div className="d-flex align-items-start mb-4">
                <img
                  src={icon2}
                  alt="Health Tip"
                  className="me-2 mt-1"
                  style={{ width: "16px" }}
                />
                <p className="m-0" style={{ fontSize: "13px", opacity: 0.85 }}>
                  Floss at least once daily to remove food particles between
                  teeth.
                </p>
              </div>

              <button
                className="btn btn-primary mt-auto w-100 border-0"
                style={{ backgroundColor: "#7f9cf5", borderRadius: "8px" }}
              >
                Read More Tips
              </button>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mt-4">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className={`${styles.card} h-100 m-0`}>
                <i className="fa-solid fa-calendar-plus fa-2xl"></i>
                <h2 className="m-0 fw-bold fs-4">Book Now</h2>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className={`${styles.card} h-100 m-0`}>
                <i className="fa-solid fa-file-medical fa-2xl"></i>
                <h2 className="m-0 fw-bold fs-4">View Records</h2>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className={`${styles.card} h-100 m-0`}>
                <i className="fa-solid fa-credit-card fa-2xl"></i>
                <h2 className="m-0 fw-bold fs-4">Pay Bill</h2>
              </div>
            </div>
          </div>
        </div>

         {/* Appointment History */}

        <div className="mt-4">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold" style={{ color: "#00236F" }}>
                Appointment History
              </h5>
              <a
                href="#view-all"
                className="text-decoration-none fw-semibold"
                style={{ color: "#00236F" }}
              >
                View All
              </a>
            </div>

            <div className="table-responsive px-3">
              <table className="table align-middle table-borderless">
                <thead
                  className="text-uppercase fs-7 text-muted"
                  style={{ backgroundColor: "#00236F" }}
                >
                  <tr>
                    <th className="py-3 px-3">Service</th>
                    <th className="py-3">Doctor</th>
                    <th className="py-3">Date</th>
                    <th className="py-3">Status</th>
                    <th className="py-3 text-end px-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="border-bottom">
                      {/* Service */}
                      <td className="py-3 px-3">
                        <div className="fw-bold" style={{ color: "#00236F" }}>
                          {appointment.service}
                        </div>
                        <small className="text-muted">
                          {appointment.category}
                        </small>
                      </td>

                      {/* Doctor */}
                      <td className="text-secondary">{appointment.doctor}</td>

                      {/* Date */}
                      <td className="text-secondary">{appointment.date}</td>

                      {/* Status */}
                      <td>
                        <span
                          className={`badge px-3 py-2 rounded-pill fw-semibold ${
                            appointment.status === "Confirmed"
                              ? "bg-success-subtle text-success"
                              : "bg-secondary-subtle text-secondary"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                      <td className="text-end px-3">
                        <button className="btn btn-link text-muted p-0 border-0 bg-transparent">
                          {appointment.actionType === "menu" ? (
                            <i className="fa-solid fa-ellipsis-vertical fs-5"></i>
                          ) : (
                            <i className="fa-solid fa-download fs-5"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Status;
