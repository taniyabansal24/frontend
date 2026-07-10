// src/features/academics/lectures/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import {
  getBatches,
  getSubjects,
  getTopics,
  getLectures,
  getLectureById,
} from "./service";

import { LECTURE_KEYS } from "./query-keys";

/* ---------------- Batches ---------------- */

export const useBatchesQuery = () => {
  return useQuery({
    queryKey: LECTURE_KEYS.batches(),

    queryFn: getBatches,
  });
};

/* ---------------- Subjects ---------------- */

export const useSubjectsQuery = (batchId?: string) => {
  return useQuery({
    queryKey: LECTURE_KEYS.subjects(batchId),
    queryFn: () => getSubjects(batchId),
  });
};

/* ---------------- Topics ---------------- */

export const useTopicsQuery = (subjectId?: string) => {
  return useQuery({
    queryKey: LECTURE_KEYS.topics(subjectId),
    queryFn: () => getTopics(subjectId),
  });
};

/* ---------------- Lectures ---------------- */

export const useLecturesQuery = (topicId?: string) => {
  return useQuery({
    queryKey: LECTURE_KEYS.lectures(topicId),
    queryFn: () => getLectures(topicId),
  });
};

/* ---------------- Lecture ---------------- */

export const useLectureQuery = (id?: string) => {
  return useQuery({
    queryKey: id ? LECTURE_KEYS.lecture(id) : ["lectures", "detail"],

    queryFn: () => getLectureById(id!),

    enabled: !!id,
  });
};
