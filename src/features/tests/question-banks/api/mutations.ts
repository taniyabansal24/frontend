// src/features/tests/question-banks/api/mutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

import {
  createQuestionBank,
  updateQuestionBank,
  deleteQuestionBank,
  updateQuestion,
  deleteQuestion,
} from "./service";

import { TEST_KEYS } from "./query-keys";

/* -------------------------------------------------------------------------- */
/*                         Create Question Bank                               */
/* -------------------------------------------------------------------------- */

export const useCreateQuestionBankMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createQuestionBank,

    onSuccess: () => {
      toast.success("Question Bank created successfully");

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBanks(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to create question bank";

      toast.error(message);
    },
  });
};

/* -------------------------------------------------------------------------- */
/*                         Update Question Bank                               */
/* -------------------------------------------------------------------------- */

export const useUpdateQuestionBankMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateQuestionBank,

    onSuccess: (_, variables) => {
      toast.success("Question Bank updated successfully");

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBanks(),
      });

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBank(variables.id),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to update question bank";

      toast.error(message);
    },
  });
};

/* -------------------------------------------------------------------------- */
/*                         Delete Question Bank                               */
/* -------------------------------------------------------------------------- */

export const useDeleteQuestionBankMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuestionBank,

    onSuccess: () => {
      toast.success("Question Bank deleted successfully");

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBanks(),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to delete question bank";

      toast.error(message);
    },
  });
};

/* -------------------------------------------------------------------------- */
/*                            Update Question                                 */
/* -------------------------------------------------------------------------- */

export const useUpdateQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateQuestion,

    onSuccess: (_, variables) => {
      toast.success("Question updated successfully");

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionsByQuestionBank(variables.questionBankId),
      });

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBank(variables.questionBankId),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to update question";

      toast.error(message);
    },
  });
};

/* -------------------------------------------------------------------------- */
/*                            Delete Question                                 */
/* -------------------------------------------------------------------------- */

export const useDeleteQuestionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuestion,

    onSuccess: (_, variables) => {
      toast.success("Question deleted successfully");

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionsByQuestionBank(variables.questionBankId),
      });

      queryClient.invalidateQueries({
        queryKey: TEST_KEYS.questionBank(variables.questionBankId),
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to delete question";

      toast.error(message);
    },
  });
};
