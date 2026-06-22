// src/features/parents/api/service.ts

import { api } from "@/lib/axios";

export const createParent = async (data: {
  name: string;
  email: string;
  phone: string;
  password: string;
  relationship: string;
  studentId: string;
}) => {
  const response = await api.post("/parents", data);

  return response.data;
};

export const getParents = async () => {
  const response = await api.get("/parents");

  return response.data.data;
};

export const updateParent = async ({
  id,
  data,
}: {
  id: string;
  data: {
    name: string;
    relationship: string;
    studentId: string;
  };
}) => {
  const response = await api.patch(
    `/parents/${id}`,
    data
  );

  return response.data;
};

export const deleteParent = async (
  id: string
) => {
  const response = await api.delete(
    `/parents/${id}`
  );

  return response.data;
};