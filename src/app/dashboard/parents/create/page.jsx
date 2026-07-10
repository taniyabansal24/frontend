// src/app/dashboard/parents/create/page.tsx

import CreateParentForm from "@/features/parents/components/CreateParentForm";

export default function CreateParentPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Add New Parent
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new parent profile by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateParentForm />
      </div>
    </div>
  );
}