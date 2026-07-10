// src/features/subjects/schemas/subject.schema.ts

import { z } from "zod";

export const subjectSchema = z.object({
  batchId: z.string().min(1, "Batch is required"),

  name: z
    .string()
    .min(2, "Subject name is required"),

  description: z.string().optional(),
});

export type SubjectSchemaType = z.infer<
  typeof subjectSchema
>;