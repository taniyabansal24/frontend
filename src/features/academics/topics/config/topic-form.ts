// src/features/topics/config/topic-form.ts

export const topicForm = [
  {
    title: "Topic Information",

    fields: [
      {
        name: "name",
        label: "Topic Name",
        type: "text",
        placeholder: "Enter topic name",
        required: true,
      },

      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Enter topic description",
      },
    ],
  },
];