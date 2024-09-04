import { IoNotificationsSharp } from "react-icons/io5";

function DashboardNav() {
  return (
    <div className="h-[60px] shadow-sm flex items-center justify-between px-10">
      <p className="text-[18px] font-light tracking-[2px]">DASHBOARD</p>
      <div className="w-[37px] relative h-[37px] rounded-full bg-deepBlue flex items-center justify-center">
        <IoNotificationsSharp color="white" size={22} />
        <div className="w-[18px] h-[18px] top-[1px] right-[3px] rounded-full bg-limeGreen absolute flex items-center justify-center">
          <p className="text-white text-xs">4</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
