// ConsultationSection.jsx

import styles from "./Services.module.css";

const ConsultationSection = () => {
  return (
    <section className={`py-5 ${styles.consultation}`}>
      <div className="container">

        <div className="text-center">

          <h2 className={styles.title}>
            Didn't find what you're looking for?
          </h2>

          <p className={styles.desc}>
            Our clinic offers a wide range of specialized procedures and
            patient-centered care plans. Contact our concierge team to discuss
            your unique needs.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">

            <button className={styles.primaryBtn}>
              Schedule a Consultation
            </button>

            <button className={styles.secondaryBtn}>
              Inquire About Services
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;