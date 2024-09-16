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

export const BanSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
      "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

export const UpdateRateSchema = yup.object().shape({
  naira: Yup.string().required("Naira is required"),
  usd: Yup.string().required("Dollar is required"),
});

import * as Yup from "yup";

export const UpdateProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters long")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters long")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
});

export const AddAdminSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  // role: Yup.string().required("Role is required"),
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters long")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters long")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
      "Password must contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
});
