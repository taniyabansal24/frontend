// features/management-staff/api/service.ts

import { api } from "@/lib/axios";

import {
  CreateManagementStaffPayload,
  UpdateManagementStaffPayload,
} from "../types";

export const createManagementStaff = async (
  data: CreateManagementStaffPayload
) => {
  const response = await api.post(
    "/management-staff",
    data
  );

  return response.data;
};

export const getManagementStaff = async () => {
  const response = await api.get(
    "/management-staff"
  );

  return response.data.data;
};

export const getManagementStaffById =
  async (id: string) => {
    const response = await api.get(
      `/management-staff/${id}`
    );

    return response.data;
  };

export const updateManagementStaff =
  async ({
    id,
    data,
  }: {
    id: string;
    data: UpdateManagementStaffPayload;
  }) => {
    const response = await api.patch(
      `/management-staff/${id}`,
      data
    );

    return response.data;
  };

export const deleteManagementStaff =
  async (id: string) => {
    const response = await api.delete(
      `/management-staff/${id}`
    );

    return response.data;
  };