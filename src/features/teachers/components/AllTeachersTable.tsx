// src/features/teachers/components/AllTeachersTable.tsx

"use client";

import StatsCard from "@/components/shared/StatsCard";
import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";

import { useTeachersQuery } from "../api/queries";

import {
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} from "../api/mutations";

import { teacherColumns } from "../config/teacher-columns";

export default function AllTeachersTable() {
  const { data: teachers = [], isLoading, error } = useTeachersQuery();

  const { mutate: updateTeacher } = useUpdateTeacherMutation();

  const { mutate: deleteTeacher } = useDeleteTeacherMutation();

  const handleEdit = (id: string, values?: Record<string, string>) => {
    if (!values) return;

    updateTeacher({
      id,
      data: {
        name: values.name,
        phone: values.phone,
        subject: values.subject,
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteTeacher(id);
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading teachers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load teachers</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Teachers"
          value={String(teachers.length)}
          subtitle="Registered teachers"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Teachers"
          value={String(teachers.length)}
          subtitle="Currently active"
        />

        <StatsCard title="Avg Experience" value="-" subtitle="Coming soon" />

        <StatsCard title="Teacher Ratio" value="-" subtitle="Coming soon" />
      </div>

      {/* Toolbar */}
      <TableToolbar />

      {/* Table */}
      <div className="mt-5">
        <DataTable
          columns={teacherColumns}
          data={teachers}
          rowsPerPage={5}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editFields={[
            {
              key: "name",
              label: "Teacher Name",
            },
            {
              key: "phone",
              label: "Phone Number",
            },
            {
              key: "subject",
              label: "Subject",
            },
          ]}
        />
      </div>
    </>
  );
}
