// features/teachers/api/service.ts

import { api } from "@/lib/axios";

import { CreateTeacherPayload, UpdateTeacherPayload } from "../types";

export const createTeacher = async (data: CreateTeacherPayload) => {
  const response = await api.post("/teachers", data);

  return response.data;
};

export const getTeachers = async () => {
  const response = await api.get("/teachers");

  return response.data.data;
};

export const getTeacherById = async (id: string) => {
  const response = await api.get(`/teachers/${id}`);

  return response.data;
};

export const updateTeacher = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateTeacherPayload;
}) => {
  const response = await api.patch(`/teachers/${id}`, data);

  return response.data;
};

export const deleteTeacher = async (id: string) => {
  const response = await api.delete(`/teachers/${id}`);

  return response.data;
};
