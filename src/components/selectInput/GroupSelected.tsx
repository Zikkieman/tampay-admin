import { Divider } from "@mui/joy";
import { useState } from "react";
import { LuChevronUp, LuChevronDown } from "react-icons/lu";

const CreatedGroupInput = ({ label, options, value, onChange }: any) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <div className="font-sora">
      <p className="font-light text-sm">{label}</p>
      <div
        className="h-[50px] rounded-xl border border-lightGray relative z-50 flex items-center justify-between"
        onClick={() => setOnFocus(!onFocus)}
      >
        <p className="pl-2 text-sm text-darkNavy ">{value}</p>
        <div className="pr-4">
          {onFocus ? <LuChevronUp /> : <LuChevronDown />}
        </div>
        {onFocus && (
          <div className="absolute w-full opacity-1 bg-white shadow-xl overflow-hidden top-[50px] rounded-2xl">
            <p className="px-4 py-2">Role</p>
            <Divider />
            {options.map((opt: any, i: any) => (
              <>
                <div
                  key={i}
                  className="  px-4 py-1 cursor-pointer"
                  onClick={() => onChange(opt.role)}
                >
                  <p className="text-[#344054] text-base mb-1">{opt.role}</p>
                  <p className="text-charcoalBlue text-sm mb-2 font-light">
                    {opt.desc}
                  </p>
                </div>
                <Divider />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatedGroupInput;
