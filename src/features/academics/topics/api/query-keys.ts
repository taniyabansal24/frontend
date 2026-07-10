// src/features/topics/api/query-keys.ts

export const TOPIC_KEYS = {
  all: ["topics"] as const,

  batches: () => [...TOPIC_KEYS.all, "batches"] as const,

  subjects: (batchId?: string) =>
    [...TOPIC_KEYS.all, "subjects", batchId] as const,

  topics: (subjectId?: string) =>
    [...TOPIC_KEYS.all, "list", subjectId] as const,

  topic: (id: string) =>
    [...TOPIC_KEYS.all, "detail", id] as const,

  subject: (id: string) =>
    [...TOPIC_KEYS.all, "subject", id] as const,
};