"use client";

import { useState } from "react";

import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";
import StatsCard from "@/components/shared/StatsCard";

import EditParentDialog from "./EditParentDialog";

import { useParentsQuery } from "../api/queries";

import { useStudentsQuery } from "@/features/students/api/queries";

import {
  useUpdateParentMutation,
  useDeleteParentMutation,
} from "../api/mutations";

import { parentColumns } from "../config/parent-columns";

export default function AllParentsTable() {
  const { data: parents = [], isLoading, error } = useParentsQuery();

  const { data: students = [] } = useStudentsQuery();

  const { mutate: updateParent } = useUpdateParentMutation();

  const { mutate: deleteParent } = useDeleteParentMutation();

  type Parent = (typeof parents)[number];

  const [openEdit, setOpenEdit] = useState(false);

  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

  const tableData = parents.map((parent) => ({
    id: parent.id,

    name: parent.user?.name ?? "-",

    email: parent.user?.email ?? "-",

    phone: parent.user?.phone ?? "-",

    relationship: parent.relationship,

    studentEnrollmentNumber: parent.student?.enrollmentNumber ?? "N/A",

    studentClass: parent.student?.studentClass ?? "N/A",

    studentName: parent.student?.user?.name ?? "N/A",
  }));

  const studentOptions = students.map((student) => ({
    id: student.id,

    name: student.name,

    enrollmentNumber: student.enrollmentNumber,
  }));

  const handleEdit = (id: string) => {
    const parent = parents.find((item) => item.id === id);

    if (!parent) return;

    setSelectedParent(parent);

    setOpenEdit(true);
  };

  const handleDelete = (id: string) => {
    deleteParent(id);
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text"> Loading parents...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load parents</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Total Parents"
          value={String(parents.length)}
          subtitle="Registered parents"
        />

        <StatsCard
          title="Linked Parents"
          value={String(parents.length)}
          subtitle="Assigned to students"
        />

        <StatsCard
          title="Active"
          value={String(parents.length)}
          subtitle="Currently active"
        />
      </div>

      <TableToolbar />

      <div className="mt-5">
        <DataTable
          columns={parentColumns}
          data={tableData}
          rowsPerPage={5}
          customEdit
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <EditParentDialog
        open={openEdit}
        parent={selectedParent}
        studentOptions={studentOptions}
        onClose={() => {
          setOpenEdit(false);
          setSelectedParent(null);
        }}
        onSave={(data) => {
          if (!selectedParent) return;

          updateParent({
            id: selectedParent.id,
            data,
          });

          setOpenEdit(false);
          setSelectedParent(null);
        }}
      />
    </>
  );
}
