// src/features/tests/question-banks/api/query-keys.ts

export const TEST_KEYS = {
  all: ["tests"] as const,

  /* ---------------- Question Banks ---------------- */

  questionBanks: () =>
    [...TEST_KEYS.all, "question-banks"] as const,

  questionBank: (id: string) =>
    [...TEST_KEYS.questionBanks(), id] as const,

  /* ---------------- Questions ---------------- */

  questions: () =>
    [...TEST_KEYS.all, "questions"] as const,

  questionsByQuestionBank: (questionBankId: string) =>
    [...TEST_KEYS.questions(), "question-bank", questionBankId] as const,

  /* ---------------- Batches ---------------- */

  batches: () =>
    [...TEST_KEYS.all, "batches"] as const,

  /* ---------------- Subjects ---------------- */

  subjectsByBatch: (batchId: string) =>
    [...TEST_KEYS.all, "subjects", batchId] as const,
};