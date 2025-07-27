import * as yup from "yup";
import { emailField, passwordField } from "../validation/ValidationSchema";

export const signUpSchema = yup.object({
  fullName: yup
    .string()
    .required("Ad Soyad daxil edilməlidir")
    .matches(/^[A-Za-zƏəÖöÜüÇçĞğİıŞş\s-]+$/, "Yalnız hərflər və boşluq")
    .min(2, 'Ad və soyad minimum 2 simvol olmalıdır')
    .max(50, 'Ad və soyad maksimum 50 simvol olmalıdır'),

  email: emailField,
  password: passwordField,
});