// src/features/tests/questions/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";

import {
  uploadQuestionsCsv,
  createQuestions,
} from "./service";

import { TEST_KEYS } from "./query-keys";

/* ---------------- CSV Upload ---------------- */

export const useUploadQuestionsCsvMutation =
  () => {
    return useMutation({
      mutationFn: uploadQuestionsCsv,

      onSuccess: (response) => {
        toast.success(response.message);
      },

      onError: (error) => {
        const message = axios.isAxiosError(error)
          ? error.response?.data?.message
          : "Upload failed";

        toast.error(message);
      },
    });
  };

/* ---------------- Create Question ---------------- */

export const useCreateQuestionMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        createQuestions,

      onSuccess: () => {
        toast.success(
          "All questions created successfully",
        );

        queryClient.invalidateQueries({
          queryKey:
            TEST_KEYS.questions(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data?.message
            : "Failed to create questions";

        toast.error(message);
      },
    });
  };