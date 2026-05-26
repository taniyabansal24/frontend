import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@/features/auth/types/authTypes";

interface AuthState {
  user: User | null;

  setUser: (user: User) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) =>
        set({
          user,
        }),

      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",

      partialize: (state) => ({
        user: state.user,
      }),

      skipHydration: true,
    }
  )
);