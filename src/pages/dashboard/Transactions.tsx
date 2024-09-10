import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { transactions } from "../../constants/transaction";
import { CiSearch } from "react-icons/ci";
// import { CustomSelect } from "../../components/selectInput/Select";
import ActionTooltips from "../../components/tooltip/Tooltip";
import FilterAccordion from "../../components/accordion/TxnFilter";
import ExportAccordion from "../../components/accordion/ExportOption";

const Transactions = () => {
  const [currentEntries, setCurrentEntries] = useState<typeof transactions>([]);
  //   const time = ["Today", "Week", "Month", "Year"];

  useEffect(() => {
    if (transactions.length > 0) {
      setCurrentEntries(transactions.slice(0, 10)); // Set first 10 entries
    }
  }, []);

  const handlePageChange = (entries: typeof transactions) => {
    setCurrentEntries(entries);
  };

  return (
    <div className="p-4 font-sora">
      <div className="flex justify-between items-center my-10">
        <div className="flex items-center gap-2 ">
          <div>
            <p className="text-base font-medium text-darkNavy">
              All Transactions
            </p>
          </div>
          <div className="flex border w-[350px] border-coolGray h-[35px] rounded-lg items-center px-3 gap-1">
            <div>
              <CiSearch size={20} className="text-coolGray" />
            </div>
            <div className="w-full font-sora">
              <input
                name=""
                id=""
                className=" w-full bg-transparent placeholder:text-coolGray placeholder:font-light text-sm border-none outline-none"
                placeholder="Search by Tran ID and Account Number"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <ExportAccordion />
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
              <th className="px-6 py-3">Transaction ID</th>
              <th className="px-6 py-3">Account Number/Bank</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Bank</th>
              <th className="px-6 py-3">Payment Type</th>
              <th className="px-6 py-3">Currency</th>
              <th className="px-6 py-3">Payment Method</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Use currentEntries for the table data */}
            {currentEntries.map((transaction) => (
              <tr
                key={transaction.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{transaction.id}</td>
                <td className="px-6 py-4">
                  {transaction.accountNumber}
                  <br />
                  {transaction.bank}
                </td>
                <td className="px-6 py-4">
                  {transaction.date}
                  <br />
                  {transaction.time}
                </td>
                <td className="px-6 py-4">{transaction.bank}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <div
                    className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                      transaction.arrowType !== "down"
                        ? "bg-[#F2BCBA]"
                        : "bg-[#DAFEDD]"
                    }`}
                  >
                    {transaction.arrowType !== "down" ? (
                      <HiArrowLongDown className="text-crimsonRed" size={18} />
                    ) : (
                      <HiArrowLongUp className="text-emeraldGreen" size={18} />
                    )}
                  </div>

                  {transaction.paymentType}
                </td>
                <td className="px-6 py-4">{transaction.currency}</td>
                <td className="px-6 py-4">{transaction.paymentMethod}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    transaction.status === "Successful"
                      ? "text-green-600 "
                      : "text-yellow-500"
                  }`}
                >
                  <div
                    className={`py-1 px-1 rounded-full ${
                      transaction.status === "Successful"
                        ? "bg-[#EFFEF0]"
                        : transaction.status === "Pending"
                        ? "bg-[#FEF6E7]"
                        : ""
                    }`}
                  >
                    {transaction.status}
                  </div>
                </td>
                <td className="px-6 py-4">{transaction.amount}</td>
                <td className="">
                  <ActionTooltips />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex w-full justify-center mt-5">
        <Pagination entries={transactions} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Transactions;
