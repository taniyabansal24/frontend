// src/app/dashboard/students/all/page.tsx

import { AllStudentsTable } from "@/features/students";

export default function AllStudentsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">All Students</h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Manage student records and their academic progress
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllStudentsTable />
      </div>
    </div>
  );
}