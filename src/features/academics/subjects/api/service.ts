// src/features/subjects/api/service.ts

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

export const getSubjectById = async (id: string) => {
  const response = await api.get(`/subjects/${id}`);

  return response.data;
};

export const createSubject = async (payload: {
  batchId: string;
  name: string;
  description?: string;
}) => {
  const response = await api.post("/subjects", payload);

  return response.data;
};

export const updateSubject = async ({
  id,
  name,
  description,
}: {
  id: string;
  name: string;
  description?: string;
}) => {
  const response = await api.patch(`/subjects/${id}`, {
    name,
    description,
  });

  return response.data;
};

export const deleteSubject = async (id: string) => {
  const response = await api.delete(`/subjects/${id}`);

  return response.data;
};
