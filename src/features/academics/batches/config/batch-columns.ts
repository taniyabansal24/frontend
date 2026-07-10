// features/batches/config/batch-columns.ts

export const batchColumns = [
  {
    key: "batchId",
    title: "BATCH ID",
    width: "140px", // Fixed width for IDs
  },
  {
    key: "name",
    title: "BATCH NAME",
    width: "1.5fr", // Flexible for batch names
  },
  {
    key: "students",
    title: "STUDENTS",
    width: "100px", // Fixed width for student count
  },
  {
    key: "teachers",
    title: "TEACHERS",
    width: "1.2fr", // Flexible for teacher names
  },
  {
    key: "startDate",
    title: "START DATE",
    width: "130px", // Fixed width for dates
  },
  {
    key: "endDate",
    title: "END DATE",
    width: "130px", // Fixed width for dates
  },
  {
    key: "actions",
    title: "ACTION",
    width: "70px", // Fixed width for action buttons
  },
];