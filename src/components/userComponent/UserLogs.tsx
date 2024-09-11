import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { userLogs } from "../../constants/userLog";

function UserLogs() {
  const [currentEntries, setCurrentEntries] = useState<typeof userLogs>([]);
  useEffect(() => {
    if (userLogs.length > 0) {
      setCurrentEntries(userLogs.slice(0, 10)); // Set first 10 entries
    }
  }, []);

  const handlePageChange = (entries: typeof userLogs) => {
    setCurrentEntries(entries);
  };
  return (
    <div className="bg-white shadow-md rounded-md p-5">
      <div className="relative w-full overflow-x-auto z-[50] scroll-smooth">
        <p className="text-base font-normal text-[#344054] mb-5">Logs</p>
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Log ID</th>
              <th className="px-6 py-3">Timestamp</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.timestamp}</td>
                <td className="px-6 py-4">{user.action}</td>
                <td className="px-6 py-4 text-center flex justify-center">
                  <div
                    className={` rounded-full w-fit px-2 text-center ${
                      user.status === "Failed"
                        ? "bg-[#FBEAE9] text-[#CB1A14]"
                        : user.status === "Successful"
                        ? "bg-[#EFFEF0] text-[#116A1D]"
                        : "bg-[#FEF6E7] text-[#F3A218]"
                    }`}
                  >
                    {user.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex w-full justify-center mt-5">
        <Pagination
          entriesPerPage={10}
          entries={userLogs}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default UserLogs;
