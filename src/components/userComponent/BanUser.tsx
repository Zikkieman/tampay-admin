import { Formik } from "formik";
import Lady from "../../assets/images/lady.png";
import Input from "../input/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../buttons/Buttons";
import { BanSchema } from "../../models/Yup";
import { MdOutlineCancel } from "react-icons/md";

function BanUser() {
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
    navigate(-1);
  };
  const navBack = () => {
    navigate(-1);
  };
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
        <div className="w-full py-5 flex justify-center items-center flex-col bg-white shadow-md">
          <p className="font-semibold text-[20px] mb-10">Ban User</p>
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
          <div className="w-full px-10">
            <Formik
              enableReinitialize
              initialValues={{
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={BanSchema}
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
                <div>
                  <Input
                    label="Password"
                    placeholder="Enter password to confirm"
                    isVisible={seePassword}
                    isPasswordField
                    toggleVisibility={() => setSeePassword(!seePassword)}
                    value={values.password}
                    error={errors.password && touched.password}
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                    errMsg={errors.password}
                  />
                  <div className="flex gap-3 items-center w-full">
                    <div className="w-full">
                      <Button onClick={navBack} title="No, keep user" isValid />
                    </div>
                    <div className="w-full">
                      <Button
                        onClick={handleSubmit}
                        title="Ban user"
                        isValid={isValid && dirty}
                        variant
                      />
                    </div>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BanUser;
