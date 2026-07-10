// src/app/dashboard/academics/topics/all/page.tsx

import AllTopicsTable from "@/features/academics/topics/components/AllTopicsTable";

export default function TopicPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Topics
      </h1>

      <p className="body-text mt-1 mb-6 text-[#667085] md:mb-8">
        View, search, and manage all topics from one place.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <AllTopicsTable />
      </div>
    </div>
  );
}