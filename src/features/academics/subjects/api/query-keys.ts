//  src/features/subjects/api/query-keys.ts

export const SUBJECT_KEYS = {
  all: ["subjects"] as const,

  /* ---------------- Batches ---------------- */

  batches: () => [...SUBJECT_KEYS.all, "batches"] as const,

  /* ---------------- Subjects ---------------- */

  subjects: (batchId?: string) =>
    [...SUBJECT_KEYS.all, "list", batchId] as const,
  
  subject: (id: string) => [...SUBJECT_KEYS.all, "detail", id] as const,
};
