// features/students/types/index.ts

export interface CreateStudentPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  studentClass: string;
  batchIds: string[];
}

export interface StudentBatch {
  id: string;
  name: string;
}

export interface Student {
  id: string;
  enrollmentNumber: string;
  studentClass: string;

  batches: {
    id: string;
    name: string;
  }[];

  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    status: string;
  };
}