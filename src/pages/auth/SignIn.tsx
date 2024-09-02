import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Buttons";
import { Formik } from "formik";
import { LoginSchema } from "../../models/Yup";
import AuthBanner from "../../components/authBanner/AuthBanner";
import { Link } from "react-router-dom";

function SignIn() {
  const [seePassword, setSeePassword] = useState(false);
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="h-screen flex p-4 font-sora ">
      <div className="w-1/2 h-full  bg-deepBlue rounded-[80px] pl-16 pt-16">
        <AuthBanner />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-full max-w-[500px] flex flex-col">
          <p className="mb-5 text-[26px] font-medium">Welcome back!</p>
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
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
                  label="Email"
                  placeholder="Enter Email"
                  value={values.email}
                  error={errors.email && touched.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  errMsg={errors.email}
                />
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
                <Button
                  onClick={handleSubmit}
                  title="Login"
                  isValid={isValid && dirty}
                />
              </div>
            )}
          </Formik>
          <Link className=" cursor-pointer self-center" to="/confirmemail">
            <p className="text-tanBrown mt-5 text-sm font-light underline ">
              Forgot Password?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
