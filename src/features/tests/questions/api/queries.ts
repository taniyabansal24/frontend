// src/features/tests/questions/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import {
  getBatches,
  getSubjectsByBatch,
  getQuestionBanks,
  getQuestions,
} from "./service";

import { TEST_KEYS } from "./query-keys";

/* ---------------- Batches ---------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: TEST_KEYS.batches(),

    queryFn: getBatches,
  });
};

/* ---------------- Subjects ---------------- */

export const useSubjectsByBatchQuery = (
  batchId?: string,
) => {
  return useQuery({
    queryKey: TEST_KEYS.subjects(batchId),

    queryFn: () =>
      getSubjectsByBatch(batchId!),

    enabled: !!batchId,
  });
};

/* ---------------- Question Banks ---------------- */

export const useQuestionBanksQuery = (
  subjectId?: string,
) => {
  return useQuery({
    queryKey: TEST_KEYS.questionBanks(subjectId),

    queryFn: () =>
      getQuestionBanks(subjectId!),

    enabled: !!subjectId,
  });
};

/* ---------------- Questions ---------------- */

export const useQuestionsQuery = (
  questionBankId?: string,
  subjectId?: string,
) => {
  return useQuery({
    queryKey: TEST_KEYS.questions(
      questionBankId,
      subjectId,
    ),

    queryFn: () =>
      getQuestions({
        questionBankId,
        subjectId,
      }),

    enabled:
      !!questionBankId || !!subjectId,
  });
};