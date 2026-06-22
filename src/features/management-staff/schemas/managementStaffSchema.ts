import { z } from "zod";

export const managementStaffSchema =
  z.object({
    name: z.string().min(2),

    email: z.email(),

    phone: z.string().min(10),

    password: z.string().min(8),

    department: z.string().min(2),
  });

export type ManagementStaffSchemaType =
  z.infer<typeof managementStaffSchema>;