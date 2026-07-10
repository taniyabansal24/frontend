import { useQuery } from "@tanstack/react-query";
import { getMe } from "./service";
import { AUTH_KEYS } from "./query-keys";
import { useAuthStore } from "@/stores/auth-store";

export const useCurrentUser = () => {
  // const { isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: AUTH_KEYS.me(),
    queryFn: getMe,
    // Only fetch if the user is authenticated
    // enabled: isAuthenticated,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
