// src/app/dashboard/tests/create-test/page.tsx

"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import AssignTestForm from "@/features/tests/assign-test/components/AssignTestForm";
import AssignHistory from "@/features/tests/assign-test/components/AssignHistory";
import TestTabs from "@/features/tests/assign-test/components/TestTabs";

export default function AssignTestPage() {
  const [tab, setTab] = useState<"create" | "history">("create");

  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">Assign Test</h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Assign tests to batches or individual students with scheduling.
      </p>

      <TestTabs value={tab} onChange={setTab} />

      <div className="mt-6 overflow-hidden rounded-3xl border border-[#EAECF0] bg-white p-6">
        <AnimatePresence mode="wait">
          {tab === "create" ? (
            <motion.div
              key="create"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 35 }}
              transition={{
                duration: 0.28,
                ease: "easeInOut",
              }}
            >
              <AssignTestForm />
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{
                duration: 0.28,
                ease: "easeInOut",
              }}
            >
              <AssignHistory />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}