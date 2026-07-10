// src/features/tests/question-banks/schemas/question-bank.schema.ts

import { z } from "zod";

export const questionBankSchema = z.object({
  name: z.string().min(1, "Name is required"),

  description: z.string().optional(),

  subjectIds: z
    .array(z.string())
    .min(1, "Select at least one subject"),
});

export type QuestionBankSchemaType =
  z.infer<typeof questionBankSchema>;