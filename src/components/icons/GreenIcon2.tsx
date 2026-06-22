import React from "react";

interface IconProps {
  size?: number;
}

export default function GreenIcon({
  size = 73,
}: IconProps) {
  return (
    <svg
      width={size}
      height={(size * 71) / 73}
      viewBox="0 0 73 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="greenBack"
          x1="12"
          y1="18"
          x2="58"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#82AF86"
            stopOpacity="0.5"
          />
          <stop
            offset="1"
            stopColor="#7CAA80"
          />
        </linearGradient>

        <linearGradient
          id="glass"
          x1="28"
          y1="24"
          x2="54"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="white"
            stopOpacity="0.25"
          />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0.08"
          />
        </linearGradient>

        <linearGradient
          id="user"
          x1="56"
          y1="33"
          x2="23"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0.2"
          />
        </linearGradient>

        <filter
          id="glow"
          x="0"
          y="0"
          width="73"
          height="71"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Back tilted card */}
      <path
        d="M19.4 16L36 11.5C42.1 9.9 46.5 12.6 48.2 18.9L52.8 36.1C54.5 42.4 52 46.9 45.9 48.5L29.3 53C23.3 54.6 18.9 51.9 17.2 45.6L12.6 28.4C10.9 22.1 13.4 17.6 19.4 16Z"
        fill="url(#greenBack)"
      />

      {/* Glow */}
      <g filter="url(#glow)">
        <path
          d="M24 22L35.4 19.3C39.5 18.2 42.4 19.8 43.4 23.8L46.3 34.6C47.4 38.5 45.7 41.4 41.6 42.5L30.3 45.5C26.2 46.6 23.2 45 22.2 41L19.3 30.3C18.2 26.3 20 23.5 24 22Z"
          fill="#78A77C"
          opacity="0.45"
        />
      </g>

      {/* Front glass card */}
      <rect
        x="22"
        y="20"
        width="40"
        height="39"
        rx="11"
        fill="url(#glass)"
        stroke="rgba(255,255,255,0.3)"
      />

      {/* User icon */}
      <circle
        cx="35"
        cy="32"
        r="5"
        fill="url(#user)"
      />

      <path
        d="M30 50C30 45.5 32.5 43 35 43C37.5 43 40 45.5 40 50"
        stroke="url(#user)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Secondary person */}
      <circle
        cx="52"
        cy="43"
        r="4"
        fill="url(#user)"
        opacity="0.9"
      />

      <path
        d="M47 52C47 48.5 49 47 52 47C55 47 57 48.5 57 52"
        stroke="url(#user)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}