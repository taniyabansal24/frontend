// src/app/dashboard/students/create/page.tsx

import { CreateStudentForm } from "@/features/students";

export default function CreateStudentPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Add New Student
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new student profile by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateStudentForm />
      </div>
    </div>
  );
}