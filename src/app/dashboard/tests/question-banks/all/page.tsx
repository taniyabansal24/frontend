// src/app/dashboard/tests/question-banks/all/page.tsx

import AllQuestionBanks from "@/features/tests/question-banks/components/AllQuestionBanks";

export default function QuestionBanksPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Question Banks
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Manage all question banks, track their details, and organize questions efficiently.
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllQuestionBanks/>
      </div>
    </div>
  );
}