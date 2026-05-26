import StatsCard from "@/components/dashboard/cards/StatsCard";
import TableToolbar from "@/components/dashboard/table/TableToolbar";
import DataTable from "@/components/dashboard/table/DataTable";

const columns = [
  { key: "id", title: "Teacher ID", width: "120px" },
  { key: "name", title: "Name", width: "170px" },
  { key: "email", title: "Email", width: "260px" },
  { key: "phone", title: "Phone", width: "170px" },
  { key: "subject", title: "Subject", width: "150px" },
  { key: "experience", title: "Experience", width: "120px" },
  { key: "batches", title: "Batches", width: "120px" },
  {
    key: "actions",
    title: "Action",
    width: "80px",
  },
];

const teachers = [
  {
    id: "TCH001",
    name: "Dr. Rajesh Verma",
    email: "rajesh.verma@coaching.com",
    phone: "+91 9876511111",
    subject: "Physics",
    experience: "15 years",
    batches: "4",
  },
  {
    id: "TCH002",
    name: "Prof. Meena Iyer",
    email: "meena.iyer@coaching.com",
    phone: "+91 9876522222",
    subject: "Chemistry",
    experience: "12 years",
    batches: "3",
  },
  {
    id: "TCH003",
    name: "Mr. Suresh Kumar",
    email: "suresh.kumar@coaching.com",
    phone: "+91 9876533333",
    subject: "Mathematics",
    experience: "10 years",
    batches: "5",
  },
  {
    id: "TCH004",
    name: "Dr. Priya Nair",
    email: "priya.nair@coaching.com",
    phone: "+91 9876544444",
    subject: "Biology",
    experience: "8 years",
    batches: "3",
  },
  {
    id: "TCH005",
    name: "Prof. Anil Sharma",
    email: "anil.sharma@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH006",
    name: "Prof. Anita Desai",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH007",
    name: "Prof. Ananya Sen",
    email: "ananya.sen@coaching.com",
    phone: "+91 9876555555",
    subject: "Mathematics",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH008",
    name: "Prof. Mukesh Gupta",
    email: "mukesh.gupta@coaching.com",
    phone: "+91 9876555555",
    subject: "Mathematics",
    experience: "19 years",
    batches: "2",
  },
  {
    id: "TCH009",
    name: "Prof. Anita Desai",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH0010",
    name: "Prof. Anita Desai",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH0011",
    name: "Prof. Anita Desai",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
  {
    id: "TCH0012",
    name: "Prof. Anita Desai",
    email: "anita.desai@coaching.com",
    phone: "+91 9876555555",
    subject: "English",
    experience: "6 years",
    batches: "2",
  },
];

export default function AllTeachersPage() {
  return (
    <div className="p-4 md:p-6">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="heading text-2xl md:text-3xl font-semibold text-[#101828]">
            All Teachers
          </h1>
          <p className="body-text mt-1 text-sm md:text-base text-[#667085]">
            Manage teacher records and their assignments
          </p>
        </div>

        <button className="btn bg-[#6FA073] text-white rounded-xl border-none hover:bg-[#5d8a61] transition-all duration-200 px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap">
          + Add Teacher
        </button>
      </div>

      {/* Stats Cards Grid - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
        <StatsCard
          title="Total Teachers"
          value="45"
          subtitle="+3 this month"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Active Teachers"
          value="42"
          subtitle="93.3% availability"
        />

        <StatsCard
          title="Avg Experience"
          value="9.8 yrs"
          subtitle="Highly qualified"
        />

        <StatsCard
          title="Student-Teacher Ratio"
          value="19.8:1"
          subtitle="Optimal range"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#EAECF0] rounded-[20px] p-4 md:p-6 overflow-hidden">
        <TableToolbar />
        <div className="mt-5">
          <DataTable columns={columns} data={teachers} rowsPerPage={5} />
        </div>
      </div>
    </div>
  );
}
