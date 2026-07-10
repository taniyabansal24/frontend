// src/features/tests/create-test/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import {
  getBatches,
  getSubjects,
  getQuestionBanks,
  getTests,
  getTestById,
} from "./service";

import { CREATE_TEST_KEYS } from "./query-keys";

/* ---------------- Batches ---------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: CREATE_TEST_KEYS.batches(),

    queryFn: getBatches,
  });
};

/* ---------------- Subjects ---------------- */

export const useSubjectsQuery = (batchId?: string) => {
  return useQuery({
    queryKey: CREATE_TEST_KEYS.subjects(batchId),

    queryFn: () => getSubjects(batchId!),

    enabled: !!batchId,
  });
};

/* ---------------- Question Banks ---------------- */

export const useQuestionBanksQuery = () => {
  return useQuery({
    queryKey: CREATE_TEST_KEYS.questionBanks(),

    queryFn: getQuestionBanks,
  });
};

/* ---------------- Tests ---------------- */

export const useTestsQuery = (batchId?: string, subjectId?: string) => {
  return useQuery({
    queryKey: CREATE_TEST_KEYS.tests(batchId, subjectId),

    queryFn: () =>
      getTests({
        batchId: batchId!,
        subjectId: subjectId!,
      }),

    enabled: !!batchId && !!subjectId,
  });
};

/* ---------------- Test ---------------- */

export const useTestQuery = (id?: string) => {
  return useQuery({
    queryKey: id ? CREATE_TEST_KEYS.test(id) : ["tests", "detail"],

    queryFn: () => getTestById(id!),

    enabled: !!id,
  });
};
