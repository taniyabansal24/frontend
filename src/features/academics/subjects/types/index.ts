// src/features/subjects/types/index.ts

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

export interface Batch {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
}
