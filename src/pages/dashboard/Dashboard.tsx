import DashboardNav from "../../components/dashComponent/dashNavbar/DashboardNav";
import Sidebar from "../../components/dashComponent/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full max-w-[300px] h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <DashboardNav />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
