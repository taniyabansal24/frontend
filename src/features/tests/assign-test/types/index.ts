// src/features/tests/create-test/types/index.ts

export interface Subject {
  id: string;
  name: string;
  description?: string;
}

export type Batch = {
  id: string;
  name: string;
  description?: string;

  students?: {
    id: string;
    userId: string;
    enrollmentNumber: string;
    studentClass: string;
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      role: string;
      status: string;
    };
  }[];

  teachers?: {
    id: string;
    subject: string;
    user: {
      id: string;
      name: string;
    };
  }[];

  subjects?: {
    id: string;
    name: string;
  }[];
};

export type QuestionBank = {
  id: string;
  name: string;
  description?: string;

  totalQuestions: number;
  totalMarks: number;

  subjects: {
    id: string;
    name: string;
    batchId: string;
    batch: {
      id: string;
      name: string;
    };
  }[];
};

export type EvaluationMode = "MCQ" | "SUBJECTIVE" | "MIXED";

export interface Test {
  id: string;

  title: string;
  description?: string;

  durationMinutes: number;
  evaluationMode: EvaluationMode;

  batchIds: string[];
  subjectId: string;
  questionBankId: string;

  // Optional fields (if your backend supports them)
  syllabus?: string;
  instructions?: string;

  startDate?: string;
  startTime?: string;
  maxAttempts?: number;

  createdAt?: string;
  updatedAt?: string;
}
