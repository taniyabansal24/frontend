// src/features/topics/schemas/topic.schema.ts

import { z } from "zod";

export const topicSchema = z.object({
  subjectId: z
    .string()
    .min(1, "Subject is required"),

  name: z
    .string()
    .min(3, "Topic name must be at least 3 characters")
    .max(100, "Topic name must be less than 100 characters"),

  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .or(z.literal("")),
});

export type TopicSchemaType = z.infer<typeof topicSchema>;