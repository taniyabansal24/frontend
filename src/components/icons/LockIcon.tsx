import React from "react";

interface LockIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LockIcon({
  width = 32,
  height = 32,
  className = "",
}: LockIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.3333 14.666H6.66667C5.19391 14.666 4 15.8599 4 17.3327V26.666C4 28.1388 5.19391 29.3327 6.66667 29.3327H25.3333C26.8061 29.3327 28 28.1388 28 26.666V17.3327C28 15.8599 26.8061 14.666 25.3333 14.666Z"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9.33398 14.666V9.33268C9.33398 7.56457 10.0364 5.86888 11.2866 4.61864C12.5368 3.36839 14.2325 2.66602 16.0007 2.66602C17.7688 2.66602 19.4645 3.36839 20.7147 4.61864C21.9649 5.86888 22.6673 7.56457 22.6673 9.33268V14.666"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}