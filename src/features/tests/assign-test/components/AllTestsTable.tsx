// src/features/tests/create-test/components/AllTestsTable.tsx

"use client";

import { useState } from "react";

import StatsCard from "@/components/shared/StatsCard";
import DataTable from "@/components/shared/table/DataTable";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import {
  useBatchesQuery,
  useSubjectsQuery,
  useTestsQuery,
} from "../api/queries";

import { useUpdateTestMutation, useDeleteTestMutation } from "../api/mutations";

import { createTestColumns } from "../config/createTest-columns";

import type { Batch, Subject, Test } from "../types";

export default function AllTestsTable() {
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

  /* ---------------- Tests ---------------- */

  const {
    data: testsResponse,
    isLoading,
    error,
  } = useTestsQuery(selectedBatchIds[0], selectedSubjectIds[0]);

  const tests: Test[] = testsResponse?.data ?? [];

  /* ---------------- Mutations ---------------- */

  const { mutate: updateTest } = useUpdateTestMutation();

  const { mutate: deleteTest } = useDeleteTestMutation();

  const handleEdit = (id: string, values?: Record<string, string>) => {
    if (!values) return;

    updateTest({
      id,

      data: {
        title: values.title,
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteTest(id);
  };

  if (selectedSubjectIds.length > 0 && isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading tests...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load tests</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Tests"
          value={String(tests.length)}
          subtitle="Available tests"
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

      {!selectedSubjectIds.length ? (
        <div className="bg-white rounded-[20px] border border-[#EAECF0] py-20 text-center">
          <p className="body-text text-[#667085]">
            Please select a batch and subject to view tests.
          </p>
        </div>
      ) : (
        <div className="mt-5">
          <DataTable
            columns={createTestColumns}
            data={tests}
            rowsPerPage={5}
            onEdit={handleEdit}
            onDelete={handleDelete}
            editFields={[
              {
                key: "title",
                label: "Test Title",
              },
            ]}
          />
        </div>
      )}
    </>
  );
}
