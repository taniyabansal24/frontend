// src/features/tests/questions/api/service.ts

import { api } from "@/lib/axios";

export const getBatches = async () => {
  const response = await api.get("/batches");

  return response.data;
};

export const getSubjectsByBatch = async (
  batchId: string,
) => {
  const response = await api.get("/subjects", {
    params: {
      batchId,
    },
  });

  return response.data;
};

/* ---------------- CSV Upload ---------------- */

export const uploadQuestionsCsv = async (
  file: File,
) => {
  const csvText = await file.text();

  const response = await api.post(
    "/tests/questions/import-csv",
    csvText,
    {
      headers: {
        "Content-Type": "text/csv",
      },
    },
  );

  return response.data;
};

/* ---------------- Question Banks ---------------- */

export const getQuestionBanks =
  async (subjectId?: string) => {
    const response =
      await api.get(
        "/tests/question-banks",
        {
          params: {
            subjectId,
          },
        },
      );

    return response.data;
};

/* ---------------- Questions ---------------- */

export const createQuestion = async (
  payload: unknown,
) => {
  const response = await api.post(
    "/tests/questions",
    payload,
  );

  return response.data;
};

/* Create Multiple Questions */

export const createQuestions = async (
  payloads: unknown[],
) => {
  return Promise.all(
    payloads.map((payload) =>
      createQuestion(payload),
    ),
  );
};

export const getQuestions = async (
  params?: {
    questionBankId?: string;
    subjectId?: string;
  },
) => {
  const response = await api.get(
    "/tests/questions",
    {
      params,
    },
  );

  return response.data;
};

