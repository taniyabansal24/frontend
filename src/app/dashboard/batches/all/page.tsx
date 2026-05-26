import StatsCard from "@/components/dashboard/cards/StatsCard";
import TableToolbar from "@/components/dashboard/table/TableToolbar";
import DataTable from "@/components/dashboard/table/DataTable";

const columns = [
  { key: "id", title: "Batch ID", width: "130px" },
  { key: "batchname", title: "Batch Name", width: "170px" },
  { key: "course", title: "Course", width: "220px" },
  { key: "students", title: "Students", width: "150px" },
  { key: "primaryTeacher", title: "Primary Teacher", width: "220px" },
  { key: "schedule", title: "Schedule", width: "220px" },
  { key: "status", title: "Status", width: "120px" },
  {
    key: "actions",
    title: "Action",
    width: "80px",
  },
];

const batches = [
  {
    id: "BAT001",
    batchname: "JEE 2026 A",
    course: "JEE Main & Advanced",
    students: "45",
    primaryTeacher: "Prof. Rajesh Verma",
    schedule: "Mon - Fri, 10:00 AM",
    status: "Active",
  },
  {
    id: "BAT002",
    batchname: "NEET 2026 B",
    course: "NEET 2024",
    students: "38",
    primaryTeacher: "Prof. Meena Iyer",
    schedule: "Fri - Wed, 6:00 PM",
    status: "Active",
  },
  {
    id: "BAT003",
    batchname: "JEE 2026 C",
    course: "JEE Main & Advanced",
    students: "42",
    primaryTeacher: "Prof. Suresh Kumar",
    schedule: "Mon - Fri, 8:00 AM",
    status: "Active",
  },
  {
    id: "BAT004",
    batchname: "Shresth",
    course: "Gate 2026",
    students: "39",
    primaryTeacher: "Prof. Anita Desai",
    schedule: "Sat - Sun, 8:00 PM",
    status: "Active",
  },
];

export default function AllBatchesPage() {
  return (
    <div className="p-4 md:p-6">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="heading text-2xl md:text-3xl font-semibold text-[#101828]">
            All Batches
          </h1>
          <p className="body-text mt-1 text-sm md:text-base text-[#667085]">
            Manage batch records and their details
          </p>
        </div>

        <button className="btn bg-[#6FA073] text-white rounded-xl border-none hover:bg-[#5d8a61] transition-all duration-200 px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap">
          + Create Batch
        </button>
      </div>

      {/* Stats Cards Grid - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
         <StatsCard
          title="Total Batches"
          value="24"
          subtitle="+2 this month"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Batches"
          value="22"
          subtitle="91.7% active"
        />

        <StatsCard
          title="Avg Student/Batch"
          value="37.8"
          subtitle="Slightly above optimal"
        />

        <StatsCard
          title="Class/Week"
          value="18"
          subtitle="Consistent schedule"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#EAECF0] rounded-[20px] p-4 md:p-6 overflow-hidden">
        <TableToolbar />
        <div className="mt-5">
          <DataTable columns={columns} data={batches} rowsPerPage={5} />
        </div>
      </div>
    </div>
  );
}
