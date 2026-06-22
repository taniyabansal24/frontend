// features/teachers/types/index.ts

export interface CreateTeacherPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  subject: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export interface UpdateTeacherPayload {
  name?: string;
  phone?: string;
  subject?: string;
}

export interface TeacherApiResponse {
  id: string;
  subject: string;

  user: {
    name: string;
    email: string;
    phone: string;
  };
}