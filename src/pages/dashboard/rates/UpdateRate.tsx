import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import USA from "../../../assets/images/USA.png";
import { Formik } from "formik";
import Input from "../../../components/input/Input";
import Button from "../../../components/buttons/Buttons";
import { UpdateRateSchema } from "../../../models/Yup";
import { toast } from "react-toastify";

function UpdateRate() {
  const navigate = useNavigate();

  const navBack = () => {
    navigate(-1);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    toast.success("Rate Updated Successfully");
  };

  return (
    <div className="px-4 py-5 flex items-center justify-center font-sora h-full">
      <div className="w-full max-w-[600px]">
        <div
          className="flex items-center mb-5 cursor-pointer"
          onClick={navBack}
        >
          <MdOutlineCancel className="text-deepBlue text-[22px] font-light" />
          <p className="text-sm text-deepBlue font-light">Cancel</p>
        </div>
        <div className="bg-white shadow-md rounded-xl px-4 py-5 flex flex-col">
          <div className="mx-auto flex items-center flex-col gap-5 mb-5">
            <p className="font-medium">Update Rate</p>
            <img src={USA} alt="image" />
            <p className="font-medium">United States Dollar (USD)</p>
          </div>

          <Formik
            enableReinitialize
            initialValues={{
              naira: "",
              usd: "",
            }}
            validationSchema={UpdateRateSchema}
            onSubmit={handleSubmit}
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
                  label="Naira"
                  placeholder="0.00"
                  value={values.naira}
                  error={errors.naira && touched.naira}
                  onChange={handleChange("naira")}
                  onBlur={handleBlur("naira")}
                  errMsg={errors.naira}
                />
                <div className="mt-5">
                  <Input
                    label="USD"
                    placeholder="0.00"
                    value={values.usd}
                    error={errors.usd && touched.usd}
                    onChange={handleChange("usd")}
                    onBlur={handleBlur("usd")}
                    errMsg={errors.usd}
                  />
                </div>

                <div className="flex gap-3 items-center w-full">
                  <div className="w-full">
                    <Button
                      onClick={handleSubmit}
                      title="Update"
                      isValid={isValid && dirty}
                    />
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UpdateRate;
