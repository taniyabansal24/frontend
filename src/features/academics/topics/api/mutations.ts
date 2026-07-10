// src/features/topics/api/mutations.ts

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";

import {
  createTopic,
  updateTopic,
  deleteTopic,
} from "./service";

import { TOPIC_KEYS } from "./query-keys";

/* ---------------- Create Topic ---------------- */

export const useCreateTopicMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTopic,

    onSuccess: () => {
      toast.success("Topic created successfully");

      queryClient.invalidateQueries({
        queryKey: TOPIC_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to create topic";

      toast.error(message);
    },
  });
};

/* ---------------- Update Topic ---------------- */

export const useUpdateTopicMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTopic,

    onSuccess: () => {
      toast.success("Topic updated successfully");

      queryClient.invalidateQueries({
        queryKey: TOPIC_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to update topic";

      toast.error(message);
    },
  });
};

/* ---------------- Delete Topic ---------------- */

export const useDeleteTopicMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTopic,

    onSuccess: () => {
      toast.success("Topic deleted successfully");

      queryClient.invalidateQueries({
        queryKey: TOPIC_KEYS.all,
      });
    },

    onError: (error) => {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message
        : "Failed to delete topic";

      toast.error(message);
    },
  });
};