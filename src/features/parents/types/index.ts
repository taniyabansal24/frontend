// src/features/parents/types/index.ts

export interface Parent {
  id: string;

  relationship: string;

  studentId: string;

  user?: {
    id: string;

    name: string;

    email: string;

    phone: string;
  };

  student?: {
    id: string;
    enrollmentNumber?: string;
    studentClass?: string;

    user?: {
      name?: string;
    };
  };
}
