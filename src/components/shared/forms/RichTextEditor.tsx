// components/shared/forms/RichTextEditor.tsx
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Link as LinkIcon,
  Undo,
  Redo,
  Pilcrow,
  Eraser,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
};

const ToolbarButton = ({
  onClick,
  isActive,
  children,
  disabled = false,
}: {
  onClick: () => void;
  isActive?: boolean;
  children: ReactNode;
  disabled?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`h-9 w-9 rounded-md transition-all flex items-center justify-center ${
      isActive ? "bg-[#6FA073] text-white" : "text-[#344054] hover:bg-[#F2F4F7]"
    } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
  >
    {children}
  </button>
);

export default function RichTextEditor({
  value,
  onChange,
  label,
  placeholder = "Enter content...",
  error,
}: RichTextEditorProps) {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        protocols: ["http", "https", "mailto", "tel"],
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: "min-h-[180px] w-full bg-white p-4 text-[#101828] outline-none [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-2 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-2 [&_ol]:space-y-1 [&_li]:my-1 [&_li]:pl-1 [&_p]:my-2 [&_p]:leading-relaxed [&_strong]:font-bold [&_em]:italic [&_u]:underline [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800 [&_ul_ul]:list-circle [&_ul_ul]:ml-6 [&_ol_ol]:list-lower-alpha [&_ol_ol]:ml-6 [&_ul_ol]:list-decimal [&_ul_ol]:ml-6 [&_ol_ul]:list-disc [&_ol_ul]:ml-6"
      },
    },
  });

  // Sync with React Hook Form reset
  useEffect(() => {
    if (!editor) return;

    const currentContent = editor.getHTML();
    const newContent = value || "";

    if (currentContent !== newContent) {
      editor.commands.setContent(newContent);
    }
  }, [editor, value]);

  const setLink = () => {
    if (linkUrl) {
      const url =
        linkUrl.startsWith("http") ||
        linkUrl.startsWith("mailto:") ||
        linkUrl.startsWith("tel:")
          ? linkUrl
          : `https://${linkUrl}`;
      editor?.chain().focus().setLink({ href: url }).run();
      setLinkUrl("");
      setIsLinkModalOpen(false);
    }
  };

  const unsetLink = () => {
    editor?.chain().focus().unsetLink().run();
    setIsLinkModalOpen(false);
  };

  const clearFormatting = () => {
    editor?.chain().focus().unsetAllMarks().clearNodes().run();
  };

  if (!editor) return null;

  return (
    <div className="space-y-2">
      {label && (
        <label className="card-title block text-[#344054]">{label}</label>
      )}

      <div
        className={`overflow-hidden rounded-xl border bg-white focus-within:border-[#6FA073] focus-within:ring-2 focus-within:ring-[#6FA073]/10 ${
          error ? "border-red-500" : "border-[#D0D5DD]"
        }`}
      >
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 border-b border-[#D0D5DD] p-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
          >
            <Bold className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
          >
            <Italic className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToolbarButton>

          <div className="mx-1 h-6 w-px bg-[#D0D5DD]" />

          <ToolbarButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            isActive={editor.isActive("paragraph")}
          >
            <Pilcrow className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
          >
            <List className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
          >
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>

          <div className="mx-1 h-6 w-px bg-[#D0D5DD]" />

          <ToolbarButton
            onClick={() => {
              if (editor.isActive("link")) {
                unsetLink();
              } else {
                setIsLinkModalOpen(true);
              }
            }}
            isActive={editor.isActive("link")}
          >
            <LinkIcon className="h-4 w-4" />
          </ToolbarButton>

          <div className="mx-1 h-6 w-px bg-[#D0D5DD]" />

          <ToolbarButton onClick={clearFormatting}>
            <Eraser className="h-4 w-4" />
          </ToolbarButton>

          <div className="mx-1 h-6 w-px bg-[#D0D5DD]" />

          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Undo className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Redo className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Editor Content */}
        <div className="[&_.ProseMirror]:min-h-[180px] [&_.ProseMirror]:p-4 [&_.ProseMirror]:outline-none">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-semibold text-[#101828]">
              Insert Link
            </h3>
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="body-text w-full rounded-xl border border-[#D0D5DD] bg-white p-3 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") setLink();
                if (e.key === "Escape") setIsLinkModalOpen(false);
              }}
            />
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={setLink}
                className="flex-1 rounded-xl bg-[#6FA073] px-4 py-2 text-white transition-all hover:bg-[#5d8a61]"
              >
                Save Link
              </button>
              <button
                type="button"
                onClick={() => setIsLinkModalOpen(false)}
                className="flex-1 rounded-xl border border-[#D0D5DD] px-4 py-2 text-[#344054] transition-all hover:bg-[#F2F4F7]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {error && <p className="caption mt-1 text-red-500">{error}</p>}
    </div>
  );
}