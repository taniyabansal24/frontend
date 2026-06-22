"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div>
        <label className="card-title block text-[#0A0A0A] mb-2">{label}</label>

        <input
          ref={ref}
          className={cn(
            "w-full h-13 bg-[#F3F3F5] border border-black/10 rounded-[12px] px-4 body-text text-[#0A0A0A] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-1 focus:ring-[#030213] focus:bg-white transition-all",
            className,
          )}
          {...props}
        />

        {error && (
          <p className="caption text-red-600 mt-1.5" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
