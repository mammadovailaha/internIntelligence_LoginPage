// src/validation/resetPasswordSchema.ts
import * as yup from "yup";
import { emailField } from "../validation/ValidationSchema";

export const ForgotPasswordSchema = yup.object({
  email: emailField,
});