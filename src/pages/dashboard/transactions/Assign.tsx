import { useState } from "react";
import SelectInput from "../../../components/selectInput/Select";

function Assign() {
  const [selectedCurrency, setSelectCurrency] = useState<string>("All");
  console.log(selectedCurrency);
  const currencyOptions = [
    {
      value: "Chinedu Okafor",
      label: "Chinedu Okafor",
      src: "/src/assets/images/lady.png",
    },
    {
      value: "Chinedu Okafor",
      label: "Chinedu Okafor",
      src: "/src/assets/images/lady.png",
    },
    {
      value: "Chinedu Okafor",
      label: "Chinedu Okafor",
      src: "/src/assets/images/lady.png",
    },
  ];
  return (
    <div className="h-full flex justify-center items-center font-sora">
      <div className="w-full max-w-[500px] py-[50px] gap-6 rounded-lg bg-white shadow-md  mx-auto flex flex-col items-center">
        <p className="font-semibold text-lg">Assign Transaction To</p>
        <div className="flex items-center gap-2">
          <SelectInput
            options={currencyOptions}
            onSelect={setSelectCurrency}
            search
            placeholder="Select Admin"
          />
        </div>
        <div className="flex items-center gap-2">
          <SelectInput
            options={currencyOptions}
            onSelect={setSelectCurrency}
            placeholder="Select Issue"
          />
        </div>
      </div>
    </div>
  );
}

export default Assign;
