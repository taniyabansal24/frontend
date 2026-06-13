export const AUTH_KEYS = {
  all: ["auth"] as const,

  me: () => [...AUTH_KEYS.all, "me"] as const,

  status: () => [...AUTH_KEYS.all, "status"] as const,
} as const;
