// src/features/students/api/service.ts
import { api } from "@/lib/axios";
import { CreateStudentPayload, Student } from "../types";

export const createStudent = async (data: CreateStudentPayload) => {
  const response = await api.post("/students", data);

  return response.data;
};

export const getStudents = async (): Promise<Student[]> => {
  const response = await api.get("/students");

  return response.data.data;
};

export const getStudentById = async (id: string) => {
  const response = await api.get<Student>(`/students/${id}`);

  return response.data;
};

export const updateStudent = async ({
  id,
  data,
}: {
  id: string;
  data: {
    name: string;
    phone: string;
    studentClass: string;
    batchIds: string[];
  };
}) => {
  const response = await api.patch(
    `/students/${id}`,
    data
  );

  return response.data;
};

export const deleteStudent = async (
  id: string
) => {
  const response =
    await api.delete(
      `/students/${id}`
    );

  return response.data;
};
