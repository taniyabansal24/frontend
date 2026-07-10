//  src/features/students/components/AllStudentsTable.tsx
"use client";

import { useState } from "react";

import StatsCard from "@/components/shared/StatsCard";
import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";

import EditStudentDialog from "./EditStudentDialog";

import { useStudentsQuery } from "../api/queries";
import { useParentsQuery } from "@/features/parents/api/queries";

import { useBatchesQuery } from "@/features/academics/batches/api/queries";

import {
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from "../api/mutations";

import { studentColumns } from "../config/student-columns";
import StudentDetailsDialog from "./StudentDetailsDialog";

export default function AllStudentsTable() {
  const { data: students = [], isLoading, error } = useStudentsQuery();

  type Student = NonNullable<
    ReturnType<typeof useStudentsQuery>["data"]
  >[number];

  type SelectedStudent = Student & {
    parent?: {
      name?: string | null;
      email?: string | null;
      phone?: string | null;
      relationship?: string | null;
    } | null;
  };

  const { data: parents = [] } = useParentsQuery();

  console.log("PARENTS", parents);

  const { data: batches = [] } = useBatchesQuery();

  const { mutate: updateStudent } = useUpdateStudentMutation();

  const { mutate: deleteStudent } = useDeleteStudentMutation();

  const [openEdit, setOpenEdit] = useState(false);

  const [openView, setOpenView] = useState(false);

  const [selectedStudent, setSelectedStudent] =
    useState<SelectedStudent | null>(null);

  const formatDate = (date?: string) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const truncate = (text?: string, limit = 40) => {
    if (!text) return "";

    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const batchOptions = batches.map((batch) => ({
    id: batch.id,

    name: batch.name,

    description: truncate(batch.description),

    duration: `${formatDate(batch.startDate)} → ${formatDate(batch.endDate)}`,
  }));

  const handleEdit = (id: string) => {
    const student = students.find((item) => item.id === id);

    if (!student) return;

    setSelectedStudent(student);

    setOpenEdit(true);
  };

  const handleDelete = (id: string) => {
    deleteStudent(id);
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load students</p>
      </div>
    );
  }

  const handleView = (id: string) => {
    const student = students.find((item) => item.id === id);

    if (!student) return;

    const parent = parents.find((item) => item.studentId === student.id);

    const studentWithParent = {
      ...student,

      parent: parent
        ? {
            name: parent.user?.name,
            email: parent.user?.email,
            phone: parent.user?.phone,
            relationship: parent.relationship,
          }
        : null,
    };

    console.log("STUDENT WITH PARENT", studentWithParent);

    setSelectedStudent(studentWithParent as typeof student);

    setOpenView(true);
  };

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Students"
          value={String(students.length)}
          subtitle="Registered students"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Students"
          value={String(students.length)}
          subtitle="Currently active"
        />

        <StatsCard title="Avg Attendance" value="-" subtitle="Coming soon" />

        <StatsCard
          title="Fees Collected"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      <TableToolbar />

      <div className="mt-5">
        <DataTable
          columns={studentColumns}
          data={students}
          customEdit
          rowsPerPage={5}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentDetailsDialog
        open={openView}
        student={selectedStudent}
        onClose={() => {
          setOpenView(false);
          setSelectedStudent(null);
        }}
      />

      <EditStudentDialog
        key={selectedStudent?.id}
        open={openEdit}
        student={selectedStudent}
        batchOptions={batchOptions}
        onClose={() => {
          setOpenEdit(false);
          setSelectedStudent(null);
        }}
        onSave={(data) => {
          if (!selectedStudent) return;

          updateStudent({
            id: selectedStudent.id,
            data: {
              name: data.name,
              phone: data.phone,
              studentClass: data.studentClass,
              batchIds: data.batchIds,
            },
          });

          setOpenEdit(false);
          setSelectedStudent(null);
        }}
      />
    </>
  );
}
