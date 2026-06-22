// features/teachers/schemas/teacherSchema.ts

import { z } from "zod";

export const teacherSchema =
  z.object({
    name: z
      .string()
      .min(2, "Name is required"),

    email: z
      .email("Invalid email"),

    phone: z
      .string()
      .min(
        10,
        "Phone number is required"
      ),

    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters"
      ),

    subject: z
      .string()
      .min(
        1,
        "Subject is required"
      ),
  });

export type TeacherSchemaType =
  z.infer<typeof teacherSchema>;