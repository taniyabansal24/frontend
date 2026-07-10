// src/features/tests/create-test/api/mutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";

import { createTest, updateTest, deleteTest } from "./service";

import { CREATE_TEST_KEYS } from "./query-keys";

/* ---------------- Create Test ---------------- */

export const useCreateTestMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTest,

    onSuccess: () => {
      toast.success("Test created successfully");

      queryClient.invalidateQueries({
        queryKey: CREATE_TEST_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to create test";

      toast.error(message);
    },
  });
};

/* ---------------- Update Test ---------------- */

export const useUpdateTestMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTest,

    onSuccess: () => {
      toast.success("Test updated successfully");

      queryClient.invalidateQueries({
        queryKey: CREATE_TEST_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to update test";

      toast.error(message);
    },
  });
};

/* ---------------- Delete Test ---------------- */

export const useDeleteTestMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTest,

    onSuccess: () => {
      toast.success("Test deleted successfully");

      queryClient.invalidateQueries({
        queryKey: CREATE_TEST_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to delete test";

      toast.error(message);
    },
  });
};
