// features/batches/types/index.ts

export interface CreateBatchPayload {
  name: string;
  description: string;
  startDate: string;
  endDate: string;

  teacherIds: string[];
  studentIds: string[];
}

export interface UpdateBatchPayload {
  name?: string;
  description?: string;
  teacherIds?: string[];
  studentIds?: string[];
}

export interface BatchTeacher {
  id: string;
}

export interface BatchStudent {
  id: string;
}

export interface Batch {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;

  students?: BatchStudent[];
  teachers?: BatchTeacher[];
}

export interface BatchTableData {
  id: string;
  batchId: string;

  name: string;
  description: string;

  students: number;
  teachers: number;

  teacherIds: string[];
  studentIds: string[];

  startDate: string;
  endDate: string;
}