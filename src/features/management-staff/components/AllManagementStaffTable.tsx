// features/management-staff/components/AllManagementStaffTable.tsx

"use client";

import StatsCard from "@/components/shared/StatsCard";
import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";

import {
  useManagementStaffQuery,
} from "../api/queries";

import {
  useUpdateManagementStaffMutation,
  useDeleteManagementStaffMutation,
} from "../api/mutations";

import {
  managementStaffColumns,
} from "../config/management-staff-columns";

export default function AllManagementStaffTable() {
  const {
    data: staff = [],
    isLoading,
    error,
  } =
    useManagementStaffQuery();

  const {
    mutate: updateStaff,
  } =
    useUpdateManagementStaffMutation();

  const {
    mutate: deleteStaff,
  } =
    useDeleteManagementStaffMutation();

  const handleEdit = (
    id: string,
    values: Record<string, string>
  ) => {
    updateStaff({
      id,
      data: {
        name: values.name,
        phone: values.phone,
        department:
          values.department,
      },
    });
  };

  const handleDelete = (
    id: string
  ) => {
    deleteStaff(id);
  };

if (isLoading) {
  return (
    <div className="py-8 text-center">
      <p className="body-text">Loading staff...</p>
    </div>
  );
}

if (error) {
  return (
    <div className="py-8 text-center">
      <p className="body-text text-red-500">
        Failed to load staff
      </p>
    </div>
  );
}


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Staff"
          value={String(staff.length)}
          subtitle="Registered staff"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Staff"
          value={String(staff.length)}
          subtitle="Currently active"
        />

        <StatsCard
          title="Departments"
          value="-"
          subtitle="Coming soon"
        />

        <StatsCard
          title="Operations"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      <TableToolbar />

      <div className="mt-5">
        <DataTable
          columns={
            managementStaffColumns
          }
          data={staff}
          rowsPerPage={5}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editFields={[
            {
              key: "name",
              label: "Staff Name",
            },
            {
              key: "phone",
              label: "Phone Number",
            },
            {
              key: "department",
              label: "Department",
            },
          ]}
        />
      </div>
    </>
  );
}