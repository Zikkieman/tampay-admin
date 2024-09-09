import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { sidebarMenu } from "../../../constants/sidebarMenu";
import { LogoutIcon, SettingsIcon } from "../../icons";
import Lady from "../../../assets/images/lady.png";
import Verified from "../../../assets/images/verified.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [settingMenu, setSettingMenu] = useState(false);
  const navigate = useNavigate();

  // const handleMenuClick = (menuName: string) => {
  //   setActiveMenu(menuName);
  //   setSettingMenu(false);
  // };

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
    const path = menuName.toLowerCase();
    navigate(`/dashboard/${path}`);
    setSettingMenu(false);
  };

  const handleSettingMenu = () => {
    setSettingMenu(!settingMenu);
    setActiveMenu("");
  };

  return (
    <div className="h-full bg-darkNavy flex flex-col pt-5  font-sora">
      <div>
        <img src={Logo} alt="logo" className="h-[40px] ml-5" />
      </div>
      <div className="ml-2 mt-5 flex flex-col gap-3">
        {sidebarMenu.map((menu, i) => (
          <div
            key={i}
            onClick={() => handleMenuClick(menu.menu)}
            className={`flex items-center gap-2 ${
              activeMenu === menu.menu && "bg-deepBlue"
            } py-2 pl-4 mr-2 rounded-md cursor-pointer`}
          >
            <p>
              {React.cloneElement(menu.icon, {
                color: activeMenu === menu.menu ? "#18CF2D" : "#98A2B3",
              })}
            </p>
            <p
              className={`text-sm font-light ${
                activeMenu === menu.menu ? "text-[#F0F2F5]" : "text-[#98A2B3]"
              }`}
            >
              {menu.menu}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-auto ml-5 mb-10 flex-col flex gap-16">
        <div
          className={`flex items-center gap-2 py-2 pl-4 mr-2 rounded-md cursor-pointer ${
            settingMenu && "bg-deepBlue"
          }`}
          onClick={handleSettingMenu}
        >
          <SettingsIcon color={settingMenu ? "#18CF2D" : "#98A2B3"} />
          <p
            className={` ${
              settingMenu ? "text-[#F0F2F5]" : "text-[#98A2B3]"
            }  text-sm font-light`}
          >
            Settings
          </p>
        </div>
        <div className="flex items-center justify-between mr-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={Lady} alt="image" />
              <div className="absolute right-[-2px] bottom-[1px]">
                <img src={Verified} alt="image" />
              </div>
            </div>
            <p className="text-sm text-white">Jeffrey</p>
          </div>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
