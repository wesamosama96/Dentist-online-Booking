import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Footer from "../../components/Dashboard/Footer/Footer";

function Dashboard() {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar adminName="Fakhr" />
        <main className="p-4 flex-grow-1">
          <Outlet />
        </main>

         <Footer/>

      </div>
    </div>
  );
}

export default Dashboard;