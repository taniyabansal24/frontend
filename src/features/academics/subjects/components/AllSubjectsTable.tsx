// src/features/subjects/components/AllSubjectsTable.tsx

"use client";

import { useState } from "react";

import StatsCard from "@/components/shared/StatsCard";
import DataTable from "@/components/shared/table/DataTable";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import { useBatchesQuery, useSubjectsQuery } from "../api/queries";

import {
  useUpdateSubjectMutation,
  useDeleteSubjectMutation,
} from "../api/mutations";

import { subjectColumns } from "../config/subject-columns";

import type { Batch, Subject } from "../types";

export default function AllSubjectsTable() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);

  /* ---------------- Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,

    name: batch.name,

    description: batch.description ?? "",
  }));

  /* ---------------- Subjects ---------------- */

  const {
    data: subjectsResponse,
    isLoading,
    error,
  } = useSubjectsQuery(selectedBatchIds[0]);

  const subjects: Subject[] = subjectsResponse?.data ?? [];

  const tableData = subjects.map((subject) => ({
    ...subject,
    batchName: subject.batch?.name ?? "-",
  }));

  /* ---------------- Mutations ---------------- */

  const { mutate: updateSubject } = useUpdateSubjectMutation();

  const { mutate: deleteSubject } = useDeleteSubjectMutation();

  const handleEdit = (id: string, values?: Record<string, string>) => {
    if (!values) return;

    updateSubject({
      id,
      name: values.name,
      description: values.description,
    });
  };

  const handleDelete = (id: string) => {
    deleteSubject(id);
  };

  if (selectedBatchIds.length > 0 && isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading subjects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load subjects</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Subjects"
          value={String(subjects.length)}
          subtitle="Available subjects"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Selected Batch"
          value={selectedBatchIds.length ? "1" : "0"}
          subtitle="Current filter"
        />

        <StatsCard title="Teachers" value="-" subtitle="Coming soon" />

        <StatsCard
          title="Question Banks"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Batch Filter */}

      <div className="mb-6">
        <MultiSelectField
          label="Batch"
          options={batchOptions}
          value={selectedBatchIds}
          searchPlaceholder="Search batches..."
          emptyMessage="No batches found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];

            setSelectedBatchIds(selected);
          }}
        />
      </div>

      {/* <TableToolbar /> */}

      <div className="mt-5">
        <DataTable
          columns={subjectColumns}
          data={tableData}
          rowsPerPage={5}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editFields={[
            {
              key: "name",
              label: "Subject Name",
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
