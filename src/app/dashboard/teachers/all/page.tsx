// src/app/dashboard/teachers/all/page.tsx

import { AllTeachersTable } from "@/features/teachers";

export default function AllTeachersPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">All Teachers</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">
        Manage teacher records and their assignments
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllTeachersTable />
      </div>
    </div>
  );
}
