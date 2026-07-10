import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import {
  loginUser,
  logoutUser,
  registerTenant,
  forgotPassword,
  resetPassword,
} from "./service";
import { AUTH_KEYS } from "./query-keys";
import { useAuthStore } from "@/stores/auth-store";
// import { setAuthCookie, removeAuthCookie } from "@/utils/cookie";
import { removeAuthCookie } from "@/utils/cookie";
import { ROUTES } from "@/constants/routes";
import type { LoginPayload, RegisterTenantPayload } from "../types";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const { setAuthenticated } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginPayload & { rememberMe?: boolean }) =>
      loginUser(data),

    onSuccess: (response, variables) => {
      // 1. Persist token in cookie
      // setAuthCookie(response.token, { rememberMe: variables.rememberMe });

      setAuthenticated(true);

      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.me() });

      toast.success("Login successful!");
      router.replace(ROUTES.dashboard);
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Login failed. Please try again.")
        : "Something went wrong.";
      toast.error(message);
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const { clear } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: logoutUser,

    onSettled: () => {
      removeAuthCookie();
      clear();
      queryClient.clear();
      router.replace(ROUTES.login);
    },

    onError: (error) => {
      console.error("Logout error:", error);
    },
  });
};

export const useRegisterMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterTenantPayload) => registerTenant(data),

    onSuccess: () => {
      toast.success("Registration successful! Please log in.");
      router.push(ROUTES.login);
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Registration failed.")
        : "Something went wrong.";
      toast.error(message);
    },
  });
};

export const useForgotPasswordMutation = () =>
  useMutation({
    mutationFn: forgotPassword,

    onSuccess: () => {
      toast.success("Password reset email sent!");
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to send reset email.")
        : "Something went wrong.";
      toast.error(message);
    },
  });

export const useResetPasswordMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      toast.success("Password reset successfully! Please log in.");
      router.push(ROUTES.login);
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to reset password.")
        : "Something went wrong.";
      toast.error(message);
    },
  });
};
