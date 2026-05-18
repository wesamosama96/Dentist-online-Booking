// ServicesGrid.jsx

import styles from "./Services.module.css";

import {
  FaTooth,
  FaMagic,
  FaTeeth,
  FaTeethOpen,
  FaAsterisk,
} from "react-icons/fa";

import orthoImg from "../../Assets/fc95105c94136c1916796486995f3a72df36ec6b.png";

const ServicesGrid = () => {
  return (
    <section className={`py-5  ${styles.services}`}>
      <div className="container">
        <div className="row g-4">


          {/* General Dentistry */}
          <div className="col-lg-8">
            
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <FaTooth />
              </div>

              <h3 className={styles.title}>
                General Dentistry
              </h3>

              <p className={styles.desc}>
                Comprehensive preventative care including routine cleanings,
                fillings, and health screenings tailored to your family’s
                needs.
              </p>

              <div className="d-flex gap-2 flex-wrap mt-4">
                <span className={styles.tag}>Exams</span>
                <span className={styles.tag}>Cleanings</span>
                <span className={styles.tag}>Fillings</span>
              </div>
            </div>
          </div>




          {/* Cosmetic Whitening */}
          <div className="col-lg-4">
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <FaMagic />
              </div>

              <h3 className={styles.title}>
                Cosmetic Whitening
              </h3>

              <p className={styles.desc}>
                Professional in-office whitening treatments that restore
                brilliance to your smile in just one visit.
              </p>
            </div>
          </div>



          {/* Orthodontics */}
          <div className="col-lg-4">
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <FaTeeth />
              </div>

              <h3 className={styles.title}>
                Orthodontics
              </h3>

              <p className={styles.desc}>
                Straighten your teeth with modern solutions including clear
                aligners and traditional braces for all ages.
              </p>
              <img
                src={orthoImg}
                alt="orthodontics"
                className={styles.image}
              />
            </div>
          </div>




          {/* Dental Implants */}
          <div className="col-lg-4">
            <div className={styles.card}>
              <div className={styles.iconBox}>
                <FaTeethOpen />
              </div>

              <h3 className={styles.title}>
                Dental Implants
              </h3>

              <p className={styles.desc}>
                Permanent solutions for missing teeth that look, feel, and
                function like natural tooth structures.
              </p>
            </div>
          </div>





          {/* Emergency Care */}
          <div className="col-lg-4">
            <div className={`${styles.card} ${styles.emergencyCard}`}>
              <div className={`${styles.iconBox} ${styles.emergencyIcon}`}>
                <FaAsterisk />
              </div>

              <h3 className={styles.emergencyTitle}>
                Emergency Care
              </h3>

              <p className={styles.emergencyDesc}>
                Urgent dental assistance for pain, injuries, or broken
                restorations. We prioritize same-day appointments.
              </p>

              <a href="tel:+20123456789" className={styles.callBtn}>
                Call Now: (555) 012-3456
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;