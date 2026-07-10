// src/app/dashboard/parents/all/page.jsx

import AllParentsTable from "@/features/parents/components/AllParentsTable";

export default function AllParentsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Parents
      </h1>

      <p className="body-text mt-1 mb-6 text-[#667085] md:mb-8">
        View, search, and manage all parent records from one place.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <AllParentsTable />
      </div>
    </div>
  );
}