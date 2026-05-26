import DynamicForm from "@/components/dashboard/forms/DynamicForm";

const studentForm = [
  {
    title: "Personal Information",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Enter student's full name",
        required: true,
      },
      // {
      //   name: "dateOfBirth",
      //   label: "Date of Birth",
      //   placeholder: "Enter date of birth",
      //   required: true,
      //   type: "date",
      // },
      // {
      //   name: "gender",
      //   label: "Gender",
      //   type: "select",
      //   options: ["Male", "Female", "Other"],
      // },
      // {
      //   name: "BloodGroup",
      //   label: "Blood Group",
      //   type: "select",
      //   options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      // },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      {
        name: "email",
        label: "Email Address",
        placeholder: "student@coaching.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        placeholder: "+91 98765 43210",
        required: true,
      },
      // {
      //   name: "address",
      //   label: "Address",
      //   placeholder: "Enter full address",
      // },
      // {
      //   name: "city",
      //   label: "City",
      //   placeholder: "Enter city",
      // },
      // {
      //   name: "pincode",
      //   label: "Pin Code",
      //   placeholder: "Enter pin code",
      // },
    ],
  },
  // {
  //   title: "Parent/Guardian Information",
  //   fields: [
  //     {
  //       name: "fathersName",
  //       label: "Father's Name",
  //       placeholder: "Enter father's full name",
  //       required: true,
  //     },
  //     {
  //       name: "fathersPhone",
  //       label: "Father's Phone Number",
  //       placeholder: "+91 98765 43210",
  //     },
  //     {
  //       name: "mothersName",
  //       label: "Mother's Name",
  //       placeholder: "Enter mother's full name",
  //       required: true,
  //     },
  //     {
  //       name: "mothersPhone",
  //       label: "Mother's Phone Number",
  //       placeholder: "+91 98765 43210",
  //     },
  //     {
  //       name: "fathersOccupation",
  //       label: "Father's Occupation",
  //       placeholder: "Enter father's occupation",
  //     },
  //   ],
  // },
  {
    title: "Academic Information",
    fields: [
      {
        name: "currentEducation",
        label: "Current Education",
        placeholder: "Enter current education details",
        required: true,
      },
      {
        name: "batch",
        label: "Batch",
        required: true,
        type: "text",
      },
      // {
      //   name: "addmissionDate",
      //   label: "Admission Date",
      //   placeholder: "Enter admission date",
      //   required: true,
      //   type: "date",
      // },
      // {
      //   name: "previousPercentage",
      //   label: "Previous Percentage",
      //   type: "number",
      //   placeholder: "Enter percentage obtained in previous education",
      //   required: true,
      // },
    ],
  },
  // {
  //   title: "Fees and Payment Information",
  //   fields: [
  //     {
  //       name: "feesStructure",
  //       label: "Fees Structure",
  //       placeholder: "Enter fees structure details",
  //       required: true,
  //     },
  //     {
  //       name: "discount",
  //       label: "Discount",
  //       placeholder: "Enter discount amount or percentage",
  //     },
  //   ],
  // },
];

export default function CreateStudent() {
  return (
    <div className="p-6">
      <h1 className="heading">Add New Student</h1>
      <p className="body-text mt-1 mb-8">Fill in student details</p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-8">
        <DynamicForm sections={studentForm} />

        <div className="flex justify-end gap-4">
          <button className="h-11 px-6 border rounded-xl body-text">
            Cancel
          </button>

          <button className="h-11 px-6 bg-[#6FA073] text-white rounded-xl">
            Save Student
          </button>
        </div>
      </div>
    </div>
  );
}
