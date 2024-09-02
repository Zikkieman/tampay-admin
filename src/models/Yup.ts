import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string() // Ensures that the field is a string
    .email("Please enter a valid email address") // Validates the email format
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
      "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

export const ResetSchema = yup.object().shape({
  email: yup
    .string() // Ensures that the field is a string
    .email("Please enter a valid email address") // Validates the email format
    .required("Email is required"),
});

export const NewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
      "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
