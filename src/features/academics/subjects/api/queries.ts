// src/features/subjects/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getBatches, getSubjects, getSubjectById } from "./service";

import { SUBJECT_KEYS } from "./query-keys";

/* ---------------- Batches ---------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: SUBJECT_KEYS.batches(),

    queryFn: getBatches,
  });
};

/* ---------------- Subjects ---------------- */

export const useSubjectsQuery = (batchId?: string) => {
  return useQuery({
    queryKey: SUBJECT_KEYS.subjects(batchId),
    queryFn: () => getSubjects(batchId),
  });
};

/* ---------------- Subject ---------------- */

export const useSubjectQuery = (id?: string) => {
  return useQuery({
    queryKey: id ? SUBJECT_KEYS.subject(id) : ["subjects", "detail"],

    queryFn: () => getSubjectById(id!),

    enabled: !!id,
  });
};
