// src/features/students/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getStudents } from "./service";
import { STUDENT_KEYS } from "./query-keys";

export const useStudentsQuery = () =>
  useQuery({
    queryKey: STUDENT_KEYS.list(),
    queryFn: getStudents,

    select: (students) =>
      students.map((student) => ({
        id: student.id,

        enrollmentNumber: student.enrollmentNumber,

        name: student.user?.name ?? "-",

        email: student.user?.email ?? "-",

        phone: student.user?.phone ?? "-",

        studentClass: student.studentClass,

        batchIds: student.batches?.map((batch) => batch.id) ?? [],

        batches: student.batches?.map((batch) => batch.name).join(", ") ?? "-",
      })),
  });
