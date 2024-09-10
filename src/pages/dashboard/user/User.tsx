import { useEffect, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import Search from "../../../components/searchInput/Search";
import { userDetails } from "../../../constants/users";
import UsersAccordion from "../../../components/accordion/UsersAccordion";

function User() {
  const [currentEntries, setCurrentEntries] = useState<typeof userDetails>([]);
  //   const time = ["Today", "Week", "Month", "Year"];

  useEffect(() => {
    if (userDetails.length > 0) {
      setCurrentEntries(userDetails.slice(0, 10)); // Set first 10 entries
    }
  }, []);

  const handlePageChange = (entries: typeof userDetails) => {
    setCurrentEntries(entries);
  };

  return (
    <div>
      <div className="p-4 font-sora">
        <div className="flex justify-between items-center my-10">
          <div className="flex items-center gap-2 ">
            <div>
              <p className="text-base font-medium text-darkNavy">All Users</p>
            </div>
            <div className="flex  w-[350px] h-[35px] rounded-lg items-center px-3 gap-1">
              <Search placeholder="Search by name or account number" />
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
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Full Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone Number</th>
                <th className="px-6 py-3">Registration Date</th>
                <th className="px-6 py-3">KYC Status</th>
                <th className="px-6 py-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* Use currentEntries for the table data */}
              {currentEntries.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phoneNumber}</td>
                  <td className="px-6 py-4">{user.Date}</td>
                  <td className="px-6 py-4 text-center flex justify-center">
                    <div
                      className={` rounded-full w-fit px-2 text-center ${
                        user.status === "Failed"
                          ? "bg-[#FBEAE9] text-[#CB1A14]"
                          : user.status === "Verified"
                          ? "bg-[#EFFEF0] text-[#116A1D]"
                          : "bg-[#FEF6E7] text-[#F3A218]"
                      }`}
                    >
                      {user.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.Balance}</td>
                  {/* <td className="">
                    <ActionTooltips />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex w-full justify-center mt-5">
          <Pagination
            entriesPerPage={10}
            entries={userDetails}
            onPageChange={handlePageChange}
          />
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default User;
