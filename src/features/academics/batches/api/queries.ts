// features/batches/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getBatches } from "./service";
import { BATCH_KEYS } from "./query-keys";

import {
  Batch,
  BatchTableData,
} from "../types";

export const useBatchesQuery = () =>
  useQuery({
    queryKey: BATCH_KEYS.list(),

    queryFn: getBatches,

    select: (
      batches: Batch[]
    ): BatchTableData[] =>
      batches.map((batch) => ({
        id: batch.id,

        batchId: `BAT${batch.id
          .slice(0, 6)
          .toUpperCase()}`,

        name: batch.name,

        description:
          batch.description,

        students:
          batch.students?.length ?? 0,

        teachers:
          batch.teachers?.length ?? 0,

        teacherIds:
          batch.teachers?.map(
            (teacher) => teacher.id
          ) ?? [],

        studentIds:
          batch.students?.map(
            (student) => student.id
          ) ?? [],

        startDate:
          batch.startDate.split(
            "T"
          )[0],

        endDate:
          batch.endDate.split(
            "T"
          )[0],
      })),
  });