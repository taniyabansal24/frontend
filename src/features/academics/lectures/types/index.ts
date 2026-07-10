// src/features/academics/lectures/types/index.ts

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
}

export interface Topic {
  id: string;

  subjectId: string;

  name: string;

  description?: string;
}

export interface Lecture {
  id: string;

  topicId: string;

  title: string;

  description?: string;

  contentUrl: string;

  logoUrl?: string;

  date: string;

  createdAt?: string;

  updatedAt?: string;
}