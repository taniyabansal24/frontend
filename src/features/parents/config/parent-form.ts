// src/features/parents/config/parent-form.ts
export const parentForm = [
  {
    title: "Parent Information",
    fields: [
      {
        name: "parentName",
        label: "Parent Name",
        placeholder: "Enter parent name",
      },
      {
        name: "parentEmail",
        label: "Parent Email",
        placeholder: "parent@example.com",
        type: "email",
      },
      {
        name: "parentPhone",
        label: "Parent Phone",
        placeholder: "+91 98765 43210",
      },
      {
        name: "parentPassword",
        label: "Parent Password",
        placeholder: "Enter parent password",
        type: "password",
      },
      {
        name: "relationship",
        label: "Relationship",
        placeholder: "mother / father / guardian",
      },
    ],
  },
];