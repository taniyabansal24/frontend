// src/features/tests/question-banks/api/service.ts

import { api } from "@/lib/axios";

import type { QuestionBankSchemaType } from "../schemas/question-bank.schema";
import type { QuestionBank, Question } from "../types";

type QuestionBankResponse = {
  success: boolean;
  message: string;
  data: QuestionBank[];
};

type SingleQuestionBankResponse = {
  success: boolean;
  message: string;
  data: QuestionBank;
};

type QuestionResponse = {
  success: boolean;
  message: string;
  data: Question[];
};

/* -------------------------------------------------------------------------- */
/*                            Question Bank APIs                              */
/* -------------------------------------------------------------------------- */

export const createQuestionBank = async (payload: QuestionBankSchemaType) => {
  const response = await api.post("/tests/question-banks", payload);

  return response.data;
};

export const getQuestionBanks = async (): Promise<QuestionBankResponse> => {
  const response = await api.get<QuestionBankResponse>("/tests/question-banks");

  return response.data;
};

export const getQuestionBank = async (
  id: string,
): Promise<SingleQuestionBankResponse> => {
  const response = await api.get<SingleQuestionBankResponse>(
    `/tests/question-banks/${id}`,
  );

  return response.data;
};

export const updateQuestionBank = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<QuestionBankSchemaType>;
}) => {
  const response = await api.patch(`/tests/question-banks/${id}`, data);

  return response.data;
};

export const deleteQuestionBank = async (id: string) => {
  const response = await api.delete(`/tests/question-banks/${id}`);

  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               Question APIs                                */
/* -------------------------------------------------------------------------- */

export const getQuestionsByQuestionBank = async (
  questionBankId: string,
): Promise<QuestionResponse> => {
  const response = await api.get<QuestionResponse>("/tests/questions", {
    params: {
      questionBankId,
    },
  });

  return response.data;
};

export const updateQuestion = async ({
  questionId,
  questionBankId: _questionBankId,
  data,
}: {
  questionId: string;
  questionBankId: string;
  data: Partial<Question>;
}) => {
  const response = await api.patch(`/tests/questions/${questionId}`, data);

  return response.data;
};

export const deleteQuestion = async ({
  questionId,
}: {
  questionId: string;
  questionBankId: string;
}) => {
  return api.delete(`/tests/questions/${questionId}`);
};

/* -------------------------------------------------------------------------- */
/*                           Supporting APIs                                  */
/* -------------------------------------------------------------------------- */

export const getBatches = async () => {
  const response = await api.get("/batches");

  return response.data;
};

export const getSubjectsByBatch = async (batchId: string) => {
  const response = await api.get(`/subjects?batchId=${batchId}`);

  return response.data;
};
