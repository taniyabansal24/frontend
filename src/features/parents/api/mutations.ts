// src/features/parents/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  createParent,
  updateParent,
  deleteParent,
} from "./service";

export const useCreateParentMutation =
  () => {
    return useMutation({
      mutationFn: createParent,
    });
  };

export const useUpdateParentMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: updateParent,

      onSuccess: () => {
        toast.success(
          "Parent updated successfully"
        );

        queryClient.invalidateQueries({
          queryKey: ["parents"],
        });
      },
    });
  };

export const useDeleteParentMutation =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: deleteParent,

      onSuccess: () => {
        toast.success(
          "Parent deleted successfully"
        );

        queryClient.invalidateQueries({
          queryKey: ["parents"],
        });
      },
    });
  };