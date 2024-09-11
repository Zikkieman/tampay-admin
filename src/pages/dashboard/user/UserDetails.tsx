import Lady from "../../../assets/images/lady.png";
import Back from "../../../components/back/Back";
import AccountActivity from "../../../components/userComponent/AccountActivity";
import UserInfo from "../../../components/userComponent/UserInfo";
import UserLogs from "../../../components/userComponent/UserLogs";
import UserRecentTxn from "../../../components/userComponent/UserRecentTxn";

function UserDetails() {
  return (
    <div className="font-sora px-10">
      <div className="my-5">
        <Back />
      </div>
      <div className=" flex flex-col items-center justify-center gap-5">
        <img src={Lady} alt="image" className="w-[60px]" />
        <p className="text-slateGray text-base tracking-[1px] uppercase">
          Mamudu aigbata jeffrey
        </p>
        <div className="bg-[#EFFEF0] px-2 py-2 rounded-md">
          <p className=" text-[#116A1D]">Account Status: Active</p>
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-grayBlue border border-pale px-3 py-3 rounded-xl text-[#344054] text-sm">
            Ban Account
          </button>
          <button className="bg-grayBlue border border-pale px-3 py-3 rounded-xl text-[#344054] text-sm">
            Log Userout
          </button>
        </div>
      </div>
      <div>
        <div>
          <AccountActivity />
        </div>
        <div>
          <UserInfo />
        </div>
        <div>
          <UserRecentTxn />
        </div>
        <div>
          <UserLogs />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
