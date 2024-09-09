import { PiCaretRightThin } from "react-icons/pi";
import { HiOutlineArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { transactions } from "../../../constants/txnData";
import SelectInput, { CustomSelect } from "../../selectInput/Select";
import { useState } from "react";
import Chart from "../../chart/Chart";
import { Link } from "react-router-dom";

function TxnVolume() {
  const [selectedCurrency, setSelectCurrency] = useState<string>("All");
  const [selectedTime, setSelectedTime] = useState<string | null>("");

  const currencyOptions = [
    { value: "All", label: "All", src: "/src/assets/images/global.png" },
    { value: "USD", label: "USD", src: "/src/assets/images/USA.png" },
    { value: "NGN", label: "NGN", src: "/src/assets/images/Nigeria.png" },
  ];
  const time = ["Today", "Week", "Month", "Year"];
  console.log(selectedTime);
  return (
    <div className="flex items-center gap-4 mt-10  h-[450px]">
      <div className="w-[70%]">
        <div className="flex items-center justify-between">
          <p className="font-medium">Transaction Volume</p>
          <div className="flex items-center gap-2">
            <SelectInput
              options={currencyOptions}
              onSelect={setSelectCurrency}
            />
            <CustomSelect customOptions={time} onSelect={setSelectedTime} />
          </div>
        </div>
        <div>
          <Chart selectedCurrency={selectedCurrency} />
        </div>
      </div>
      <div className="w-[30%] h-full">
        <div className="flex justify-between mb-5">
          <p className="font-medium">Recent Transactions</p>
          <Link to="/dashboard/transactions" className="flex items-center">
            <p className="text-xs text-slateGray">View all</p>
            <PiCaretRightThin />
          </Link>
        </div>
        <div className="border-grayBlue border shadow-sm flex flex-col gap-5 rounded-md p-5 ">
          {transactions.map((txn, i) => (
            <div className="flex items-center justify-between" key={i}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[30px] h-[30px] rounded-full flex items-center justify-center ${
                    txn.amount.startsWith("-") ? "bg-blushPink" : "bg-mintCream"
                  }`}
                >
                  {txn.amount.startsWith("-") ? (
                    <HiArrowNarrowDown className="text-crimsonRed" />
                  ) : (
                    <HiOutlineArrowNarrowUp className="text-emeraldGreen" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-light">{txn.name}</p>
                  <p className="text-coolGray text-xs font-light">
                    {txn.client}
                  </p>
                  <p className="text-xs text-coolGray font-light">{txn.bank}</p>
                </div>
              </div>
              <p className="font-medium text-sm">{txn.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TxnVolume;
