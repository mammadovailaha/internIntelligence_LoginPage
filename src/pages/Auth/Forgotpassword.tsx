import { Formik } from "formik";
import type { FC } from "react";
import { ForgotPasswordSchema } from "../../validation/ForgotPasswordSchema";
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import ImageComponent from "../../components/ImageComponent";
import ForgotPasswordBg from "../../assets/images/forgotpassword.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../fireBase/fireBase";

const initialValues = {
  email: "",
};

const Forgotpassword: FC = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:gap-10 p-5 ">
      <Formik
        initialValues={initialValues}
        validationSchema={ForgotPasswordSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await sendPasswordResetEmail(auth, values.email);
            alert("Şifrə sıfırlama linki email ünvanına göndərildi!");
            resetForm();
          } catch (error: any) {
            alert(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="w-[90%] md:w-[50%] lg:w-[45%] h-full flex flex-col justify-center items-center gap-6 md:gap-10 lg:gap-16">
            <h1 className="text-xl md:text-3xl font-bold">Forgot Password</h1>
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <InputField name="email" type="email" label="Email" />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-5">
              <div className="w-full flex justify-center items-center">
                <MainButton  />
              </div>
            </div>
          </form>
        )}
      </Formik>
      <div className="w-[90%] h-[300px] md:h-[450px] lg:h-[700px] md:w-[50%]  lg:w-[50%]  flex justify-center items-center ">
        <ImageComponent
          image={ForgotPasswordBg}
          title="Forgot your password?"
          description="Don’t worry — we’ll help you reset it."
        />
      </div>
    </div>
  );
};

export default Forgotpassword;
