// features/management-staff/config/management-staff-columns.ts

export const managementStaffColumns = [
  {
    key: "staffId",
    title: "Staff ID",
    width: "140px", // Fixed width for IDs
  },
  {
    key: "name",
    title: "Name",
    width: "1.5fr", // Flexible for staff names
  },
  {
    key: "email",
    title: "Email",
    width: "2fr", // Emails need good space
  },
  {
    key: "phone",
    title: "Phone",
    width: "130px", // Fixed width for phone numbers
  },
  {
    key: "department",
    title: "Department",
    width: "1.2fr", // Flexible for department names
  },
  {
    key: "actions",
    title: "Action",
    width: "70px", // Fixed width for action buttons
  },
];