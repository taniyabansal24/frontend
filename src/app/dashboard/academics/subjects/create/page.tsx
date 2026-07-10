// src/app/dashboard/academics/subjects/create/page.tsx

import CreateSubjectForm from "@/features/academics/subjects/components/CreateSubjectForm";

export default function SubjectCreatePage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Create Subject
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new subject by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateSubjectForm />
      </div>
    </div>
  );
}