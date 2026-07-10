// src/features/academics/lectures/api/service.ts

import { api } from "@/lib/axios";

/* ---------------- Batches ---------------- */

export const getBatches = async () => {
  const response = await api.get("/batches");

  return response.data;
};

/* ---------------- Subjects ---------------- */

export const getSubjects = async (batchId?: string) => {
  const response = await api.get("/subjects", {
    params: batchId ? { batchId } : undefined,
  });

  return response.data;
};

/* ---------------- Topics ---------------- */

export const getTopics = async (subjectId?: string) => {
  const response = await api.get("/topics", {
    params: subjectId ? { subjectId } : undefined,
  });

  return response.data;
};

/* ---------------- Lectures ---------------- */

export const getLectures = async (topicId?: string) => {
  const response = await api.get("/lectures", {
    params: topicId ? { topicId } : undefined,
  });

  return response.data;
};

export const getLectureById = async (id: string) => {
  const response = await api.get(`/lectures/${id}`);

  return response.data;
};

export const createLecture = async (payload: {
  topicId: string;
  title: string;
  description?: string;
  contentUrl: string;
  logoUrl?: string;
  date: string;
}) => {
  const response = await api.post("/lectures", payload);

  return response.data;
};

export const updateLecture = async ({
  id,
  data,
}: {
  id: string;
  data: {
    title?: string;
    description?: string;
    contentUrl?: string;
    logoUrl?: string;
    date?: string;
    topicId?: string;
  };
}) => {
  const response = await api.patch(`/lectures/${id}`, data);

  return response.data;
};

export const deleteLecture = async (id: string) => {
  const response = await api.delete(`/lectures/${id}`);

  return response.data;
};
