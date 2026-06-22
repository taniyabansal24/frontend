export const managementStaffForm = [
  {
    title: "Personal Information",

    fields: [
      {
        name: "name",
        label: "Staff Name",
        placeholder:
          "Enter full name",

        required: true,
      },

      {
        name: "password",
        label: "Password",

        placeholder:
          "Enter password",

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

        placeholder:
          "staff@academy.com",

        required: true,

        type: "email",
      },

      {
        name: "phone",

        label: "Phone Number",

        placeholder:
          "+91 98765 43210",

        required: true,

        type: "tel",
      },
    ],
  },

  {
    title: "Department Information",

    fields: [
      {
        name: "department",

        label: "Department",

        placeholder:
          "Administration",

        required: true,
      },
    ],
  },
];