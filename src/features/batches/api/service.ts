// features/batches/api/service.ts

import { api } from "@/lib/axios";

import { CreateBatchPayload, UpdateBatchPayload, Batch } from "../types";

export const createBatch = async (data: CreateBatchPayload) => {
  const response = await api.post("/batches", data);

  return response.data;
};

export const getBatches = async (): Promise<Batch[]> => {
  const response = await api.get("/batches");

  return response.data.data;
};

export const getBatchById = async (id: string) => {
  const response = await api.get(`/batches/${id}`);

  return response.data;
};

export const updateBatch = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateBatchPayload;
}) => {
  const response = await api.patch(`/batches/${id}`, data);

  return response.data;
};

export const deleteBatch = async (id: string) => {
  const response = await api.delete(`/batches/${id}`);

  return response.data;
};
