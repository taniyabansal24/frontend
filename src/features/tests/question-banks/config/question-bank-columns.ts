// src/features/tests/question-banks/config/question-bank-columns.ts

export const questionBankColumns = [
  {
    key: "name",
    title: "Question Bank",
    width: "1.5fr", // Flexible for question bank names
  },
  {
    key: "description",
    title: "Description",
    width: "2.5fr", // Give description good space
  },
  {
    key: "subjects",
    title: "Subjects",
    width: "1.2fr", // Flexible for multiple subject names
  },
  {
    key: "batches",
    title: "Batches",
    width: "1fr", // Flexible for multiple batch names
  },
  {
    key: "createdAt",
    title: "Created On",
    width: "130px", // Fixed width for dates
  },
  {
    key: "actions",
    title: "Action",
    width: "70px", // Fixed width for action buttons
  },
];