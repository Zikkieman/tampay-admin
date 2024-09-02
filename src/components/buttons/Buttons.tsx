type BtnType = {
  title: string;
  isValid?: boolean;
  onClick?: () => void;
};

function Button({ title, isValid, onClick }: BtnType) {
  return (
    <div
      className={`rounded-xl h-[50px] cursor-pointer ${
        isValid ? "bg-forestGreen" : "bg-pale"
      } w-full flex justify-center items-center mt-10 font-sora`}
      onClick={onClick}
    >
      <p className="text-white">{title}</p>
    </div>
  );
}

export default Button;
