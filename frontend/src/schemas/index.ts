import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "Enter valid email",
    }),

  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "Enter valid email",
    }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  fullName: z.string().min(1, {
    message: "Name is required",
  }),
});


export const carSchema = z.object({
  carName: z.string().min(1,"Title is required"), // No validation currently
  brand: z.string().min(1,"description is required"), // No validation currently
  model: z.string().min(1,"author is required"), // No validation currently
  imgUrl: z.string().min(1), // Consider changing to number for calculations
  price: z.string(), // Consider changing to number for calculations
  rating: z.string(), // Already defined as number
  description: z.string().min(1,"stock is required"), // Already defined as number
  automatic: z.string(), // Already defined as number
  gps: z.string(), // Already defined as number
  seatType: z.string(), // Already defined as number
  speed: z.string(), // Already defined as number
});