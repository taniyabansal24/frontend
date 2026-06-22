import axios from "axios";
// import Cookies from "js-cookie";
import { env } from "./env";

export const api = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10_000,
});

api.interceptors.request.use(
  (config) => {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjViMjIwMS02NjFjLTRlMWQtOTM1YS0wOGFhMzFhMzJiNWIiLCJ0ZW5hbnRJZCI6IjE1Y2NmMGY1LTM4NDMtNDk0MC1iNWIzLTkyYmVjMmI0ZjY5YyIsInJvbGUiOiJURU5BTlRfQURNSU4iLCJpYXQiOjE3ODE1MzUyNjgsImV4cCI6MTc4NDEyNzI2OH0.Y7YQqcyF8Ij9I0z9znTuDlEEiZhWNl28bE8v12Q9U-0";


    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    if (env.isDev) {
      console.log("→ API Request:", {
        url: `${config.baseURL}${config.url}`,
        method: config.method?.toUpperCase(),
        data: config.data,
      });
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      // Clear the auth cookie
      // Cookies.remove("token", { path: "/" });

      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("auth:unauthorized"));
      }
    }

    return Promise.reject(error);
  },
);
