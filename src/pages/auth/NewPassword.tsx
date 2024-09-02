import { Formik } from "formik";
import AuthBanner from "../../components/authBanner/AuthBanner";
import Input from "../../components/input/Input";
import { useState } from "react";
import Button from "../../components/buttons/Buttons";
import { NewPasswordSchema } from "../../models/Yup";
import { RxCaretLeft } from "react-icons/rx";

function NewPassword() {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="h-screen flex p-4 font-sora ">
      <div className="w-1/2 h-full  bg-deepBlue rounded-[80px] pl-16 pt-16">
        <AuthBanner isResetPage />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-full max-w-[500px] flex flex-col">
          <div className="flex items-center mb-3">
            <RxCaretLeft color="#0EB622" size={18} />
            <p className="text-forestGreen text-xs font-light">Cancel</p>
          </div>
          <p className="mb-5 text-[26px] font-medium">Set New Password</p>
          <p className="text-sm font-light mb-5">
            Please enter the email associated with your account to reset your
            password
          </p>
          <Formik
            enableReinitialize
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={NewPasswordSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              errors,
              values,
              isValid,
              dirty,
            }) => (
              <div className="flex-col flex gap-3">
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  isVisible={seePassword}
                  isPasswordField
                  toggleVisibility={() => setSeePassword(!seePassword)}
                  value={values.password}
                  error={errors.password && touched.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  errMsg={errors.password}
                />
                <Input
                  label="Confirm Password"
                  placeholder="Enter Password"
                  isVisible={seeConfirmPassword}
                  isPasswordField
                  toggleVisibility={() =>
                    setSeeConfirmPassword(!seeConfirmPassword)
                  }
                  value={values.confirmPassword}
                  error={errors.confirmPassword && touched.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  errMsg={errors.confirmPassword}
                />
                <Button
                  onClick={handleSubmit}
                  title="Login"
                  isValid={isValid && dirty}
                />
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
