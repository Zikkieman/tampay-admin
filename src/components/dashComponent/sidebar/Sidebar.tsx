import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { sidebarMenu } from "../../../constants/sidebarMenu";
import { LogoutIcon, SettingsIcon } from "../../icons";
import Lady from "../../../assets/images/lady.png";
import Verified from "../../../assets/images/verified.png";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(""); // Initialize as empty
  const [settingMenu, setSettingMenu] = useState(false);

  // Function to handle menu click
  const handleMenuClick = (menuName: string) => {
    const path = menuName.toLowerCase();
    setActiveMenu(menuName);
    navigate(`/dashboard/${path}`);
    setSettingMenu(false);
  };

  // Function to handle settings menu click and change the URL
  const handleSettingMenu = () => {
    setSettingMenu(!settingMenu);
    setActiveMenu("Settings");
    navigate("/dashboard/settings");
  };

  // Function to handle logout click
  const handleLogout = () => {
    navigate("/dashboard/logout");
  };

  // Sync active menu with URL on page load/refresh
  useEffect(() => {
    const path = location.pathname.split("/")[2]; // Extract the active menu from the URL
    setActiveMenu(
      path ? path.charAt(0).toUpperCase() + path.slice(1) : "Dashboard"
    );
  }, [location.pathname]); // Trigger this whenever the URL changes

  return (
    <div className="h-full bg-darkNavy flex flex-col pt-5 font-sora">
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
            <div className="flex w-full items-center justify-between gap-3">
              <p
                className={`text-sm font-light ${
                  activeMenu === menu.menu ? "text-[#F0F2F5]" : "text-[#98A2B3]"
                }`}
              >
                {menu.menu}
              </p>
              {menu.menu === "Reports" && (
                <p className="text-black text-sm mr-3 bg-[#F5B546] px-2 py-0 rounded-full">
                  10
                </p>
              )}
            </div>
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
          <div onClick={handleLogout} className="cursor-pointer">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
