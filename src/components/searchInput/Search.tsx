import { CiSearch } from "react-icons/ci";
type SearchType = {
  placeholder: string;
};
function Search({ placeholder }: SearchType) {
  return (
    <div className="flex  w-full  h-[35px] rounded-lg items-center  gap-1 p-0 border">
      <div>
        <CiSearch size={20} className="text-coolGray" />
      </div>
      <div className="w-full font-sora">
        <input
          name=""
          id=""
          className=" w-full h-[40px] bg-transparent placeholder:text-coolGray placeholder:font-light text-sm border-none outline-none"
          placeholder={placeholder}
          autoFocus
        />
      </div>
    </div>
  );
}

export default Search;
