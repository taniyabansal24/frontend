"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div>
        <label className="block text-[#0A0A0A] text-[16px] font-medium mb-2">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full h-[52px] bg-[#F3F3F5] border border-black/10 rounded-[12px] px-4 pr-12 text-[16px] text-[#0A0A0A] appearance-none focus:outline-none focus:ring-1 focus:ring-[#030213] focus:bg-white transition-all",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#717182"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p className="text-red-600 text-[13px] mt-1.5" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";