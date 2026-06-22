import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2, "Student name is required"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(10, "Phone number is required"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  studentClass: z.string().min(1, "Class is required"),

  batchIds: z.array(z.string()).min(1),

  parentName: z.string().optional(),

  parentEmail: z.string().optional(),

  parentPhone: z.string().optional(),

  parentPassword: z.string().optional(),
  
  relationship: z.string().optional(),
});

export type StudentSchemaType = z.infer<typeof studentSchema>;
