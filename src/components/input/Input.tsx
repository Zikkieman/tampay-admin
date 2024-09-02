import { VscEyeClosed, VscEye } from "react-icons/vsc";

type InputType = {
  type?: string;
  placeholder: string;
  toggleVisibility?: () => void;
  isVisible?: boolean;
  isPasswordField?: boolean;
  label: string;
  value: string;
  error: string | boolean | undefined;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  errMsg: string | undefined;
};

function Input(props: InputType) {
  const borderColor = props.error
    ? "border-error"
    : props.value
    ? "border-forestGreen"
    : "border-lightGray";

  return (
    <div className="w-full relative font-sora">
      <p className="text-sm font-extralight">{props.label}</p>
      <input
        type={props.isPasswordField && !props.isVisible ? "password" : "text"}
        placeholder={props.placeholder}
        className={`border 
          ${borderColor} 
         rounded-xl h-[50px] w-full px-2 placeholder:text-sm placeholder:font-cabin font-normal outline-none`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && (
        <div>
          <p className="text-error text-sm">{props.errMsg}</p>
        </div>
      )}
      {props.isPasswordField && props.toggleVisibility && (
        <div
          className="absolute right-[15px] top-[35px] cursor-pointer"
          onClick={props.toggleVisibility}
        >
          {props.isVisible ? <VscEyeClosed size={20} /> : <VscEye size={20} />}
        </div>
      )}
    </div>
  );
}

export default Input;
