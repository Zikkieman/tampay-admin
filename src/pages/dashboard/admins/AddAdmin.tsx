import { Formik } from "formik";
import Back from "../../../components/back/Back";
import { AddAdminSchema } from "../../../models/Yup";
import Input from "../../../components/input/Input";
import { useState } from "react";
import Button from "../../../components/buttons/Buttons";
import CreatedGroupInput from "../../../components/selectInput/GroupSelected";
import { toast } from "react-toastify";

function AddAdmin() {
  const [seePassword, setSeePassword] = useState(false);
  const [role, setRole] = useState("Super Admin"); // Default role value set to the first option
  const [roleError, setRoleError] = useState("");

  const handleSubmit = (values: any) => {
    if (!role) {
      setRoleError("Role is required");
      return;
    }

    // API call logic here, including role
    const payload = { ...values, role };
    console.log(payload);
    toast.success("Admin invite sent successfully!");
  };

  console.log(role);

  const handleRoleChange = (event: any) => {
    setRole(event);
    setRoleError("");
  };

  const adminRole = [
    {
      role: "Super Admin",
      desc: "Manages all system settings, user permissions, and has full access to all administrative tools and data.",
    },
    {
      role: "Customer Support",
      desc: "Manages customer inquiries, resolves issues, and has access to customer data to provide support and escalate problems when needed.",
    },
    {
      role: "Finance Manager",
      desc: "Oversees financial transactions, reviews reports, manages payouts, and ensures the bank's liquidity and financial health.",
    },
    {
      role: "Operations Manager",
      desc: "Ensures smooth day-to-day operations, manages workflows, and handles any escalated operational issues on the platform.",
    },
  ];

  return (
    <div className="w-full flex justify-center font-sora">
      <div className="py-10 w-full max-w-[600px]">
        <Back />
        <div className="bg-white flex flex-col shadow-md py-5 px-10 mt-5 rounded-lg">
          <p className="mx-auto font text-[22px] mb-5">Add New Admin</p>
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
              // role: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={AddAdminSchema}
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
                <CreatedGroupInput
                  label="Role"
                  options={adminRole}
                  value={role}
                  onChange={handleRoleChange}
                />
                {roleError && <p className="text-red-500">{roleError}</p>}

                {/* <Input
                  label="Role"
                  placeholder="Enter role"
                  value={values.role}
                  error={errors.role && touched.role}
                  onChange={handleChange("role")}
                  onBlur={handleBlur("role")}
                  errMsg={errors.role}
                /> */}
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
                <div>
                  <Button
                    title="Add Admin"
                    isValid={isValid && dirty}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
