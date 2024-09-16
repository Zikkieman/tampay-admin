import { RiImageCircleLine } from "react-icons/ri";
import Lady from "../../assets/images/lady.png";
import Verified from "../../assets/images/verified.png";
import { Divider } from "@mui/joy";
import { Formik } from "formik";
import Button from "../buttons/Buttons";
import Input from "../input/Input";
import { UpdateProfileSchema } from "../../models/Yup";

function ProfileTab() {
  const handleSubmit = (values: any) => {
    console.log(values);
    // navigate("/dashboard");
  };
  return (
    <div className="bg-white shadow-sm p-5 rounded-xl font-sora ">
      <div className="flex gap-5 items-center justify-between w-full max-w-[400px]">
        <div className="w-full max-w-[200px] ">
          <p className="text-sm mb-1">Profile photo</p>
          <p className="text-sm text-slateGray ">
            This image will be displayed on your profile
          </p>
          <button className="border border-forestGreen text-forestGreen px-2 py-1 flex items-center gap-2 rounded-full mt-3">
            <RiImageCircleLine className="text-[18px]" />
            <p className="text-sm">Change Photo</p>{" "}
          </button>
        </div>
        <div className="relative">
          <img src={Lady} alt="image" className="w-[80px]" />
          <img
            src={Verified}
            alt="image"
            className="w-[20px] absolute right-[10px] bottom-[-3px]"
          />
        </div>
      </div>
      <div className="my-10">
        <Divider />
      </div>
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            role: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={UpdateProfileSchema}
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
              <div>
                <p>Personal Information</p>
                <p className="text-slateGray text-sm max-w-[220px]">
                  Update your personal details here.
                </p>
                <div className="mt-[-20px]">
                  <Button
                    title="Save Changes"
                    isValid={isValid && dirty}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
              <div className="w-full max-w-[600px] flex flex-col gap-6">
                <div className="flex gap-5 items-center">
                  <Input
                    label="First name"
                    placeholder="Enter first name"
                    value={values.firstName}
                    error={errors.firstName && touched.firstName}
                    onChange={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    errMsg={errors.firstName}
                  />
                  <Input
                    label="Last name"
                    placeholder="Enter last name"
                    value={values.lastName}
                    error={errors.lastName && touched.lastName}
                    onChange={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    errMsg={errors.lastName}
                  />
                </div>
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
                  label="Phone Number"
                  placeholder="Enter phone number"
                  value={values.phoneNumber}
                  error={errors.phoneNumber && touched.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  errMsg={errors.phoneNumber}
                />
                <Input
                  label="Role"
                  placeholder="Enter role"
                  value={values.role}
                  error={errors.role && touched.role}
                  onChange={handleChange("role")}
                  onBlur={handleBlur("role")}
                  errMsg={errors.role}
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ProfileTab;
