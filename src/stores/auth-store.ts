import { create } from "zustand";

interface AuthClientState {
  isAuthenticated: boolean;

  sessionChecked: boolean;

  setAuthenticated: (val: boolean) => void;
  setSessionChecked: (val: boolean) => void;

  clear: () => void;
}

export const useAuthStore = create<AuthClientState>((set) => ({
  isAuthenticated: false,
  sessionChecked: false,

  setAuthenticated: (val) => set({ isAuthenticated: val }),
  setSessionChecked: (val) => set({ sessionChecked: val }),

  clear: () => set({ isAuthenticated: false, sessionChecked: false }),
}));
