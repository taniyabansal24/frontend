// features/batches/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import axios from "axios";

import { toast } from "sonner";

import {
  createBatch,
  updateBatch,
  deleteBatch,
} from "./service";

import { BATCH_KEYS } from "./query-keys";

export const useCreateBatchMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createBatch,

      onSuccess: () => {
        toast.success(
          "Batch created successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            BATCH_KEYS.list(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data
                ?.message ??
              "Failed to create batch"
            : "Something went wrong";

        toast.error(message);
      },
    });
  };

export const useUpdateBatchMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: updateBatch,

      onSuccess: () => {
        toast.success(
          "Batch updated successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            BATCH_KEYS.list(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data
                ?.message ??
              "Failed to update batch"
            : "Something went wrong";

        toast.error(message);
      },
    });
  };

export const useDeleteBatchMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteBatch,

      onSuccess: () => {
        toast.success(
          "Batch deleted successfully"
        );

        queryClient.invalidateQueries({
          queryKey:
            BATCH_KEYS.list(),
        });
      },

      onError: (error) => {
        const message =
          axios.isAxiosError(error)
            ? error.response?.data
                ?.message ??
              "Failed to delete batch"
            : "Something went wrong";

        toast.error(message);
      },
    });
  };