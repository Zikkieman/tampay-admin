import { Formik } from "formik";
import Button from "../buttons/Buttons";
import Input from "../input/Input";
import { useState } from "react";
import { NewPasswordSchema } from "../../models/Yup";
// import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  //   const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    console.log(values);
    // navigate("");
  };
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
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
          <div className="flex gap-10">
            <div className="max-w-[200px] w-full">
              <p>Password</p>
              <div className="mt-[-20px]">
                <Button
                  title="Change Password"
                  onClick={handleSubmit}
                  isValid={isValid && dirty}
                />
              </div>
            </div>
            <div className="w-full max-w-[600px] flex flex-col gap-6">
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
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ChangePassword;
