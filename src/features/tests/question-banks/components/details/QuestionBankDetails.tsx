// src/features/tests/question-banks/components/details/QuestionBankDetails.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DetailsHeader from "./header/DetailsHeader";
import PageActions from "./header/PageActions";
import QuestionBankSection from "./sections/QuestionBankSection";
import QuestionsSection from "./sections/QuestionsSection";

import type { Question, QuestionBank } from "../../types";

import {
  useQuestionBankQuery,
  useQuestionsByQuestionBankQuery,
} from "../../api/queries";

import {
  useUpdateQuestionBankMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionBankMutation,
} from "../../api/mutations";
import DeleteQuestionBankDialog from "./header/DeleteQuestionBankDialog";

interface QuestionBankDetailsProps {
  questionBankId: string;
}

export default function QuestionBankDetails({
  questionBankId,
}: QuestionBankDetailsProps) {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const [editedQuestionBank, setEditedQuestionBank] =
    useState<QuestionBank | null>(null);

  const [editedQuestions, setEditedQuestions] = useState<Question[]>([]);

  const { data: questionBankResponse, isLoading: isQuestionBankLoading } =
    useQuestionBankQuery(questionBankId);

  const { data: questionsResponse, isLoading: isQuestionsLoading } =
    useQuestionsByQuestionBankQuery(questionBankId);

  const { mutateAsync: updateQuestionBank } = useUpdateQuestionBankMutation();

  const { mutateAsync: updateQuestion } = useUpdateQuestionMutation();

  const { mutate: deleteQuestionBank, isPending: isDeleting } =
    useDeleteQuestionBankMutation();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const questionBank = questionBankResponse?.data;
  const questions = questionsResponse?.data ?? [];

  const handleEdit = () => {
    if (!questionBank) return;

    setEditedQuestionBank(structuredClone(questionBank));
    setEditedQuestions(structuredClone(questions));

    setIsEditing(true);
  };

  const handleCancel = () => {
    if (!questionBank) return;

    setEditedQuestionBank(structuredClone(questionBank));
    setEditedQuestions(structuredClone(questions));

    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!editedQuestionBank || !questionBank) return;

    try {
      /* ---------------- Update Question Bank ---------------- */

      const questionBankChanged =
        questionBank.name !== editedQuestionBank.name ||
        (questionBank.description ?? "") !==
          (editedQuestionBank.description ?? "");

      if (questionBankChanged) {
        await updateQuestionBank({
          id: editedQuestionBank.id,
          data: {
            name: editedQuestionBank.name,
            description: editedQuestionBank.description,
          },
        });
      }

      /* ---------------- Update Changed Questions ---------------- */

      const changedQuestions = editedQuestions.filter((editedQuestion) => {
        const originalQuestion = questions.find(
          (q) => q.id === editedQuestion.id,
        );

        if (!originalQuestion) return false;

        return (
          originalQuestion.questionText !== editedQuestion.questionText ||
          originalQuestion.marks !== editedQuestion.marks ||
          originalQuestion.topic !== editedQuestion.topic ||
          originalQuestion.difficulty !== editedQuestion.difficulty ||
          originalQuestion.optionA !== editedQuestion.optionA ||
          originalQuestion.optionB !== editedQuestion.optionB ||
          originalQuestion.optionC !== editedQuestion.optionC ||
          originalQuestion.optionD !== editedQuestion.optionD ||
          originalQuestion.correctOption !== editedQuestion.correctOption ||
          originalQuestion.expectedAnswer !== editedQuestion.expectedAnswer
        );
      });

      await Promise.all(
        changedQuestions.map((question) => {
          const data: Partial<Question> = {
            questionText: question.questionText,
            marks: question.marks,
            topic: question.topic,
            difficulty: question.difficulty,
          };

          // Only send these fields if they exist
          if (question.optionA != null) data.optionA = question.optionA;
          if (question.optionB != null) data.optionB = question.optionB;
          if (question.optionC != null) data.optionC = question.optionC;
          if (question.optionD != null) data.optionD = question.optionD;

          if (question.correctOption != null) {
            data.correctOption = question.correctOption;
          }

          if (question.expectedAnswer != null) {
            data.expectedAnswer = question.expectedAnswer;
          }

          console.log("Updating Question:", data);

          return updateQuestion({
            questionId: question.id,
            questionBankId: question.questionBankId,
            data,
          });
        }),
      );

      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    deleteQuestionBank(questionBankId, {
      onSuccess: () => {
        router.push("/dashboard/tests/question-banks/all");
      },
    });
  };

  if (isQuestionBankLoading || isQuestionsLoading) {
    return <div>Loading...</div>;
  }

  if (!questionBank) {
    return <div>Question bank not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <DetailsHeader />

        <PageActions
          isEditing={isEditing}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </div>

      <QuestionBankSection
        questionBank={isEditing ? editedQuestionBank! : questionBank}
        isEditing={isEditing}
        setQuestionBank={setEditedQuestionBank}
      />

      <QuestionsSection
        questions={isEditing ? editedQuestions : questions}
        isEditing={isEditing}
        setQuestions={setEditedQuestions}
      />

      <DeleteQuestionBankDialog
        open={showDeleteDialog}
        questionBankName={questionBank.name}
        isPending={isDeleting}
        onClose={() => setShowDeleteDialog(false)}
        onDelete={confirmDelete}
      />
    </div>
  );
}
