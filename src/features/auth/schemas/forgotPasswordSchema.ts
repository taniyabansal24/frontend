import { z } from "zod";

export const forgotPasswordSchema = z.object({
  orgCode: z.string().min(1, "Organization code is required"),

  loginId: z.string().min(1, "Email or phone is required"),
});

export type ForgotPasswordSchemaType =
  z.infer<typeof forgotPasswordSchema>;