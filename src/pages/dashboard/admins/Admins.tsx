import { useEffect, useState } from "react";
import { transactions } from "../../../constants/transaction";
import Search from "../../../components/searchInput/Search";
import Button from "../../../components/buttons/Buttons";
import FilterAccordion from "../../../components/accordion/TxnFilter";
import Pagination from "../../../components/pagination/Pagination";
import { staffList } from "../../../constants/staffList";
import { useNavigate } from "react-router-dom";

function Admins() {
  const [currentEntries, setCurrentEntries] = useState<typeof staffList>([]);
  const navigate = useNavigate();
  //   const time = ["Today", "Week", "Month", "Year"];

  useEffect(() => {
    if (transactions.length > 0) {
      setCurrentEntries(staffList.slice(0, 10)); // Set first 10 entries
    }
  }, []);

  const handlePageChange = (entries: typeof staffList) => {
    setCurrentEntries(entries);
  };

  const navToAdminProfile = (id: string) => {
    navigate(`/dashboard/admins/${id}`);
  };

  return (
    <div className="p-4 font-sora">
      <div className="flex flex-col justify-between items-center ">
        <div className="flex w-full justify-between items-center gap-2 my-10">
          <div className="flex gap-2 items-center">
            <p className="text-base font-medium text-darkNavy">All Admins</p>
            <div className="flex  w-[350px] h-[35px] rounded-lg items-center px-3 gap-1">
              <Search placeholder="Search by staff ID or name" />
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center ">
            <div className="flex  w-[200px] rounded-lg items-center gap-1 mt-[-40px]">
              <Button
                title="Add Admin"
                isValid
                onClick={() => navigate("/dashboard/admins/addadmin")}
              />
            </div>
            <div>
              <FilterAccordion />
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-x-auto z-[50] scroll-smooth">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Staff ID</th>
                <th className="px-6 py-3">Full Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone Number</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Date Onboarded</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((staff) => (
                <tr
                  key={staff.id}
                  className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => navToAdminProfile(staff.id)}
                >
                  <td className="px-6 py-4">{staff.id}</td>
                  <td className="px-6 py-4">{staff.fullName}</td>
                  <td className="px-6 py-4">{staff.email}</td>
                  <td className="px-6 py-4">{staff.phoneNumber}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full w-fit px-2 text-center ${
                        staff.role === "Super Admin"
                          ? "bg-green-100 text-green-600"
                          : staff.role === "Customer Support"
                          ? "bg-purple-100 text-purple-600"
                          : staff.role === "Operations Manager"
                          ? "bg-blue-100 text-blue-600"
                          : staff.role === "IT Support"
                          ? "bg-gray-600 text-white"
                          : ""
                      }`}
                    >
                      {staff.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{staff.dateOnboarded}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full w-fit px-2 text-center ${
                        staff.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : staff.status === "Offline"
                          ? "bg-gray-100 text-gray-600"
                          : staff.status === "Assigned"
                          ? "bg-gray-200 text-gray-500"
                          : staff.status === "Resolved"
                          ? "bg-yellow-100 text-yellow-500"
                          : ""
                      }`}
                    >
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{staff.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex w-full justify-center mt-5">
          <Pagination
            entriesPerPage={11}
            entries={staffList}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Admins;
