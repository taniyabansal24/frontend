import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  isSidebarOpen: boolean;

  toggleSidebar: () => void;

  setSidebarOpen: (open: boolean) => void;

  activeModal: string | null;

  openModal: (name: string) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      isSidebarOpen: true,
      activeModal: null,

      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      setSidebarOpen: (open) => set({ isSidebarOpen: open }),

      openModal: (name) => set({ activeModal: name }),
      closeModal: () => set({ activeModal: null }),
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({ isSidebarOpen: state.isSidebarOpen }),
    },
  ),
);
