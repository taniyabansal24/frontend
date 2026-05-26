import axios from "axios";
import Cookies from "js-cookie";

import { useAuthStore } from "@/store/auth-store";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    try {
      // Read token from cookie instead of Zustand/localStorage
      const token = Cookies.get("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (process.env.NODE_ENV === "development") {
        console.log("API Request:", {
          baseURL: config.baseURL,
          url: config.url,
          method: config.method,
          data: config.data,
        });
      }

      return config;
    } catch (error) {
      console.error("Request interceptor error:", error);

      return config;
    }
  },

  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();

      Cookies.remove("token", {
        path: "/",
      });

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);