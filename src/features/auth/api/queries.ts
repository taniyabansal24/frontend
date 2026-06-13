import { useQuery } from "@tanstack/react-query";
import { getMe } from "./service";
import { AUTH_KEYS } from "./query-keys";
import { getAuthCookie } from "@/utils/cookie";

export const useCurrentUser = () =>
  useQuery({
    queryKey: AUTH_KEYS.me(),
    queryFn: getMe,
    // Only fetch if the user has a token
    enabled: !!getAuthCookie(),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
