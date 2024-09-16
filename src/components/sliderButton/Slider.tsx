import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`${
        isOn ? "bg-[#18CF2D]" : "bg-[#E4E7EC]"
      } relative w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${
          isOn ? "translate-x-5" : "translate-x-0"
        } bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300`}
      />
    </div>
  );
}
