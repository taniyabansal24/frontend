//  src/features/academics/subjects/api/mutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { createSubject, updateSubject, deleteSubject } from "./service";
import { SUBJECT_KEYS } from "./query-keys";

/* ---------------- Create Subject ---------------- */

export const useCreateSubjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSubject,
    onSuccess: () => {
      toast.success("Subject created successfully");
      queryClient.invalidateQueries({ queryKey: SUBJECT_KEYS.subjects() });
    },
    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to create subject";
      toast.error(message);
    },
  });
};

/* ---------------- Update Subject ---------------- */

export const useUpdateSubjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSubject,
    onSuccess: () => {
      toast.success("Subject updated successfully");
      queryClient.invalidateQueries({ queryKey: SUBJECT_KEYS.all });
    },
    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to update subject";
      toast.error(message);
    },
  });
};

/* ---------------- Delete Subject ---------------- */

export const useDeleteSubjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSubject,
    onSuccess: () => {
      toast.success("Subject deleted successfully");
      queryClient.invalidateQueries({ queryKey: SUBJECT_KEYS.subjects() });
    },
    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to delete subject";
      toast.error(message);
    },
  });
};
