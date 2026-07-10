//src/features/tests/question-banks/types/index.ts

/* -------------------------------------------------------------------------- */
/*                                Question Bank                               */
/* -------------------------------------------------------------------------- */

export interface QuestionBankSubject {
  id: string;
  name: string;
  batchId: string;
  batch: {
    id: string;
    name: string;
  };
}

export interface QuestionBank {
  id: string;
  tenantId: string;
  name: string;
  description?: string;
  totalQuestions: number;
  totalMarks: number;
  subjects: QuestionBankSubject[];
  createdAt: string;
  updatedAt: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Question                                  */
/* -------------------------------------------------------------------------- */

export type QuestionType = "MCQ" | "SUBJECTIVE";

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface Question {
  id: string;
  questionBankId: string;
  subjectId: string;
  type: QuestionType;
  questionText: string;
  marks: number;
  difficulty: Difficulty;
  topic?: string;

  /* ---------------- MCQ ---------------- */

  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;

  correctOption?: "A" | "B" | "C" | "D";

  /* ---------------- Subjective ---------------- */

  expectedAnswer?: string;
  createdAt: string;
  updatedAt: string;
}

/* -------------------------------------------------------------------------- */
/*                                   Batch                                    */
/* -------------------------------------------------------------------------- */

export interface Batch {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

/* -------------------------------------------------------------------------- */
/*                                  Subject                                   */
/* -------------------------------------------------------------------------- */

export interface Subject {
  id: string;
  name: string;
  description?: string;
}
