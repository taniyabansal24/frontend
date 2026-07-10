// src/features/tests/create-test/api/query-keys.ts

export const CREATE_TEST_KEYS = {
  all: ["create-tests"] as const,

  /* ---------------- Batches ---------------- */

  batches: () => [...CREATE_TEST_KEYS.all, "batches"] as const,

  /* ---------------- Subjects ---------------- */

  subjects: (batchId?: string) =>
    [...CREATE_TEST_KEYS.all, "subjects", batchId] as const,

  /* ---------------- Question Banks ---------------- */

  questionBanks: () => [...CREATE_TEST_KEYS.all, "question-banks"] as const,

  /* ---------------- Tests ---------------- */

  tests: (batchId?: string, subjectId?: string) =>
    [...CREATE_TEST_KEYS.all, "tests", batchId, subjectId] as const,

  test: (id: string) => [...CREATE_TEST_KEYS.all, "test", id] as const,
};
