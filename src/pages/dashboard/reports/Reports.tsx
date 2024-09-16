import { useEffect, useState } from "react";
import UsersAccordion from "../../../components/accordion/UsersAccordion";
import Search from "../../../components/searchInput/Search";
import { reportEntries } from "../../../constants/reportsEntries";
import Pagination from "../../../components/pagination/Pagination";

function Reports() {
  const [currentEntries, setCurrentEntries] = useState<typeof reportEntries>(
    []
  );

  useEffect(() => {
    if (reportEntries.length > 0) {
      setCurrentEntries(reportEntries.slice(0, 10)); // Set first 10 entries
    }
  }, []);

  const handlePageChange = (entries: typeof reportEntries) => {
    setCurrentEntries(entries);
  };

  return (
    <div className="px-4 py-5 ">
      <div className="flex justify-between items-center my-10">
        <div className="flex items-center gap-2 ">
          <div>
            <p className="text-base font-medium text-darkNavy">All Reports</p>
          </div>
          <div className="flex  w-[350px] h-[35px] rounded-lg items-center px-3 gap-1">
            <Search placeholder="Search by query ID or user’s name" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <UsersAccordion />
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-x-auto z-[50] scroll-smooth">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Report ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Query Type</th>
              <th className="px-6 py-3">Assigned to</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Last Updated</th>
              <th className="px-6 py-3">Resolution Time</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((report) => (
              <tr
                key={report.reportId}
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                // onClick={() => NavUserId(user.id)}
              >
                <td className="px-6 py-4">{report.reportId}</td>
                <td className="px-6 py-4">{report.date}</td>
                <td className="px-6 py-4">{report.fullName}</td>
                <td className="px-6 py-4">{report.queryType}</td>
                <td className="px-6 py-4">{report.assignedTo}</td>
                <td className="px-6 py-4 text-center flex justify-center">
                  <div
                    className={` rounded-full w-fit px-2 text-center ${
                      report.status === "Assigned"
                        ? "bg-[#98A2B3] text-[#fff]"
                        : report.status === "Resolved"
                        ? "bg-[#EFFEF0] text-[#116A1D]"
                        : "bg-[#FEF6E7] text-[#F3A218]"
                    }`}
                  >
                    {report.status}
                  </div>
                </td>
                <td className="px-6 py-4">{report.lastUpdated}</td>
                <td className="px-6 py-4">{report.resolutionTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center mt-5">
        <Pagination
          entriesPerPage={10}
          entries={reportEntries}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Reports;
