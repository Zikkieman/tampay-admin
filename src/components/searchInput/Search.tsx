import { CiSearch } from "react-icons/ci";

type SearchProps = {
  placeholder: string;
  onSearch?: (value: string) => void;
};

function Search({ placeholder, onSearch }: SearchProps) {
  return (
    <div className="flex w-full h-[35px] rounded-lg items-center gap-1 p-0 border">
      <div>
        <CiSearch size={20} className="text-coolGray" />
      </div>
      <div className="w-full font-sora">
        <input
          name="search"
          id="search"
          className="w-full h-[40px] bg-transparent placeholder:text-coolGray placeholder:font-light text-sm border-none outline-none"
          placeholder={placeholder}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
