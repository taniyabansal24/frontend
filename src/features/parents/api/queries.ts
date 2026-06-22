// src/features/parents/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getParents } from "./service";

import type { Parent } from "../types";

export const useParentsQuery = () => {
  return useQuery<Parent[]>({
    queryKey: ["parents"],
    queryFn: getParents,
  });
};