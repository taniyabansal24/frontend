// features/teachers/config/teacher-form.ts

export const teacherForm = [
  {
    title: "Teacher Information",

    fields: [
      {
        name: "name",
        label: "Teacher Name",
        placeholder:
          "Enter teacher name",
        required: true,
      },

      {
        name: "email",
        label: "Email Address",
        placeholder:
          "teacher@academy.com",
        required: true,
        type: "email",
      },

      {
        name: "phone",
        label: "Phone Number",
        placeholder:
          "+91 9876543210",
        required: true,
        type: "tel",
      },

      {
        name: "subject",
        label: "Subject",
        placeholder:
          "Mathematics",
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
];