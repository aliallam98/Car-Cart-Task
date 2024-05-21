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




export const TransitionSchema = z.object({
  description: z.string().min(1, {
    message: "description is required",
  }),
  paymentType: z.string().min(1, {
    message: "Payment Type is required",
  }),
  category: z.string().min(1, {
    message: "category is required",
  }),
  amount: z.string().min(1, {
    message: "amount is required",
  }),
  location: z.string(),
  date: z.date(),
});


export const CategorySchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(250),
});

export const BookSchema = z.object({
  title: z.string().min(1,"Title is required"), // No validation currently
  description: z.string().min(1,"description is required"), // No validation currently
  author: z.string().min(1,"author is required"), // No validation currently
  price: z.string().min(1), // Consider changing to number for calculations
  discount: z.string(), // Consider changing to number for calculations
  coverImage: z.any(), // Might want to consider validation for image format/size
  categoryId: z.string().min(1,"Catrgory is required"), // Likely needs validation for existing category options
  publishedDate: z.date(), // Consider using z.date() for date manipulation
  totalPages: z.string(), // Already defined as number
  stock: z.string().min(1,"stock is required"), // Already defined as number
  soldItemsNumber: z.string(), // Already defined as number
});