// src/features/students/config/student-form.ts
export const studentForm = [
  {
    title: "Personal Information",
    fields: [
      {
        name: "name",
        label: "Student Name",
        placeholder: "Enter student's full name",
        required: true,
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter student password",
        required: true,
        type: "password",
      },
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
        type: "email",
      },
      {
        name: "phone",
        label: "Phone Number",
        placeholder: "+91 98765 43210",
        required: true,
        type: "tel",
      },
    ],
  },

  {
    title: "Academic Information",
    fields: [
      {
        name: "studentClass",
        label: "Class",
        placeholder: "e.g. 10th Grade",
        required: true,
      },
    ],
  },
];