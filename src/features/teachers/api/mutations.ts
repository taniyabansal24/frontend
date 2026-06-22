// features/teachers/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";

import { createTeacher, deleteTeacher, updateTeacher  } from "./service";
import { TEACHER_KEYS } from "./query-keys";

export const useCreateTeacherMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createTeacher,

      onSuccess: () => {
        toast.success(
          "Teacher created successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            TEACHER_KEYS.list(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data
                ?.message ??
              "Failed to create teacher"
            : "Something went wrong";

        toast.error(message);
      },
    });
  };
  
  export const useUpdateTeacherMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: updateTeacher,

      onSuccess: () => {
        toast.success(
          "Teacher updated successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            TEACHER_KEYS.list(),
        });
      },
    });
  };

export const useDeleteTeacherMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteTeacher,

      onSuccess: () => {
        toast.success(
          "Teacher deleted successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            TEACHER_KEYS.list(),
        });
      },
    });
  };