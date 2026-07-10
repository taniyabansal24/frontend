// src/app/dashboard/academics/lectures/create/page.tsx

import CreateLectureForm from "@/features/academics/lectures/components/CreateLectureForm";

export default function LectureCreatePage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Create Lecture
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new lecture by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateLectureForm />
      </div>
    </div>
  );
}