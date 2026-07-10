// src/features/tests/create-test/api/service.ts

import { api } from "@/lib/axios";

/* ---------------- Batches ---------------- */

export const getBatches = async () => {
  const response = await api.get("/batches");

  return response.data;
};

/* ---------------- Subjects ---------------- */

export const getSubjects = async (batchId: string) => {
  const response = await api.get("/subjects", {
    params: {
      batchId,
    },
  });

  return response.data;
};

/* ---------------- Question Banks ---------------- */

/* ---------------- Question Banks ---------------- */

export const getQuestionBanks = async () => {
  const response = await api.get("/tests/question-banks");

  return response.data;
};

/* ---------------- Tests ---------------- */

export const createTest = async (payload: {
  title: string;
  description?: string;
  durationMinutes: number;
  evaluationMode: "MCQ" | "SUBJECTIVE" | "MIXED";
  batchIds: string[];
  subjectId: string;
  questionBankIds: string[];
}) => {
  const response = await api.post("/tests", payload);

  return response.data;
};

export const getTests = async (params: {
  batchId: string;
  subjectId: string;
}) => {
  const response = await api.get("/tests", {
    params,
  });

  return response.data;
};

export const getTestById = async (id: string) => {
  const response = await api.get(`/tests/${id}`);

  return response.data;
};

export const updateTest = async ({
  id,
  data,
}: {
  id: string;
  data: {
    title?: string;
    description?: string;
    durationMinutes?: number;
    evaluationMode?: "MCQ" | "SUBJECTIVE" | "MIXED";
  };
}) => {
  const response = await api.patch(`/tests/${id}`, data);

  return response.data;
};

export const deleteTest = async (id: string) => {
  const response = await api.delete(`/tests/${id}`);

  return response.data;
};
