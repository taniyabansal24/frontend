// src/features/academics/students/config/student-columns.ts

export const studentColumns = [
  {
    key: "enrollmentNumber",
    title: "Enrollment No",
    width: "140px", // Fixed width for short codes
  },
  {
    key: "name",
    title: "Name",
    width: "1.5fr", // Flexible, names vary in length
  },
  {
    key: "email",
    title: "Email",
    width: "2fr", // Emails can be long, give more space
  },
  {
    key: "phone",
    title: "Phone",
    width: "130px", // Fixed width for phone numbers
  },
  {
    key: "studentClass",
    title: "Class",
    width: "100px", // Fixed width for class names
  },
  {
    key: "batches",
    title: "Batches",
    width: "1.2fr", // Flexible for multiple batch names
  },
  {
    key: "actions",
    title: "Actions",
    width: "70px", // Fixed width for action buttons
  },
];