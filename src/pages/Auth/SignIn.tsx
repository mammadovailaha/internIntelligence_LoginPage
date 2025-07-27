import { Formik } from 'formik';
import { useState, type FC } from 'react';
import { signInSchema } from '../../validation/SignInSchema';
import InputField from '../../components/InputField';
import MainButton from '../../components/MainButton';
import ImageComponent from '../../components/ImageComponent';
import SignInBg from '../../assets/images/loginBg.jpg';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireBase/fireBase';

const initialValues = {
  email: '',
  password: ''
};

const SignIn: FC = () => {
  const [error, setError] = useState<string>('');
  return (
    <div className='w-full h-auto flex flex-col-reverse md:flex-row justify-center items-center gap-5 lg:gap-10 p-5 '>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
       onSubmit={async (values, { setSubmitting }) => {
          setError("");
          try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            alert("Uğurlu daxil olundu!");
            setSubmitting(false);
          } catch (error: any) {
            setError(error.message);
            setSubmitting(false);
          }
        }}
      >
        <form  className="w-[90%] md:w-[50%] lg:w-[45%] h-full flex flex-col justify-center items-center gap-6 md:gap-10 lg:gap-16">
            <h1 className="text-xl md:text-3xl font-bold">Login</h1>
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <InputField name="email" type="email" label="Email" />
                <InputField name="password" type="password" label="Password" />
            </div>
           <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-5">
             <div className="w-full flex justify-center items-center"><MainButton/></div>
             {error && (
               <div className="w-full flex justify-center items-center">
                 <p className="text-red-500 text-xs md:text-sm">{error}</p>
               </div>
             )}
              <div className="w-[90%] flex justify-start items-center">
            <p className="text-xs md:text-sm text-gray-500">Don't have an account? <Link to={"/"} className="text-blue-400 text-xs lg:text-sm">Sign Up</Link></p>
          </div>
           </div>
           
        </form>
   
      </Formik>
       <div className="w-[90%] h-[300px] md:h-[450px] lg:h-[700px] md:w-[50%]  lg:w-[50%]  flex justify-center items-center ">
                <ImageComponent image={SignInBg} title="Good to see you again!" description="Let’s pick up where you left off." />
            </div>
    </div>
  )
}

export default SignIn

