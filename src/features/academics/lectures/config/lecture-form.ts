// src/features/academics/lectures/config/lecture-form.ts

export const lectureForm = [
  {
    title: "Lecture Information",

    fields: [
      {
        name: "title",
        label: "Lecture Title",
        type: "text",
        placeholder:
          "Enter lecture title",
        required: true,
      },

      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder:
          "Enter lecture description",
      },

      {
        name: "contentUrl",
        label: "Content URL",
        type: "url",
        placeholder:
          "https://youtube.com/...",
        required: true,
      },

      {
        name: "logoUrl",
        label: "Logo URL",
        type: "url",
        placeholder:
          "https://example.com/logo.png",
      },

      {
        name: "date",
        label: "Lecture Date",
        type: "date",
        required: true,
      },
    ],
  },
];