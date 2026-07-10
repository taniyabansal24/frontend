// src/app/dashboard/tests/questions/page.tsx

import CreateQuestionForm from "@/features/tests/questions/components/CreateQuestionForm";

export default function QuestionsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">Add Questions</h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Add questions to this question bank manually or import them from a CSV
        file.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateQuestionForm />
      </div>
    </div>
  );
}
