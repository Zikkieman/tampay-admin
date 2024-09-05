import { PiCaretRightThin } from "react-icons/pi";
import Lady from "../../../assets/images/lady.png";
import { RateIcon } from "../../icons";
import USA from "../../../assets/images/USA.png";

function AdminsRates() {
  const admins = Array(5).fill({
    imgSrc: Lady,
    name: "Ariana Bush",
    mail: "@ariana007",
  });
  return (
    <div className="flex w-full mb-0 gap-4 items-center">
      <div className="w-[70%]">
        <div className="flex justify-between mb-3">
          <p className="font-medium">Active Admins</p>
          <div className="flex items-center">
            <p className="text-xs text-slateGray">View all</p>
            <PiCaretRightThin />
          </div>
        </div>
        <div className="border border-grayBlue h-[120px] rounded-lg shadow-sm w-full  flex gap-4 items-center px-5">
          {admins.map((admin, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={admin.imgSrc} alt="" />
              <p className="text-xs mt-2">{admin.name}</p>
              <p className="text-xs text-coolGray">{admin.mail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[30%]">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <RateIcon color="#F3A218" />
            <p className="font-medium">Rates</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs text-slateGray">View all</p>
            <PiCaretRightThin />
          </div>
        </div>
        <div className="border flex justify-between border-grayBlue p-3 h-[120px] shadow-sm rounded-xl">
          <div className="flex gap-2 items-center h-fit">
            <img src={USA} alt="images" className="w-[30px] h-[30px]" />
            <p className="text-charcoalBlue text-xs">United States Dollar</p>
          </div>
          <p className="text-xs text-charcoalBlue">$1/₦1600</p>
        </div>
      </div>
    </div>
  );
}

export default AdminsRates;
