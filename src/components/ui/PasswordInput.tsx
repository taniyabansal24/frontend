"use client";

import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        <label className="block text-[#0A0A0A] text-[16px] font-medium mb-2">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              "w-full h-[52px] bg-[#F3F3F5] border border-black/10 rounded-[12px] px-4 pr-12 text-[16px] text-[#0A0A0A] placeholder:text-[rgba(10,10,10,0.5)] placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-[#030213] focus:bg-white transition-all",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#717182] hover:text-[#030213] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
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

PasswordInput.displayName = "PasswordInput";