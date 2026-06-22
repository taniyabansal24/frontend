
import React from "react";

interface IconProps
  extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const GreenIcon = ({
  size = 78,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* gradients */}
        <linearGradient
          id="greenBack"
          x1="10"
          y1="8"
          x2="68"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7CFF52" />
          <stop
            offset="1"
            stopColor="#16A34A"
          />
        </linearGradient>

        <linearGradient
          id="glass"
          x1="20"
          y1="18"
          x2="70"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="white"
            stopOpacity="0.45"
          />

          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0.12"
          />
        </linearGradient>

        <linearGradient
          id="pen"
          x1="32"
          y1="30"
          x2="56"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />

          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0.55"
          />
        </linearGradient>

        {/* blur */}
        <filter
          id="blur"
          x="0"
          y="0"
          width="78"
          height="78"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            stdDeviation="8"
          />
        </filter>
      </defs>

      {/* back card */}
      <rect
        x="10"
        y="6"
        width="42"
        height="42"
        rx="10"
        transform="rotate(-15 10 6)"
        fill="url(#greenBack)"
      />

      {/* glow */}
      <g filter="url(#blur)">
        <rect
          x="22"
          y="20"
          width="38"
          height="38"
          rx="12"
          fill="#6DFF5A"
          opacity="0.45"
        />
      </g>

      {/* front glass card */}
      <rect
        x="22"
        y="18"
        width="42"
        height="42"
        rx="12"
        fill="url(#glass)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
      />

      {/* pencil */}
      <g transform="translate(5 3)">
        <path
          d="M47.5 27.8L35.4 39.9C34.8 40.5 34 40.9 33.2 40.9H28.9C28.3 40.9 27.8 40.4 27.8 39.8V35.5C27.8 34.7 28.1 33.9 28.7 33.3L40.8 21.2C41.2 20.8 41.8 20.8 42.2 21.2L47.5 26.5C47.9 26.9 47.9 27.4 47.5 27.8Z"
          fill="url(#pen)"
        />

        <path
          d="M43 19.7L48.9 25.6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default GreenIcon;
