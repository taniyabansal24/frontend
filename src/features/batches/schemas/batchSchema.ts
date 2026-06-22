// features/batches/schemas/batchSchema.ts

import { z } from "zod";

export const batchSchema = z.object({
  name: z.string().min(2),

  description: z.string().min(5),

  startDate: z.string(),

  endDate: z.string(),

  teacherIds: z.array(z.string()),

  studentIds: z.array(z.string()),
});

export type BatchSchemaType =
  z.infer<typeof batchSchema>;