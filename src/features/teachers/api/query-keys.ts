// features/teachers/api/query-keys.ts

export const TEACHER_KEYS = {
  all: ["teachers"] as const,

  list: () =>
    [...TEACHER_KEYS.all, "list"] as const,

  detail: (id: string) =>
    [...TEACHER_KEYS.all, id] as const,
};