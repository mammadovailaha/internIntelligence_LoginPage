// src/validation/resetPasswordSchema.ts
import * as yup from "yup";
import { emailField } from "../validation/ValidationSchema";

export const resetPasswordSchema = yup.object({
  email: emailField,
});