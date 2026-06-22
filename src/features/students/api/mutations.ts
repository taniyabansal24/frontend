// features/students/api/mutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import { createStudent, updateStudent, deleteStudent } from "./service";
import { STUDENT_KEYS } from "./query-keys";

export const useCreateStudentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStudent,

    onSuccess: () => {
      toast.success("Student created successfully");

      queryClient.invalidateQueries({
        queryKey: STUDENT_KEYS.list(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ??
          "Failed to create student"
        : "Something went wrong";

      toast.error(message);
    },
  });
};

export const useUpdateStudentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStudent,

    onSuccess: () => {
      toast.success("Student updated successfully");

      queryClient.invalidateQueries({
        queryKey: STUDENT_KEYS.list(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ??
          "Failed to update student"
        : "Something went wrong";

      toast.error(message);
    },
  });
};

export const useDeleteStudentMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteStudent,

      onSuccess: () => {
        toast.success(
          "Student deleted successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            STUDENT_KEYS.list(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data
                ?.message ??
              "Failed to delete student"
            : "Something went wrong";

        toast.error(message);
      },
    });
  };