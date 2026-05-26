import { z } from "zod";

export const registerSchema = z.object({
  tenantName: z.string().min(2, "Tenant name is required").trim(),

  tenantSlug: z
    .string()
    .min(2, "Tenant slug is required")
    .trim()
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens",
    ),

  adminName: z.string().min(2, "Admin name is required").trim(),

  adminEmail: z.email("Invalid email address").trim().toLowerCase(),

  adminPhone: z
    .string()
    .trim()
    .regex(/^\+?[1-9]\d{9,14}$/, "Enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pin code must be 6 digits"),

  state: z.string().min(1, "State is required"),

  country: z.string().min(1, "Country is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain uppercase, lowercase, number, and special character",
    ),

  confirmPassword: z
      .string()
      .min(1, "Confirm password is required"),
  })
   .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",

    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
