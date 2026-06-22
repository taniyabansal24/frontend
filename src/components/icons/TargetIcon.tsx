// src/components/icons/TargetIcon.tsx

import React from "react";

interface TargetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const TargetIcon = ({
  size = 15,
  ...props
}: TargetIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.33366 13.9993C11.0156 13.9993 14.0003 11.0146 14.0003 7.33268C14.0003 3.65078 11.0156 0.666016 7.33366 0.666016C3.65176 0.666016 0.666992 3.65078 0.666992 7.33268C0.666992 11.0146 3.65176 13.9993 7.33366 13.9993Z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33398 11.332C9.54312 11.332 11.334 9.54117 11.334 7.33203C11.334 5.12289 9.54312 3.33203 7.33398 3.33203C5.12485 3.33203 3.33398 5.12289 3.33398 7.33203C3.33398 9.54117 5.12485 11.332 7.33398 11.332Z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33431 8.66471C8.07069 8.66471 8.66764 8.06776 8.66764 7.33138C8.66764 6.595 8.07069 5.99805 7.33431 5.99805C6.59793 5.99805 6.00098 6.595 6.00098 7.33138C6.00098 8.06776 6.59793 8.66471 7.33431 8.66471Z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TargetIcon;