import { Formik } from "formik";
import { useState, type FC } from "react";
import { signUpSchema } from "../../validation/SignUpSchema";
import InputField from "../../components/InputField";
import SignUpBg from "../../assets/images/signup.jpg";
import MainButton from "../../components/MainButton";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { Link } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase/fireBase";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUp: FC = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<string>("");

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:gap-10 p-5 ">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setError("");
          try {
            await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            alert("Qeydiyyat uğurla tamamlandı!");
            setSubmitting(false);
          } catch (error: any) {
            setError(error.message);
            setSubmitting(false);
          }
        }}
      >
        <form className="w-[90%] md:w-[50%] lg:w-[45%] h-full flex flex-col justify-center items-center gap-6 md:gap-10 lg:gap-16">
          <h1 className="text-xl md:text-3xl font-bold">Join Us</h1>
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <InputField name="fullName" label="Full Name" type="text" />
            <InputField name="email" label="Email" type="email" />
            <InputField name="password" label="Password" type="password" />
            <div
              className="w-[90%] flex justify-between items-center"
              onClick={handleCheckboxChange}
            >
              <div className="flex justify-start items-center gap-2">
                {" "}
                {checked ? (
                  <ImCheckboxChecked className="text-[#c21500]" />
                ) : (
                  <ImCheckboxUnchecked className="text-[#c21500]" />
                )}
                <p className="text-xs lg:text-sm">Remember me</p>
              </div>
              <Link to={"/auth/forgot-password"}>
                {" "}
                <p className="text-xs lg:text-sm text-blue-400">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>
          {error && (
            <div className="w-full flex justify-center items-center">
              <p className="text-red-500 text-xs md:text-sm">{error}</p>
            </div>
          )}
          <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-5">
            <div className="w-full flex justify-center items-center">
              <MainButton />
            </div>
            <div className="w-[90%] flex justify-start items-center">
              <p className="text-xs md:text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-400 text-xs lg:text-sm"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Formik>
      <div className="w-[90%] h-[300px] md:h-[450px] lg:h-[700px] md:w-[50%]  lg:w-[50%]  flex justify-center items-center ">
        <ImageComponent
          description="Join a growing network of learners, doers, and achievers."
          title="Take the first step towards your future."
          image={SignUpBg}
        />
      </div>
    </div>
  );
};

export default SignUp;
