// src/app/dashboard/management-staff/all/page.tsx

import { AllManagementStaffTable } from "@/features/management-staff";

export default function AllManagementStaffPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Management Staff
      </h1>

      <p className="body-text mt-1 mb-6 text-[#667085] md:mb-8">
        View, search, and manage all management staff records from one place.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <AllManagementStaffTable />
      </div>
    </div>
  );
}