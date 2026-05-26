import { z } from "zod";

export const loginSchema = z.object({
  orgCode: z
    .string()
    .min(2, "Organization code is required"),

  loginId: z
    .string()
    .min(1, "Email or phone is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

    rememberMe: z.boolean().optional(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;