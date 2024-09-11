import NGN from "../../assets/images/Nigeria.png";
import USD from "../../assets/images/USA.png";
import Rechart from "../chart/Rechart";

function AccountActivity() {
  return (
    <div className="flex font-sora gap-5 w-full justify-center mt-10">
      <div className="w-full max-w-[600px] mt-5 bg-white rounded-xl shadow-md py-10 px-10 flex flex-col gap-5">
        <p className="text-[#344054] text-base">Account Balance</p>{" "}
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img src={NGN} alt="NGN" />
            <p className="text-[#344054] text-base">Naira Balance</p>
          </div>
          <p className="text-[20px] font-medium text-[#344054]">
            NGN 1,200,000
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img src={USD} alt="NGN" />
            <p className="text-[#344054] text-base">Dollar Balance</p>
          </div>
          <p className="text-[20px] font-medium text-[#344054]">$90.88</p>
        </div>
      </div>
      <div className=" p-5 rounded-xl bg-white shadow-md flex-grow">
        <Rechart title="Activity" />
      </div>
    </div>
  );
}

export default AccountActivity;
