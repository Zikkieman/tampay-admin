import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Back() {
  const naviagate = useNavigate();

  const navBack = () => {
    naviagate(-1);
  };
  return (
    <div
      className="flex items-center gap-1 font-sora cursor-pointer"
      onClick={navBack}
    >
      <IoChevronBack className="text-deepBlue" />
      <p className="font-normal text-deepBlue">Back</p>
    </div>
  );
}

export default Back;
