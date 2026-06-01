import Records from "../../components/Dashboard/Records/Records" 
import ClinicalVisits from "../../components/Dashboard/Records/ClinicalVisits";
import DigitalRecords from "../../components/Dashboard/Records/DigitalRecords";
export default function RecordsPage() {
  return (
    <div className="container mt-4">
      <Records />
      <div className="mt-5">
        <ClinicalVisits />
      </div>
      <div className="mt-5">
        <DigitalRecords />
      </div>
    </div>
  )
}
