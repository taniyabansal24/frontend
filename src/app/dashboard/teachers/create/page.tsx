import DynamicForm from "@/components/dashboard/forms/DynamicForm";

const teacherForm = [
  {
    title: "Personal Information",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Enter teacher's full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        placeholder: "teacher@coaching.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        placeholder: "+91 98765 43210",
        required: true,
      },
      {
        name: "dob",
        label: "Date of Birth",
        type: "date",
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: ["Male", "Female", "Other"],
      },
    ],
  },
  {
    title: "Academic Qualifications",
    fields: [
      {
        name: "qualification",
        label: "Highest Qualification",
        required: true,
      },
      {
        name: "specialization",
        label: "Specialization",
        placeholder: "e.g., Physics, Chemistry",
        required: true,
      },
      {
        name: "college",
        label: "University/College",
        placeholder: "Enter university name",
      },
      {
        name: "passingYear",
        label: "Year of Passing",
        placeholder: "e.g., 2015",
      },
    ],
  },
  {
    title: "Professional Details",
    fields: [
      {
        name: "subjects",
        label: "Teaching Subject(s)",
        required: true,
        type: "multiselect",
      },
      {
        name: "experience",
        label: "Years of Experience",
        placeholder: "Enter years of experience",
        required: true,
      },
      {
        name: "joiningDate",
        label: "Joining Date",
        required: true,
        type: "date",
      },
      {
        name: "employeeType",
        label: "Employee Type",
        type: "select",
        options: ["Full Time", "Part Time", "Contract"],
      },
    ],
  },
  {
    title: "Salary Information",
    fields: [
      {
        name: "salary",
        label: "Monthly Salary (₹)",
        placeholder: "Enter monthly salary",
        required: true,
      },
      {
        name: "bankAccount",
        label: "Bank Account Number",
        placeholder: "Enter account number",
      },
      {
        name: "ifsc",
        label: "IFSC Code",
        placeholder: "Enter IFSC code",
      },
      {
        name: "pan",
        label: "PAN Number",
        placeholder: "Enter PAN number",
      },
    ],
  },
];

export default function CreateTeacher() {
  return (
    <div className="p-6">
      <h1 className="heading">Add New Teacher</h1>
      <p className="body-text mt-1 mb-8">Fill in teacher details</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-8">
        <DynamicForm sections={teacherForm} />

        <div className="flex justify-end gap-4">
          <button className="h-11 px-6 border rounded-xl body-text">
            Cancel
          </button>

          <button className="h-11 px-6 bg-[#6FA073] text-white rounded-xl">
            Save Teacher
          </button>
        </div>
      </div>
    </div>
  );
}