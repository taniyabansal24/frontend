export const createParentForm = [
  {
    title: "Parent Information",

    fields: [
      {
        name: "name",
        label: "Parent Name",
        placeholder:
          "Enter parent name",
      },

      {
        name: "email",
        label: "Email",
        placeholder:
          "parent@example.com",
        type: "email",
      },

      {
        name: "phone",
        label: "Phone",
        placeholder:
          "+91 98765 43210",
      },

      {
        name: "password",
        label: "Password",
        placeholder:
          "Enter password",
        type: "password",
      },

      {
        name: "relationship",
        label: "Relationship",
        placeholder:
          "mother / father / guardian",
      },
    ],
  },
];