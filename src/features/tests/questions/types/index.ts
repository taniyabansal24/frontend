// src/features/tests/questions/types/index.ts

/* ---------------- Batch ---------------- */

export interface Batch {
  id: string;

  name: string;

  description?: string;

  startDate: string;

  endDate: string;
}

/* ---------------- Subject ---------------- */

export interface Subject {
  id: string;

  name: string;

  description?: string;
}

/* ---------------- Question Bank ---------------- */

export interface QuestionBank {
  id: string;

  name: string;

  description?: string;

  subjectIds: string[];

  batchIds?: string[];
}

/* ---------------- Questions ---------------- */

export type QuestionType =
  | "MCQ"
  | "SUBJECTIVE";

export interface QuestionOption {
  key: string;

  text: string;
}

export interface BaseQuestion {
  id?: string;

  questionText: string;

  marks: number;

  topic?: string;

  difficulty?: string;

  questionBankId?: string;

  subjectId?: string;
}

export interface MCQQuestion
  extends BaseQuestion {
  type: "MCQ";

  options: QuestionOption[];

  correctOption: string;
}

export interface SubjectiveQuestion
  extends BaseQuestion {
  type: "SUBJECTIVE";

  expectedAnswer: string;
}

export type Question =
  | MCQQuestion
  | SubjectiveQuestion;

/* ---------------- UI Only ---------------- */

export interface QuestionFormItem {
  id: string;

  isExpanded: boolean;

  isSaved: boolean;

  type: QuestionType;

  questionText: string;

  marks: number;

  topic: string;

  difficulty: string;

  correctOption: string;

  expectedAnswer: string;

  options: QuestionOption[];
}