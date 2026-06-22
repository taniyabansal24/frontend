import React from "react";

interface IconProps
  extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const RedIcon = ({
  size = 77,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 77 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Main Circle */}
      <circle
        cx="38.5"
        cy="38.5"
        r="25"
        fill="url(#paint0_linear)"
      />

      {/* Blur Circle */}
      <g filter="url(#filter0_f)">
        <circle
          cx="38.5"
          cy="38.5"
          r="16"
          fill="#FF3D22"
        />
      </g>

      {/* Glass Effect */}
      <circle
        cx="48"
        cy="48"
        r="25"
        fill="rgba(255,172,149,0.4)"
        stroke="url(#paint1_linear)"
      />

      {/* Arrow Shape */}
      <path
        d="M57.585 39.2768L53.5212 52.1205C53.3706 52.6473 52.9442 53.0738 52.4174 53.2268L39.6239 57.2379C38.771 57.5164 37.9432 56.6861 38.2191 55.8332L42.2328 42.9644C42.3833 42.4376 42.8097 42.0362 43.3365 41.8606L56.1802 37.847C57.0582 37.571 57.8609 38.3989 57.585 39.2768"
        fill="url(#paint2_linear)"
      />

      <defs>
        <filter
          id="filter0_f"
          x="0"
          y="0"
          width="77"
          height="77"
          filterUnits="userSpaceOnUse"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />

          <feGaussianBlur
            stdDeviation="11"
            result="effect1_foregroundBlur"
          />
        </filter>

        <linearGradient
          id="paint0_linear"
          x1="41.7"
          y1="41.6"
          x2="-2.3"
          y2="63.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA78F" />

          <stop
            offset="1"
            stopColor="#F23E2C"
          />
        </linearGradient>

        <linearGradient
          id="paint1_linear"
          x1="30"
          y1="28"
          x2="62"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="white"
            stopOpacity="0.25"
          />

          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>

        <linearGradient
          id="paint2_linear"
          x1="48"
          y1="41"
          x2="44"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />

          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0.2"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RedIcon;