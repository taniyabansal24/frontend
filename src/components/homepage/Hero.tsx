"use client";

import Image from "next/image";
import dashboard from "../../../public/Dashboard.png";
import Container from "@/components/ui/Container";
import TargetIcon from "@/components/icons/TargetIcon";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
               Comprehensive Solution
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-hero-heading text-center max-w-225 font-bold">
            Run Your Entire Coaching Institute on{" "}
            <span className="text-[#6FA073]">One Platform</span>
          </h1>

          {/* Description */}
          <p className="text-body-homepage text-center max-w-190 mt-8 text-[#4A5565]">
            All-in-one SaaS platform with intelligent automation for attendance,
            classes, tests, fees, and student management. Scale from 10 to
            100,000+ students effortlessly.
          </p>

          {/* Buttons */}
<div className="mt-10 flex flex-wrap justify-center gap-4">
  <button
    className="
      text-body-homepage
      font-medium
      h-12
      px-10
      rounded-full
      bg-[#6FA073]
      text-white
      shadow-md
      cursor-pointer
      transition-all
      duration-300
      hover:bg-[#5E9163]
      hover:shadow-xl
      hover:-translate-y-0.5
      active:translate-y-0
      active:scale-[0.98]
    "
  >
    Connect
  </button>

   <a
  href="#features"
  className="
    inline-flex
    items-center
    justify-center
    text-body-homepage
    font-medium
    h-12
    px-10
    rounded-full
    border
    border-[#6FA073]
    text-[#6FA073]
    bg-white
    cursor-pointer
    transition-all
    duration-300
    hover:bg-[#F3F4F5]
    hover:shadow-lg
    hover:-translate-y-0.5
    active:translate-y-0
    active:scale-[0.98]
  "
>
  Explore Features
</a>
</div>

          {/* Dashboard Preview */}
          <div className="relative w-full max-w-262.5 mt-16">
            {/* Main Dashboard Image */}
            <Image
              src={dashboard}
              alt="Dashboard"
              priority
              className="w-full h-auto rounded-[24px] border border-[#E9ECEF] shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
            />

            {/* Floating Analytics Card */}
            <div className="hidden lg:flex absolute -top-13.75 -right-15 w-37.5 h-32.5 rounded-[20px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex-col items-center justify-start pt-4">
              {/* Yellow Indicator */}
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F6B800] shadow-[0_0_0_4px_rgba(246,184,0,0.15)]" />

              <p className="text-[13px] font-medium text-[#34364A]">
                Dashboard
              </p>

              {/* Circular Progress */}
              <div className="relative mt-2 flex items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  className="-rotate-90"
                >
                  {/* Background Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                  />

                  {/* Progress Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    stroke="#6FA073"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="176"
                    strokeDashoffset="42"
                  />
                </svg>

                <span className="absolute text-[22px] font-semibold text-[#34364A]">
                  117k
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
