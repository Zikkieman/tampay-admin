import DashboardNav from "../../components/dashComponent/dashNavbar/DashboardNav";
import Sidebar from "../../components/dashComponent/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full max-w-[300px]">
        <Sidebar />
      </div>
      <div className="w-full ">
        <DashboardNav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
