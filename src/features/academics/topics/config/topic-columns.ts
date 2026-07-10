// src/features/topics/config/topic-columns.ts

export const topicColumns = [
  {
    key: "name",
    title: "Topic Name",
    width: "1.5fr", // Flexible for topic names
  },
  {
    key: "subjectName",
    title: "Subject Name",
    width: "1.2fr", // Flexible for subject names
  },
  {
    key: "batchName",
    title: "Batch Name",
    width: "1fr", // Flexible for batch names
  },
  {
    key: "description",
    title: "Description",
    width: "3fr", // Give description the most space
  },
  {
    key: "actions",
    title: "Actions",
    width: "70px", // Fixed width for action buttons
  },
];