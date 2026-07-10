// src/app/dashboard/academics/subjects/all/page.tsx

import AllSubjectsTable from "@/features/academics/subjects/components/AllSubjectsTable";

export default function SubjectPage() {
  return (
    <>
      <div className="p-4 md:p-6">
        <h1 className="heading">All Subjects</h1>

        <p className="body-text mt-1 mb-6 md:mb-8">
          View, edit, and manage all available subjects.
        </p>

        <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
          <AllSubjectsTable />
        </div>
      </div>
    </>
  );
}