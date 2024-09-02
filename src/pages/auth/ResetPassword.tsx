import { Formik } from "formik";
import AuthBanner from "../../components/authBanner/AuthBanner";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Buttons";
import { ResetSchema } from "../../models/Yup";
import { RxCaretLeft } from "react-icons/rx";

function ResetPassword() {
  const handleSubmit = (values: any) => {
    console.log(values, "values");
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
          <p className="mb-5 text-[26px] font-medium">Reset Password</p>
          <p className="text-sm font-light mb-5">
            Please enter the email associated with your account to reset your
            password
          </p>
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={ResetSchema}
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

                <Button
                  onClick={handleSubmit}
                  title="Continue"
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

export default ResetPassword;
