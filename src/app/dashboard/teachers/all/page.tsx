// src/app/dashboard/teachers/all/page.tsx

import { AllTeachersTable } from "@/features/teachers";

export default function AllTeachersPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Teachers
      </h1>

      <p className="body-text mt-1 mb-6 text-[#667085] md:mb-8">
        View, search, and manage all teacher records from one place.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <AllTeachersTable />
      </div>
    </div>
  );
}