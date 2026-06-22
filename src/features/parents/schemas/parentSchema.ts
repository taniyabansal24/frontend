import { z } from "zod";

export const parentSchema = z.object({
  name: z
    .string()
    .min(2, "Parent name is required"),

  email: z
    .string()
    .email("Invalid email"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  password: z
    .string()
    .min(
      8,
      "Password must be at least 8 characters"
    ),

  relationship: z
    .string()
    .min(
      1,
      "Relationship is required"
    ),

  studentId: z
    .string()
    .min(
      1,
      "Student is required"
    ),
});

export type ParentSchemaType =
  z.infer<typeof parentSchema>;