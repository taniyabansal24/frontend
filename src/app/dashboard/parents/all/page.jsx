//src/app/dashboard/parents/all/page.jsx

import AllParentsTable from "@/features/parents/components/AllParentsTable";

export default function AllParentsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">All Parents</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">Manage parent records</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllParentsTable />
      </div>
    </div>
  );
}
