// src/app/dashboard/management-staff/create/page.tsx

import { CreateManagementStaffForm } from "@/features/management-staff";

export default function CreateManagementStaffPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Add Management Staff
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new management staff profile by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateManagementStaffForm />
      </div>
    </div>
  );
}