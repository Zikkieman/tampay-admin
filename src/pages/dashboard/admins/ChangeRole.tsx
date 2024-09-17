import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import Lady from "../../../assets/images/lady.png";
import Button from "../../../components/buttons/Buttons";

function ChangeRole() {
  const navigate = useNavigate();

  //   const handleSubmit = (values: any) => {
  //     console.log(values);
  //     navigate(-1);
  //   };
  const navBack = () => {
    navigate(-1);
  };

  const role = [
    "Super Admin",
    "Operation Manager",
    "Customer Support",
    "IT Support",
  ];

  return (
    <div className="flex w-full items-center justify-center h-full border font-sora">
      <div className=" w-full max-w-[600px]">
        <div
          className="flex items-center mb-5 cursor-pointer"
          onClick={navBack}
        >
          <MdOutlineCancel className="text-deepBlue text-[22px] font-light" />
          <p className="text-sm text-deepBlue font-light">Cancel</p>
        </div>
        <div className="w-full py-5  flex justify-center items-center flex-col bg-white shadow-md">
          <p className="font-semibold text-[20px] mb-10">Change Admin Role</p>
          <img src={Lady} alt="image" className="w-[80px] h-[80px] mb-5" />
          <div className="text-center">
            <p className="uppercase text-slateGray mb-1 font-medium text-lg tracking-[1px]">
              Mamudu aigbata jeffrey
            </p>
            <p className="text-xs font-normal text-slateGray mb-5">
              jeffmamudu@gmail.com
            </p>
          </div>
          <p className="text-xs font-normal text-slateGray mb-5">
            Are you sure you want to ban this user?
          </p>
          <div className="border w-full max-w-[520px]">
            <select
              className="w-full border outline-none h-[40px]"
              defaultValue="Super Admin"
            >
              {role.map((roleOption, index) => (
                <option key={index} value={roleOption}>
                  {roleOption}
                </option>
              ))}
            </select>{" "}
          </div>
          <div className="w-full px-10">
            <div className="flex gap-3 items-center w-full">
              <div className="w-full">
                <Button onClick={navBack} title="Cancel" isValid variant />
              </div>
              <div className="w-full">
                <Button title="Update" isValid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeRole;
