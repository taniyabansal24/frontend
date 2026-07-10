// src/features/topics/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getBatches, getSubjects, getTopics, getTopicById, getSubjectById } from "./service";

import { TOPIC_KEYS } from "./query-keys";

/* ---------------- Batches ---------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: TOPIC_KEYS.batches(),

    queryFn: getBatches,
  });
};

/* ---------------- Subjects ---------------- */

export const useSubjectsQuery = (batchId?: string) => {
  return useQuery({
    queryKey: TOPIC_KEYS.subjects(batchId),
    queryFn: () => getSubjects(batchId),
  });
};

export const useSubjectByIdQuery = (subjectId?: string) => {
  return useQuery({
    queryKey: TOPIC_KEYS.subject(subjectId!),
    queryFn: () => getSubjectById(subjectId!),
    enabled: !!subjectId,
  });
};

/* ---------------- Topics ---------------- */

export const useTopicsQuery = (subjectId?: string) => {
  return useQuery({
    queryKey: TOPIC_KEYS.topics(subjectId),
    queryFn: () => getTopics(subjectId),
  });
};

/* ---------------- Topic ---------------- */

export const useTopicQuery = (id?: string) => {
  return useQuery({
    queryKey: id ? TOPIC_KEYS.topic(id) : ["topics", "detail"],

    queryFn: () => getTopicById(id!),

    enabled: !!id,
  });
};
