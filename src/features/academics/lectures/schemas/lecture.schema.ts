// src/features/academics/lectures/schemas/lecture.schema.ts

import { z } from "zod";

export const lectureSchema = z.object({
  topicId: z.string().min(1, "Topic is required"),

  title: z
    .string()
    .min(3, "Lecture title must be at least 3 characters")
    .max(100, "Lecture title must be less than 100 characters"),

  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .or(z.literal("")),

  contentUrl: z.string().url("Enter a valid URL"),

  logoUrl: z.string().url("Enter a valid URL").optional().or(z.literal("")),

  date: z.string().min(1, "Lecture date is required"),
});

export type LectureSchemaType = z.infer<typeof lectureSchema>;
