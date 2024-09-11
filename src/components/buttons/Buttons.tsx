type BtnType = {
  title: string;
  isValid?: boolean;
  onClick?: () => void;
  variant?: boolean;
};

function Button({ title, isValid, onClick, variant }: BtnType) {
  return (
    <div
      className={`rounded-xl h-[50px] cursor-pointer ${
        isValid && variant
          ? "border border-forestGreen"
          : isValid && !variant
          ? "bg-forestGreen"
          : "bg-pale"
      } w-full flex justify-center items-center mt-10 font-sora`}
      onClick={onClick}
    >
      <p
        className={` ${
          variant && isValid ? "text-forestGreen" : "text-white"
        }  `}
      >
        {title}
      </p>
    </div>
  );
}

export default Button;
