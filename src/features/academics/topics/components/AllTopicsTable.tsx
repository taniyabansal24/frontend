// src/features/topics/components/AllTopicsTable.tsx

"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import StatsCard from "@/components/shared/StatsCard";
import DataTable from "@/components/shared/table/DataTable";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import {
  useBatchesQuery,
  useSubjectsQuery,
  useTopicsQuery,
} from "../api/queries";

import {
  useUpdateTopicMutation,
  useDeleteTopicMutation,
} from "../api/mutations";

import { topicColumns } from "../config/topic-columns";

import { getSubjectById } from "../api/service";

import type { Batch, Subject, Topic } from "../types";

export default function AllTopicsTable() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);
  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);

  /* ---------------- Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();
  const batches = batchesResponse?.data ?? [];
  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,
    name: batch.name,
    description: batch.description ?? "",
  }));

  /* ---------------- Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsQuery(selectedBatchIds[0]);
  const subjects = subjectsResponse?.data ?? [];
  const subjectOptions = subjects.map((subject: Subject) => ({
    id: subject.id,
    name: subject.name,
    description: subject.description ?? "",
  }));

  /* ---------------- Topics ---------------- */

  const {
    data: topicsResponse,
    isLoading,
    error,
  } = useTopicsQuery(selectedSubjectIds[0]);

  const topics: Topic[] = topicsResponse?.data ?? [];


const { data: tableData = [] } = useQuery({
  queryKey: ["topics-with-subjects", topics],
  queryFn: async () => {
    return Promise.all(
      topics.map(async (topic) => {
        const response = await getSubjectById(topic.subjectId);

        return {
          ...topic,
          subjectName: response.data.name,
          batchName: response.data.batch?.name ?? "-",
        };
      }),
    );
  },
  enabled: topics.length > 0,
});

  /* ---------------- Mutations ---------------- */

  const { mutate: updateTopic } = useUpdateTopicMutation();
  const { mutate: deleteTopic } = useDeleteTopicMutation();

  const handleEdit = (id: string, values?: Record<string, string>) => {
    if (!values) return;
    updateTopic({
      id,
      data: {
        name: values.name,
        description: values.description,
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteTopic(id);
  };

  if (selectedSubjectIds.length > 0 && isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading topics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load topics</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Topics"
          value={String(tableData.length)}
          subtitle="Available topics"
          subtitleColor="text-[#6FA073]"
        />
        <StatsCard
          title="Selected Batch"
          value={selectedBatchIds.length ? "1" : "0"}
          subtitle="Current batch"
        />
        <StatsCard
          title="Selected Subject"
          value={selectedSubjectIds.length ? "1" : "0"}
          subtitle="Current subject"
        />
        <StatsCard
          title="Question Banks"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Batch */}
        <MultiSelectField
          label="Batch"
          options={batchOptions}
          value={selectedBatchIds}
          searchPlaceholder="Search batches..."
          emptyMessage="No batches found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];
            setSelectedBatchIds(selected);
            setSelectedSubjectIds([]);
          }}
        />

        {/* Subject */}
        <MultiSelectField
          label="Subject"
          options={subjectOptions}
          value={selectedSubjectIds}
          searchPlaceholder="Search subjects..."
          emptyMessage="No subjects found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];
            setSelectedSubjectIds(selected);
          }}
        />
      </div>

      <div className="mt-5">
        <DataTable
          columns={topicColumns}
          data={tableData}
          rowsPerPage={5}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editFields={[
            {
              key: "name",
              label: "Topic Name",
            },
            {
              key: "description",
              label: "Description",
            },
          ]}
        />
      </div>
    </>
  );
}