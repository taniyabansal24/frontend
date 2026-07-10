// src/features/topics/api/service.ts

import { api } from "@/lib/axios";
import { Subject } from "../types";

/* ---------------- Batches ---------------- */

export const getBatches = async () => {
  const response = await api.get("/batches");

  return response.data;
};

/* ---------------- Subjects ---------------- */
type SubjectResponse = {
  success: boolean;
  data: Subject;
};

export const getSubjects = async (batchId?: string) => {
  const response = await api.get("/subjects", {
    params: batchId ? { batchId } : undefined,
  });

  return response.data;
};

export const getSubjectById = async (
  subjectId: string,
): Promise<SubjectResponse> => {
  const response = await api.get<SubjectResponse>(`/subjects/${subjectId}`);
  return response.data;
};

/* ---------------- Topics ---------------- */

export const getTopics = async (subjectId?: string) => {
  const response = await api.get("/topics", {
    params: subjectId ? { subjectId } : undefined,
  });

  return response.data;
};

export const getTopicById = async (id: string) => {
  const response = await api.get(`/topics/${id}`);

  return response.data;
};

export const createTopic = async (payload: {
  subjectId: string;
  name: string;
  description?: string;
}) => {
  const response = await api.post("/topics", payload);

  return response.data;
};

export const updateTopic = async ({
  id,
  data,
}: {
  id: string;
  data: {
    name?: string;
    description?: string;
  };
}) => {
  const response = await api.patch(`/topics/${id}`, data);

  return response.data;
};

export const deleteTopic = async (id: string) => {
  const response = await api.delete(`/topics/${id}`);

  return response.data;
};
