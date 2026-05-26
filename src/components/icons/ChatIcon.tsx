import React from "react";

interface ChatIconProps {
  size?: number;
  className?: string;
}

export default function ChatIcon({
  size = 40,
  className = "",
}: ChatIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: "rotate(-0.8deg)" }}
    >
      {/* Chat bubble */}
      <path
        d="M20 4C11.2 4 4 10.4 4 18.3C4 22.7 6.3 26.5 10 29L8.5 35L14.8 31.8C16.5 32.2 18.2 32.5 20 32.5C28.8 32.5 36 26.1 36 18.3C36 10.4 28.8 4 20 4Z"
        fill="white"
      />

      {/* Dots */}
      <circle cx="14" cy="18" r="2" fill="#DADADA" />
      <circle cx="20" cy="18" r="2" fill="#DADADA" />
      <circle cx="26" cy="18" r="2" fill="#DADADA" />
    </svg>
  );
}