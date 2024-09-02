import Logo from "../../assets/images/logo.png";

type PropsType = {
  isResetPage?: boolean;
};

function AuthBanner({ isResetPage }: PropsType) {
  return (
    <div className="w-1/2 h-full  bg-deepBlue rounded-[80px] pl-16 pt-16">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="logo-image" />
        <p className="text-[26px] text-goldenYellow font-normal mt-2">Admin</p>
      </div>
      {!isResetPage ? (
        <>
          <p className="font-medium text-[40px] mt-10 text-white">
            Welcome, Admin
          </p>
          <p className="mt-5 text-white text-[18px] font-light max-w-[350px] ">
            Glad to have you back, please login to continue working.
          </p>{" "}
        </>
      ) : (
        <>
          <p className="text-white mt-10 text-[46px]">Pass*****</p>
        </>
      )}
    </div>
  );
}

export default AuthBanner;
