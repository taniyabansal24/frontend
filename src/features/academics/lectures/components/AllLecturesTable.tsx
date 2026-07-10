// src/features/academics/lectures/components/AllLecturesTable.tsx

"use client";

import { useState } from "react";

import StatsCard from "@/components/shared/StatsCard";
import DataTable from "@/components/shared/table/DataTable";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import {
  useBatchesQuery,
  useSubjectsQuery,
  useTopicsQuery,
  useLecturesQuery,
} from "../api/queries";

import {
  useUpdateLectureMutation,
  useDeleteLectureMutation,
} from "../api/mutations";

import { lectureColumns } from "../config/lecture-columns";

import type { Batch, Subject, Topic, Lecture } from "../types";

export default function AllLecturesTable() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);

  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);

  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([]);

  /* ---------------- Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,

    name: batch.name,

    description: batch.description ?? "",
  }));

  /* ---------------- Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsQuery(selectedBatchIds[0]);

  const subjects = subjectsResponse?.data ?? [];

  const subjectOptions = subjects.map((subject: Subject) => ({
    id: subject.id,

    name: subject.name,

    description: subject.description ?? "",
  }));

  /* ---------------- Topics ---------------- */

  const { data: topicsResponse } = useTopicsQuery(selectedSubjectIds[0]);

  const topics = topicsResponse?.data ?? [];

  const topicOptions = topics.map((topic: Topic) => ({
    id: topic.id,

    name: topic.name,

    description: topic.description ?? "",
  }));

  /* ---------------- Lectures ---------------- */

  const {
    data: lecturesResponse,
    isLoading,
    error,
  } = useLecturesQuery(selectedTopicIds[0]);

  const lectures: Lecture[] = (lecturesResponse?.data ?? []).map(
    (lecture: Lecture) => ({
      ...lecture,

      date: new Date(lecture.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    }),
  );

  /* ---------------- Mutations ---------------- */

  const { mutate: updateLecture } = useUpdateLectureMutation();

  const { mutate: deleteLecture } = useDeleteLectureMutation();

  const handleEdit = (id: string, values?: Record<string, string>) => {
    if (!values) return;

    updateLecture({
      id,
      data: {
        title: values.title,
        description: values.description,
        contentUrl: values.contentUrl,
        logoUrl: values.logoUrl,
        date: values.date,
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteLecture(id);
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <p className="body-text">Loading lectures...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load lectures</p>
      </div>
    );
  }

  return (
    <>
      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Lectures"
          value={String(lectures.length)}
          subtitle="Available lectures"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Selected Batch"
          value={selectedBatchIds.length ? "1" : "0"}
          subtitle="Current batch"
        />

        <StatsCard
          title="Selected Subject"
          value={selectedSubjectIds.length ? "1" : "0"}
          subtitle="Current subject"
        />

        <StatsCard
          title="Selected Topic"
          value={selectedTopicIds.length ? "1" : "0"}
          subtitle="Current topic"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      {/* Filters */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Batch */}

        <MultiSelectField
          label="Batch"
          options={batchOptions}
          value={selectedBatchIds}
          searchPlaceholder="Search batches..."
          emptyMessage="No batches found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];

            setSelectedBatchIds(selected);

            setSelectedSubjectIds([]);

            setSelectedTopicIds([]);
          }}
        />

        {/* Subject */}

        <MultiSelectField
          label="Subject"
          options={subjectOptions}
          value={selectedSubjectIds}
          searchPlaceholder="Search subjects..."
          emptyMessage="No subjects found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];

            setSelectedSubjectIds(selected);

            setSelectedTopicIds([]);
          }}
        />

        {/* Topic */}

        <MultiSelectField
          label="Topic"
          options={topicOptions}
          value={selectedTopicIds}
          searchPlaceholder="Search topics..."
          emptyMessage="No topics found"
          onChange={(value) => {
            const selected = value.length > 0 ? [value[value.length - 1]] : [];

            setSelectedTopicIds(selected);
          }}
        />
      </div>

      <div className="mt-5">
        <DataTable
          columns={lectureColumns}
          data={lectures}
          rowsPerPage={5}
          onEdit={handleEdit}
          onDelete={handleDelete}
          editFields={[
            {
              key: "title",
              label: "Lecture Title",
            },
            {
              key: "description",
              label: "Description",
            },
            {
              key: "contentUrl",
              label: "Content URL",
            },
            {
              key: "logoUrl",
              label: "Logo URL",
            },
            {
              key: "date",
              label: "Lecture Date",
            },
          ]}
        />
      </div>
    </>
  );
}
