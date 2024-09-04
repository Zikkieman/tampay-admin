import { metrics } from "../../../constants/Metrics";
import AdminsRates from "../admins-rates/AdminsRates";
import MetricsCard from "../cards/MetricsCard";
import DashboardNav from "../dashNavbar/DashboardNav";

function Board() {
  return (
    <div className="font-sora flex flex-col min-h-screen pb-5">
      <DashboardNav />
      <div className="py-6 px-4">
        <p className="mb-3">Account Metrics</p>
        <div className="flex gap-3">
          {metrics.map((data, i) => (
            <div className="flex-1">
              <MetricsCard i={i} data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto w-full px-4 ">
        <AdminsRates />
      </div>
    </div>
  );
}

export default Board;
