// src/app/dashboard/management-staff/all/page.tsx

import { AllManagementStaffTable } from "@/features/management-staff";

export default function AllManagementStaffPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">All Management Staff</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">
        Manage staff records and departments
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllManagementStaffTable />
      </div>
    </div>
  );
}
