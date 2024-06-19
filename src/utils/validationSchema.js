import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required("Please enter your username."),
  password: yup.string().required("Please enter your password!"),
});
