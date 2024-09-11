import { acctDetails, userInfo } from "../../constants/userInfo";

function UserInfo() {
  return (
    <div className="flex gap-5 mt-10 font-sora">
      <div className="flex-1 flex flex-col gap-5 shadow-md rounded-xl p-10">
        <p className="text-[#344054]">Personal Information</p>
        <div className="flex flex-col gap-10">
          {userInfo.map((info, i) => (
            <div key={i} className="flex flex-row items-center justify-between">
              <p className="uppercase font-medium text-sm text-[#344054]">
                {info.info}
              </p>
              <p className="text-sm text-[#344054]">{info.names}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 shadow-md rounded-xl p-10">
        <p className="text-[#344054]">Account Details</p>
        <div className="flex flex-col gap-10">
          {acctDetails.map((info, i) => (
            <div key={i} className="flex flex-row items-center justify-between">
              <p className="uppercase font-medium text-sm text-[#344054]">
                {info.info}
              </p>

              {/* Apply conditional rendering only for 'Verification status' */}
              <div
                className={`rounded-full w-fit px-2 text-center ${
                  info.info === "Verification status"
                    ? info.names === "Failed"
                      ? "bg-[#FBEAE9] text-[#CB1A14]"
                      : info.names === "Verified"
                      ? "bg-[#EFFEF0] text-[#116A1D]"
                      : "bg-[#FEF6E7] text-[#F3A218]"
                    : "" // No styles for non 'Verification status' fields
                }`}
              >
                {info.names}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
