import { useState } from "react";
import ProfileTab from "../../../components/adminDashComponent/ProfileTab";
import Back from "../../../components/back/Back";
import ChangePassword from "../../../components/adminDashComponent/ChangePassword";
import AssignedReport from "../../../components/adminDashComponent/AssignedReport";

function AdminProfile() {
  const profileTab = ["Profile", "Security", "Assigned Reports"];
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="px-10 py-5 font-sora">
      <div className="flex justify-end">
        <Back />
      </div>
      <div className="flex border w-fit rounded-lg overflow-hidden my-5">
        {profileTab.map((tab, i) => (
          <div
            onClick={() => setSelectedTab(i)}
            key={i}
            className={`w-fit text-sm px-2 py-2  cursor-pointer border-x ${
              selectedTab === i
                ? "bg-grayBlue text-black"
                : "bg-white text-coolGray"
            } `}
          >
            {tab}
          </div>
        ))}
      </div>
      <div>{selectedTab === 0 && <ProfileTab />}</div>
      <div>{selectedTab === 1 && <ChangePassword />}</div>
      <div>{selectedTab === 2 && <AssignedReport />}</div>
    </div>
  );
}

export default AdminProfile;
