// src/app/dashboard/academics/topics/create/page.tsx

import CreateTopicForm from "@/features/academics/topics/components/CreateTopicForm";

export default function TopicCreatePage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Create Topic
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new topic by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateTopicForm />
      </div>
    </div>
  );
}