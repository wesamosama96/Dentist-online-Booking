import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Footer from "../../components/Dashboard/Footer/Footer";
// import Overview from "./Overview";
function Dashboard() {
  return (
    <>
      <Navbar adminName="Fakhr" />
      <div className="d-flex">
    <Sidebar></Sidebar>
    <div className="d-flex">
      <Outlet />
    </div>
    </div>
      <Footer />
    </>
  );
}

export default Dashboard;
