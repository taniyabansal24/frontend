import { z } from "zod";

export const createTestSchema = z
  .object({
    title: z.string().trim().min(1, "Title is required"),

    description: z.string().trim().optional(),

    durationMinutes: z.coerce
      .number()
      .min(1, "Duration must be at least 1 minute"),

    evaluationMode: z.enum(["MCQ", "SUBJECTIVE", "MIXED"]),

    batchIds: z.array(z.string()).min(1, "Select at least one batch"),

    subjectId: z.string().min(1, "Subject is required"),

    questionBankIds: z
      .array(z.string())
      .min(1, "Select at least one question bank"),

    syllabus: z.string().trim().optional(),

    instructions: z.string().trim().optional(),

    startDate: z.string().optional(),

    startTime: z.string().optional(),

    attemptType: z.enum(["UNLIMITED", "LIMITED"]),

    maxAttempts: z.coerce
      .number()
      .min(1, "Maximum attempts must be at least 1")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.attemptType === "LIMITED" &&
      (data.maxAttempts === undefined || Number.isNaN(data.maxAttempts))
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["maxAttempts"],
        message: "Maximum attempts is required.",
      });
    }

    if (data.attemptType === "UNLIMITED") {
      data.maxAttempts = undefined;
    }
  });

export type CreateTestSchemaType = z.infer<typeof createTestSchema>;
