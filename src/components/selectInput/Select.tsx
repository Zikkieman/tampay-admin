import { CiFilter } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";

import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import Select, { SelectOption } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Search from "../searchInput/Search";

type SelectProps = {
  customOptions: string[];
  onSelect: (value: string) => void;
};

export function CustomSelect({ customOptions, onSelect }: SelectProps) {
  return (
    <div className=" relative flex items-center bg-slate-50 border border-gray-300 rounded h-[40px] overflow-hidden">
      <div className=" inset-y-0 flex items-center px-2 pointer-events-none">
        <CiFilter className="text-gray-500" size={22} />
      </div>
      <select
        onChange={(e: any) => onSelect(e.target.value)}
        className="block appearance-none w-full bg-slate-50  text-slateGray text-[14px] py-2 px- pr-8  leading-tight focus:outline-none focus:shadow-outline"
      >
        {customOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className=" absolute right-[0px] inset-y-0 flex items-center px-2 pointer-events-none">
        <RxCaretDown className="text-gray-500" size={22} />
      </div>
    </div>
  );
}

type PropsType = {
  options: {
    value: string;
    label: string;
    src?: string;
  }[];
  onSelect: (value: string) => void;
  search?: boolean;
  placeholder?: string;
};

export default function SelectInput({
  options,
  onSelect,
  search,
  placeholder = "",
}: PropsType) {
  function renderValue(option: SelectOption<string> | null) {
    if (!option) {
      return null;
    }

    return (
      <React.Fragment>
        <ListItemDecorator>
          <Avatar
            size="sm"
            src={options.find((o) => o.value === option.value)?.src}
          />
        </ListItemDecorator>
        {option.label}
      </React.Fragment>
    );
  }

  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (newValue) {
      onSelect(newValue);
    }
  };

  return (
    <Select
      defaultValue="All"
      onChange={handleChange}
      slotProps={{
        listbox: {
          sx: {
            "--ListItemDecorator-size": "44px",
          },
        },
      }}
      sx={{ "--ListItemDecorator-size": "44px", minWidth: 250 }}
      renderValue={renderValue}
      placeholder={placeholder}
    >
      {search && (
        <div className="flex gap-3 items-center py-2 px-2">
          <p>Admins</p>
          <Search placeholder="Search" />
        </div>
      )}

      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          {index !== 0 ? (
            <ListDivider role="none" inset="startContent" />
          ) : null}
          <Option
            value={option.value}
            label={option.label}
            sx={{ paddingX: 2 }}
          >
            <ListItemDecorator>
              <Avatar size="sm" src={option.src} />
            </ListItemDecorator>
            {option.label}
          </Option>
        </React.Fragment>
      ))}
    </Select>
  );
}
