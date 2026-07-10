// src/features/tests/create-test/config/createTest-form.ts

export const createTestForm = [
  {
    title: "Test Information",

    fields: [
      {
        name: "title",

        label: "Test Title",

        type: "text",

        placeholder: "Enter test title",
      },

      {
        name: "description",

        label: "Description",

        type: "textarea",

        placeholder: "Enter test description",
      },

      {
        name: "durationMinutes",

        label: "Duration (Minutes)",

        type: "number",

        placeholder: "Enter duration",
      },

      {
        name: "evaluationMode",

        label: "Evaluation Mode",

        type: "select",

        placeholder: "Select evaluation mode",

        options: ["MCQ", "SUBJECTIVE", "MIXED"],
      },
    ],
  },
];
