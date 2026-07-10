// features/batches/api/query-keys.ts

export const BATCH_KEYS = {
  all: ["batches"] as const,

  list: () =>
    [...BATCH_KEYS.all, "list"] as const,

  detail: (id: string) =>
    [...BATCH_KEYS.all, id] as const,
};