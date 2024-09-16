import { useEffect, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import { rateEntries } from "../../../constants/rateEntries";
import { useNavigate } from "react-router-dom";

function Rates() {
  const [currentEntries, setCurrentEntries] = useState<typeof rateEntries>([]);
  const navigate = useNavigate();

  const navToUpdate = () => {
    navigate("/dashboard/rates/update");
  };

  useEffect(() => {
    if (rateEntries.length > 0) {
      setCurrentEntries(rateEntries.slice(0, 10));
    }
  }, []);

  const handlePageChange = (entries: typeof rateEntries) => {
    setCurrentEntries(entries);
  };
  return (
    <div className="px-4 py-5">
      <p>Rates</p>
      <div className="relative w-full overflow-x-auto z-[50] scroll-smooth mt-10">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Currency</th>
              <th className="px-6 py-3">Rate</th>
              <th className="px-6 py-3">Last updated</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((rate) => (
              <tr key={rate.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{rate.currency}</td>
                <td className="px-6 py-4">{rate.rate}</td>
                <td className="px-6 py-4">{rate.date}</td>
                <td className="px-6 py-4 cursor-pointer" onClick={navToUpdate}>
                  {rate.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center mt-5">
        <Pagination
          entriesPerPage={9}
          entries={rateEntries}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Rates;
