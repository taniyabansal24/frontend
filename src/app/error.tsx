"use client";

import Button from "@/components/shared/Button";
// src/app/error.tsx
// Global error boundary — catches runtime errors in the React tree

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to your error tracking service (e.g., Sentry) here
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="heading mb-2">Something went wrong</h1>

        <p className="body-text mb-8">
          An unexpected error occurred. Our team has been notified.
        </p>

        <div className="flex justify-center mt-2">
          <Button onClick={reset} className="min-w-[180px]">
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
