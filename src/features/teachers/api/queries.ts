// features/teachers/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getTeachers } from "./service";
import { TEACHER_KEYS } from "./query-keys";
import { TeacherApiResponse } from "../types";

export const useTeachersQuery = () =>
  useQuery({
    queryKey: TEACHER_KEYS.list(),

    queryFn: getTeachers,

    select: (teachers: TeacherApiResponse[]) =>
      teachers.map((teacher) => ({
        id: teacher.id,

        teacherId: `TCH${teacher.id.slice(0, 6).toUpperCase()}`,

        name: teacher.user?.name,

        email: teacher.user?.email,

        phone: teacher.user?.phone,

        subject: teacher.subject,
      })),
  });
