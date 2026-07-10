// app/dashboard/teachers/create/page.tsx

import { CreateTeacherForm } from "@/features/teachers";

export default function CreateTeacherPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Add New Teacher
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new teacher profile by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateTeacherForm />
      </div>
    </div>
  );
}