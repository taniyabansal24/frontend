// src/features/academics/lectures/api/query-keys.ts

export const LECTURE_KEYS = {
  all: ["lectures"] as const,

  /* ---------------- Batches ---------------- */

  batches: () =>
    [...LECTURE_KEYS.all, "batches"] as const,

  /* ---------------- Subjects ---------------- */

  subjects: (batchId?: string) =>
    [
      ...LECTURE_KEYS.all,
      "subjects",
      batchId,
    ] as const,

  /* ---------------- Topics ---------------- */

  topics: (subjectId?: string) =>
    [
      ...LECTURE_KEYS.all,
      "topics",
      subjectId,
    ] as const,

  /* ---------------- Lectures ---------------- */

  lectures: (topicId?: string) =>
    [
      ...LECTURE_KEYS.all,
      "list",
      topicId,
    ] as const,

  lecture: (id: string) =>
    [
      ...LECTURE_KEYS.all,
      "detail",
      id,
    ] as const,
};