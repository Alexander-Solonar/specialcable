// import { date, object, string } from 'yup';
import { object, string } from 'yup';

// export const registerSchema = object({
//   name: string().trim().required("Name is a required field"),
//   email: string().trim().required("Email is a required field"),
//   password: string().trim().required("Password is a required field"),
// });

// export const LoginSchema = object({
//   email: string().trim().required("Email is a required field"),
//   password: string().trim().required("Password is a required field"),
// });

// export const EditSchema = object({
//   name: string().trim().required("This is a required field"),
//   gender: string().trim(),
//   dob: date(),
//   phone: string(),
//   email: string().trim().required("This is a required field"),
// });

export const feedbackSchema = object({
  name: string().trim().required('Name is a required field'),
  phone: string().required('Phone is a required field'),
});
