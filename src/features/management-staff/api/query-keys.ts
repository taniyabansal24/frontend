// features/management-staff/api/query-keys.ts

export const MANAGEMENT_STAFF_KEYS =
  {
    all: [
      "management-staff",
    ] as const,

    list: () =>
      [
        ...MANAGEMENT_STAFF_KEYS.all,
        "list",
      ] as const,

    detail: (id: string) =>
      [
        ...MANAGEMENT_STAFF_KEYS.all,
        id,
      ] as const,
  };