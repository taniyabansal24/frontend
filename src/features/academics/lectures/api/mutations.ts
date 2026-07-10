// src/features/academics/lectures/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";

import {
  createLecture,
  updateLecture,
  deleteLecture,
} from "./service";

import { LECTURE_KEYS } from "./query-keys";

/* ---------------- Create Lecture ---------------- */

export const useCreateLectureMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLecture,

    onSuccess: () => {
      toast.success(
        "Lecture created successfully",
      );

      queryClient.invalidateQueries({
        queryKey: LECTURE_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(
        error,
      )
        ? error.response?.data?.message
        : "Failed to create lecture";

      toast.error(message);
    },
  });
};

/* ---------------- Update Lecture ---------------- */

export const useUpdateLectureMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateLecture,

    onSuccess: () => {
      toast.success(
        "Lecture updated successfully",
      );

      queryClient.invalidateQueries({
        queryKey: LECTURE_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(
        error,
      )
        ? error.response?.data?.message
        : "Failed to update lecture";

      toast.error(message);
    },
  });
};

/* ---------------- Delete Lecture ---------------- */

export const useDeleteLectureMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLecture,

    onSuccess: () => {
      toast.success(
        "Lecture deleted successfully",
      );

      queryClient.invalidateQueries({
        queryKey: LECTURE_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(
        error,
      )
        ? error.response?.data?.message
        : "Failed to delete lecture";

      toast.error(message);
    },
  });
};