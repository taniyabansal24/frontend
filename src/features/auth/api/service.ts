// src/features/auth/api/service.ts
import { api } from "@/lib/axios";
import type {
  LoginPayload,
  RegisterTenantPayload,
  AuthResponse,
} from "../types";

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", data);
  return response.data;
};

export const registerTenant = async (
  data: RegisterTenantPayload,
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/register-tenant", data);
  return response.data;
};
export const logoutUser = async (): Promise<void> => {
  await api.post("/auth/logout");
};

export const forgotPassword = async (data: {
  orgCode: string;
  loginId: string;
}): Promise<{ message: string }> => {
  const response = await api.post<{ message: string }>(
    "/auth/forgot-password",
    data,
  );
  return response.data;
};
export const resetPassword = async (data: {
  token: string;
  password: string;
}): Promise<{ message: string }> => {
  const response = await api.post<{ message: string }>(
    "/auth/reset-password",
    data,
  );
  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");

  return response.data.data;
};