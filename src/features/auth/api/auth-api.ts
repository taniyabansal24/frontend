import { api } from "../../../lib/axios";

import { LoginPayload, RegisterTenantPayload } from "../types/authTypes";

export const registerTenant = async (data: RegisterTenantPayload) => {
  const response = await api.post("/auth/register-tenant", data);

  return response.data;
};

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const logoutUser = async () => {
  await api.post("/auth/logout");
};

export const forgotPassword = async (data: {
  orgCode: string;
  loginId: string;
}) => {
  const response = await api.post("/auth/forgot-password", data);

  return response.data;
};

export const resetPassword = async (data: {
  token: string;
  password: string;
}) => {
  const response = await api.post("/auth/reset-password", data);

  return response.data;
};
