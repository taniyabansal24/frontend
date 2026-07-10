// src/features/topics/types/index.ts

export interface Batch {
  id: string;

  name: string;

  description?: string;

  startDate: string;

  endDate: string;
}

export interface Subject {
  id: string;
  batchId: string;
  name: string;
  description?: string;

  batch?: {
    id: string;
    name: string;
  };
}

export interface Topic {
  id: string;

  subjectId: string;

  name: string;

  description?: string;

  createdAt?: string;

  updatedAt?: string;
}