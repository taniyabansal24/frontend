// src/app/dashboard/parents/create/page.tsx

import CreateParentForm  from "@/features/parents/components/CreateParentForm";

export default function CreateParentPage() {
  return (
    <div className="p-6">
      <h1 className="heading">Add New Parent</h1>

      <p className="body-text mt-1 mb-8">Fill in parent details</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-8">
        <CreateParentForm />
      </div>
    </div>
  );
}
