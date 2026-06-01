import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const data = [
  {
    date: "Oct 12, 2023",
    service: "Routine Cleaning & Polish",
    doctor: "Dr. Elena Vance",
    status: "Completed",
  },
  {
    date: "Aug 22, 2023",
    service: "Composite Filling (L-14)",
    doctor: "Dr. Marcus Thorne",
    status: "Completed",
  },
  {
    date: "May 15, 2023",
    service: "Initial Consultation",
    doctor: "Dr. Elena Vance",
    status: "Pending",
  },
];

export default function ClinicalVisits() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;

  //  Filter + Search
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.service.toLowerCase().includes(search.toLowerCase()) ||
      item.doctor.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  //  Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="mt-5">
      <div className="card border-0 shadow-sm rounded-4 p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Recent Clinical Visits</h5>
          <button className="btn btn-outline-success btn-sm">
            Download All
          </button>
        </div>

        {/* Search  */}
        <div className="d-flex gap-2 mb-3 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="form-select w-auto"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Records</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td className="fw-bold text-primary">{item.date}</td>
                  <td>{item.service}</td>
                  <td>{item.doctor}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Completed"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <FaFileAlt className="text-primary" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-end">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
