import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

import { toast } from "sonner";

import {
  createManagementStaff,
  updateManagementStaff,
  deleteManagementStaff,
} from "./service";

import { MANAGEMENT_STAFF_KEYS } from "./query-keys";

export const useCreateManagementStaffMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createManagementStaff,

    onSuccess: () => {
      toast.success("Management staff created successfully");

      queryClient.invalidateQueries({
        queryKey: MANAGEMENT_STAFF_KEYS.list(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to create management staff")
        : "Something went wrong";

      toast.error(message);
    },
  });
};

export const useUpdateManagementStaffMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateManagementStaff,

    onSuccess: () => {
      toast.success("Management staff updated successfully");

      queryClient.invalidateQueries({
        queryKey: MANAGEMENT_STAFF_KEYS.list(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to update management staff")
        : "Something went wrong";

      toast.error(message);
    },
  });
};

export const useDeleteManagementStaffMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteManagementStaff,

    onSuccess: () => {
      toast.success("Management staff deleted successfully");

      queryClient.invalidateQueries({
        queryKey: MANAGEMENT_STAFF_KEYS.list(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? (error.response?.data?.message ?? "Failed to delete management staff")
        : "Something went wrong";

      toast.error(message);
    },
  });
};
