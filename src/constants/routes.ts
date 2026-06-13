export const ROUTES = {
  // Public
  home: "/",

  // Auth
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",

  // Dashboard
  dashboard: "/dashboard",

  // Students
  students: {
    all: "/dashboard/students/all",
    create: "/dashboard/students/create",
  },

  // Teachers
  teachers: {
    all: "/dashboard/teachers/all",
    create: "/dashboard/teachers/create",
    assignSubjects: "/dashboard/teachers/assign-subjects",
    assignBatches: "/dashboard/teachers/assign-batches",
  },

  // Batches
  batches: {
    all: "/dashboard/batches/all",
    create: "/dashboard/batches/create",
  },
} as const;
