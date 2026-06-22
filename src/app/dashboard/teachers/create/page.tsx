// app/dashboard/teachers/create/page.tsx

import { CreateTeacherForm } from "@/features/teachers";

export default function CreateTeacherPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">Add New Teacher</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">Fill in teacher details</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <CreateTeacherForm />
      </div>
    </div>
  );
}
