// src/app/dashboard/management-staff/create/page.tsx

import { CreateManagementStaffForm } from "@/features/management-staff";

export default function CreateManagementStaffPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Add Management Staff
      </h1>

     <p className="body-text mt-1 mb-6 md:mb-8">
        Fill in management staff details
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <CreateManagementStaffForm />
      </div>
    </div>
  );
}