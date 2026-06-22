// src/components/icons/ChatIcon.tsx

import React from "react";

interface ChatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ChatIcon = ({
  size = 30,
  ...props
}: ChatIconProps) => {
  return (
    <svg
      width={size}
      height={(size * 24) / 30}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.66667 12C1.2 12 0 10.8 0 9.33333V2.66667C0 1.2 1.2 0 2.66667 0H13.3333C14.8 0 16 1.2 16 2.66667V9.33333C16 10.8 14.8 12 13.3333 12H10.6667V16L6.66667 12H2.66667ZM26.6667 20C28.1333 20 29.3333 18.8 29.3333 17.3333V10.6667C29.3333 9.2 28.1333 8 26.6667 8H18.6667V9.33333C18.6667 12.2667 16.2667 14.6667 13.3333 14.6667V17.3333C13.3333 18.8 14.5333 20 16 20H18.6667V24L22.6667 20H26.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChatIcon;