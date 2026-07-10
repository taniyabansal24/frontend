// src/features/academics/batches/components/AllBatchesTable.tsx

"use client";

import { useState } from "react";

import StatsCard from "@/components/shared/StatsCard";
import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";

import EditBatchDialog from "./EditBatchDialog";

import { useTeachersQuery } from "@/features/teachers/api/queries";
import { useStudentsQuery } from "@/features/students/api/queries";

import { useBatchesQuery } from "../api/queries";

import {
  useUpdateBatchMutation,
  useDeleteBatchMutation,
} from "../api/mutations";

import { batchColumns } from "../config/batch-columns";

import { BatchTableData } from "../types/index";

export default function AllBatchesTable() {
  const { data: batches = [], isLoading, error } = useBatchesQuery();

  const { data: teachers = [] } = useTeachersQuery();

  const { data: students = [] } = useStudentsQuery();

  const { mutate: updateBatch } = useUpdateBatchMutation();

  const { mutate: deleteBatch } = useDeleteBatchMutation();

  const [openEdit, setOpenEdit] = useState(false);

  const [selectedBatch, setSelectedBatch] = useState<BatchTableData | null>(
    null,
  );

  const teacherOptions = teachers.map((teacher) => ({
    id: teacher.id,

    name: teacher.name,

    description: teacher.subject ?? teacher.email ?? "",

    duration: teacher.phone ?? "",
  }));

  const studentOptions = students.map((student) => ({
    id: student.id,

    name: student.name,

    description: student.studentClass ?? "",

    duration: student.enrollmentNumber ?? "",
  }));

  const handleEdit = (id: string) => {
    const batch = batches.find((item) => item.id === id);

    if (!batch) return;

    setSelectedBatch(batch);
    setOpenEdit(true);
  };

  const handleDelete = (id: string) => {
    deleteBatch(id);
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading batches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load batches</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Batches"
          value={String(batches.length)}
          subtitle="Registered batches"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Batches"
          value={String(batches.length)}
          subtitle="Currently active"
        />

        <StatsCard title="Avg Students" value="-" subtitle="Coming soon" />

        <StatsCard
          title="Classes / Week"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      <TableToolbar />

      <div className="mt-5">
        <DataTable
          columns={batchColumns}
          data={batches}
          rowsPerPage={5}
          customEdit
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <EditBatchDialog
        key={selectedBatch?.id}
        open={openEdit}
        batch={selectedBatch}
        teacherOptions={teacherOptions}
        studentOptions={studentOptions}
        onClose={() => {
          setOpenEdit(false);
          setSelectedBatch(null);
        }}
        onSave={(data) => {
          if (!selectedBatch) return;

          updateBatch({
            id: selectedBatch.id,

            data: {
              name: data.name,
              description: data.description,
              teacherIds: data.teacherIds,
              studentIds: data.studentIds,
            },
          });

          setOpenEdit(false);
          setSelectedBatch(null);
        }}
      />
    </>
  );
}
