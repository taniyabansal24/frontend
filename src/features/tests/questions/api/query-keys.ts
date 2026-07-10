export const TEST_KEYS = {
  all: ["tests"] as const,

  /* Batches */
  batches: () => [...TEST_KEYS.all, "batches"] as const,

  /* Subjects */
  subjects: (batchId?: string) =>
    [...TEST_KEYS.all, "subjects", batchId] as const,

  /* Question Banks */
  questionBanks: (subjectId?: string) =>
    [...TEST_KEYS.all, "question-banks", subjectId] as const,

  questionBank: (id: string) =>
    [...TEST_KEYS.all, "question-banks", id] as const,

  /* Questions */
  questions: (questionBankId?: string, subjectId?: string) =>
    [...TEST_KEYS.all, "questions", questionBankId, subjectId] as const,

  question: (id: string) => [...TEST_KEYS.all, "questions", id] as const,
};
