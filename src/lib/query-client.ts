import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered fresh for 1 minute
        staleTime: 60 * 1000,
        // Retry once on failure
        retry: 1,
        // Don't refetch on tab focus (prevents unnecessary requests)
        refetchOnWindowFocus: false,
      },
      mutations: {
        // No retry for mutations (side effects)
        retry: 0,
      },
    },
  });
