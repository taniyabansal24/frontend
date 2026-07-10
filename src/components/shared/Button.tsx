import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex h-11 items-center justify-center px-6 rounded-xl card-title transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer",

        variant === "primary" &&
          "bg-[#6FA073] text-white hover:bg-[#5f8d63] active:bg-[#567f5a] focus:outline-none focus:ring-2 focus:ring-[#6FA073]/40",

        variant === "secondary" &&
          "border border-gray-300 bg-white text-[#344054] hover:bg-gray-100 hover:border-gray-400",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}