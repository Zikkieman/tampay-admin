import { metrics } from "../../../constants/Metrics";
import AdminsRates from "../admins-rates/AdminsRates";
import MetricsCard from "../cards/MetricsCard";
import TxnVolume from "../txnVolume/TxnVolume";

function Board() {
  return (
    <div className="font-sora flex flex-col">
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
      <div className=" w-full px-4 mb-5">
        <TxnVolume />
      </div>
      <div className=" w-full px-4 mt-10">
        <AdminsRates />
      </div>
    </div>
  );
}

export default Board;
