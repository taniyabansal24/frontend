"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { ROUTES } from "@/constants/routes";

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { clear } = useAuthStore();

  useEffect(() => {
    const handleUnauthorized = () => {
      clear();
      router.replace(ROUTES.login);
    };

    window.addEventListener("auth:unauthorized", handleUnauthorized);

    return () => {
      window.removeEventListener("auth:unauthorized", handleUnauthorized);
    };
  }, [clear, router]);

  return <>{children}</>;
}
