// src/features/tests/question-banks/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import {
  getQuestionBanks,
  getQuestionBank,
  getQuestionsByQuestionBank,
  getBatches,
  getSubjectsByBatch,
} from "./service";

import { TEST_KEYS } from "./query-keys";

/* -------------------------------------------------------------------------- */
/*                            Question Bank Queries                           */
/* -------------------------------------------------------------------------- */

export const useQuestionBanksQuery = () => {
  return useQuery({
    queryKey: TEST_KEYS.questionBanks(),
    queryFn: getQuestionBanks,
  });
};

export const useQuestionBankQuery = (
  questionBankId: string,
) => {
  return useQuery({
    queryKey: TEST_KEYS.questionBank(
      questionBankId,
    ),
    queryFn: () =>
      getQuestionBank(questionBankId),
    enabled: !!questionBankId,
  });
};

/* -------------------------------------------------------------------------- */
/*                              Question Queries                              */
/* -------------------------------------------------------------------------- */

export const useQuestionsByQuestionBankQuery = (
  questionBankId: string,
) => {
  return useQuery({
    queryKey:
      TEST_KEYS.questionsByQuestionBank(
        questionBankId,
      ),
    queryFn: () =>
      getQuestionsByQuestionBank(
        questionBankId,
      ),
    enabled: !!questionBankId,
  });
};

/* -------------------------------------------------------------------------- */
/*                            Supporting Queries                              */
/* -------------------------------------------------------------------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: TEST_KEYS.batches(),
    queryFn: getBatches,
  });
};

export const useSubjectsByBatchQuery = (
  batchId?: string,
) => {
  return useQuery({
    queryKey: TEST_KEYS.subjectsByBatch(
      batchId ?? "",
    ),
    queryFn: () =>
      getSubjectsByBatch(batchId!),
    enabled: !!batchId,
  });
};