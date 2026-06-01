import RecordCard from "./RecordCard";
import ReportCard from "./ReportCard";
import styles from "./Records.module.css";
import Icon5 from '../../../Assets/Icon5.png'
import Icon6 from '../../../Assets/Icon6.png'
import Icon7 from '../../../Assets/Icon7.png'

export default function RecordsSection() {

  const records = [
    { title: "Full Panorama X-Ray", subtitle: "Nov 04, 2023 • DICOM (42MB)", icon: Icon5 },
    { title: "3D Bone Scan", subtitle: "Nov 04, 2023 • OBJ / STL (124MB)", icon: Icon6 },
    { title: "Treatment Plan PDF", subtitle: "Oct 15, 2023 • 1.2MB", icon: Icon7 },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">

        {/* LEFT SECTION */}
        <div className={`${styles.cardleft} col-md-6`}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Digital Records & Imaging</h4>
            <small>3 Assets available</small>
          </div>

          {records.map((item, index) => (
            <RecordCard 
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className={`${styles.cardright} col-md-6`}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Lab & Pathology Reports</h4>
            <small>2 Reports found</small>
          </div>

          <ReportCard type="biopsy" />
          <ReportCard type="allergy" />
        </div>

      </div>
    </div>
  );
}