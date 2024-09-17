import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import Pagination from "../../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { transactions } from "../../../constants/transaction";
// import { CustomSelect } from "../../components/selectInput/Select";
import ActionTooltips from "../../../components/tooltip/Tooltip";
import FilterAccordion from "../../../components/accordion/TxnFilter";
import ExportAccordion from "../../../components/accordion/ExportOption";
import Search from "../../../components/searchInput/Search";

const Transactions = () => {
  const [currentEntries, setCurrentEntries] = useState<typeof transactions>([]);
  const [filteredEntries, setFilteredEntries] = useState<typeof transactions>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (transactions.length > 0) {
      setFilteredEntries(transactions);
    }
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredEntries(transactions);
    } else {
      const filtered = transactions.filter(
        (transaction) =>
          transaction.id.includes(searchQuery) ||
          transaction.accountNumber.includes(searchQuery)
      );
      setFilteredEntries(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="px-4 font-sora">
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-3 items-center w-full max-w-[600px]">
          <p className="text-lg font-medium text-darkNavy">All Transactions</p>
          <div className="w-full max-w-[400px]">
            <Search
              placeholder="Search by Tran ID and Account Number"
              onSearch={setSearchQuery}
            />
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
            {currentEntries.slice(0, 10).map((transaction) => (
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

      <div className="flex w-full justify-center mt-2">
        <Pagination
          entriesPerPage={10}
          entries={filteredEntries}
          onPageChange={setCurrentEntries}
        />
      </div>
    </div>
  );
};

export default Transactions;
