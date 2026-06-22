// src/app/dashboard/students/create/page.tsx
import { CreateStudentForm } from "@/features/students";

export default function CreateStudentPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">Add New Student</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">Fill in student details</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <CreateStudentForm />
      </div>
    </div>
  );
}
