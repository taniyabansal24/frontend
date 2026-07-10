"use client";

import { motion } from "framer-motion";

type Props = {
  value: "create" | "history";
  onChange: (value: "create" | "history") => void;
};

export default function TestTabs({ value, onChange }: Props) {
  return (
    <div className="border-b border-[#EAECF0] pl-8">
      <div className="flex gap-8">
        {[
          {
            id: "create",
            label: "Assign New Test",
          },
          {
            id: "history",
            label: "Assign Test History",
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              onChange(tab.id as "create" | "history")
            }
            className={`relative pb-4 text-[14px] font-medium transition-colors ${
              value === tab.id
                ? "text-[#6FA073]"
                : "text-[#667085] hover:text-[#344054]"
            }`}
          >
            {tab.label}

            {value === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#6FA073]"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 35,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}