import Back from "../../../components/back/Back";
import Lady from "../../../assets/images/lady.png";
import { useNavigate } from "react-router-dom";
import Verified from "../../../assets/images/verified.png";
import Rechart from "../../../components/chart/Rechart";
import UserInfo from "../../../components/userComponent/UserInfo";
import UserLogs from "../../../components/userComponent/UserLogs";

function SuperAdmin() {
  const navigate = useNavigate();
  const navToChangeAdmin = () => {
    navigate("/dashboard/admins/changeadmin");
  };
  const navToDeleteAdmin = () => {
    navigate("/dashboard/admins/deleteadmin");
  };
  return (
    <div className="px-4 py-5">
      <Back />
      <div className=" flex flex-col items-center justify-center gap-5">
        <div className="relative">
          <img src={Lady} alt="image" className="w-[60px]" />
          <img
            src={Verified}
            alt="image"
            className="w-[20px] absolute right-[0px] bottom-[1px]"
          />
        </div>
        <p className="text-slateGray text-base tracking-[1px] uppercase">
          Mamudu aigbata jeffrey
        </p>
        <div className="bg-[#EFFEF0] px-2 py-2 rounded-md">
          <p className=" text-[#116A1D]">Account Status: Active</p>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="bg-grayBlue border border-pale px-3 py-3 rounded-xl text-[#344054] text-sm"
            onClick={navToDeleteAdmin}
          >
            Delete Admin
          </button>
          <button
            className="bg-grayBlue border border-pale px-3 py-3 rounded-xl text-[#344054] text-sm"
            onClick={navToChangeAdmin}
          >
            Change user-role
          </button>
        </div>
      </div>
      <div className="mt-5 bg-white shadow-md px-5 rounded-xl">
        <Rechart title="Activity" />
      </div>
      <div className="mt-5">
        <UserInfo />
      </div>
      <div className="mt-5">
        <UserLogs />
      </div>
    </div>
  );
}

export default SuperAdmin;
