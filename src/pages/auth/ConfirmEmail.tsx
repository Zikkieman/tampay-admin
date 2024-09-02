import { RxCaretLeft } from "react-icons/rx";
import AuthBanner from "../../components/authBanner/AuthBanner";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ConfirmEmail() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/newpassword");
  };

  useEffect(() => {
    if (otp.length > 5) {
      handleSubmit();
    }
  }, [otp]);

  return (
    <div className="h-screen flex p-4 font-sora ">
      <div className="w-1/2 h-full  bg-deepBlue rounded-[80px] pl-16 pt-16">
        <AuthBanner />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-full max-w-[500px] flex flex-col">
          <Link to="/resetpassword" className="cursor-pointer">
            <div className="flex items-center mb-3">
              <RxCaretLeft color="#0EB622" size={18} />
              <p className="text-forestGreen text-xs font-light">Cancel</p>
            </div>
          </Link>

          <p className="mb-5 text-[26px] font-medium">Confirm Email</p>
          <p className="text-sm font-light mb-5">
            We sent you an email with an OTP to verify your email. Please fill
            in the field below to continue.
          </p>
          <div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              //   renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                borderWidth: 1,
                width: 50,
                height: 50,
                borderRadius: 10,
                outlineColor: "#40B869",
              }}
              containerStyle={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
