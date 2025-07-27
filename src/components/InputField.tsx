import { ErrorMessage, Field } from "formik";
import type { FC } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
}

const InputField: FC<InputFieldProps> = ({ label, type, name }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="bg-gradient-to-r from-[#ffc500] to-[#c21500] hover:from-[#c21500] hover:to-[#ffc500] w-[90%] h-12 rounded-4xl flex  items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-700 p-[1.5px]">
        <div className="w-full h-full  bg-white rounded-4xl flex  items-center justify-center">
          <Field
            id={name}
            name={name}
            type={type}
            placeholder={label}
            required
            className="w-full h-[85%] outline-none  placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500 placeholder:pl-3 outline-none border-none rounded-4xl bg-transparent"
          />
        </div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-[#E70303] text-xs mt-3"
      />
    </div>
  );
};

export default InputField;
