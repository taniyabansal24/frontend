// features/students/api/query-keys.ts

export const STUDENT_KEYS = {
  all: ["students"] as const,

  list: () =>
    [...STUDENT_KEYS.all, "list"] as const,

  detail: (id: string) =>
    [...STUDENT_KEYS.all, id] as const,
};