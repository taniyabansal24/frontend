"use client";

import Image from "next/image";
import dashboard from "../../../../public/Dashboard.png";
import Container from "@/components/ui/Container";
import ChatIcon from "@/components/icons/ChatIcon";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-12">
          {/* Left Section */}
          <div>
            {/* Badge */}
            <div className="inline-flex px-6 py-2 rounded-full bg-[#EDF3EE] mb-6">
              <span className="text-[#6FA073] text-[14px] font-medium">
                Edu Tech platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[42px] font-bold leading-[1.15] text-[#303042] max-w-162.5">
              Run Your Entire Coaching Institute on{" "}
              <span className="text-[#6FA073]">One Platform</span>
            </h1>

            {/* Description */}
            <p className="mt-12 max-w-130 text-[#6B7280] text-[16px] lg:text-[18px] leading-8 font-light">
              All-in-one SaaS platform with intelligent automation for
              attendance, classes, tests, fees, and student management. Scale
              from 10 to 100,000+ students effortlessly.
            </p>

            {/* Buttons */}
            <div className="mt-15 flex gap-5 flex-wrap">
              <button className="px-12 py-2 rounded-full bg-[#6FA073] text-white text-md font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
                Connect
              </button>

              <button className="px-12 py-2 rounded-full border border-[#6FA073] text-[#6FA073] text-md font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
                Dashboard
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative scale-[0.88] lg:scale-100 pt-16">
            {/* Main Dashboard Image */}
            <Image
              src={dashboard}
              alt="Dashboard"
              className="w-full h-auto rounded-[24px] shadow-2xl object-cover mt-16"
              priority
            />

            {/* Problem Card */}
            <div
              className="hidden lg:block absolute w-45 h-35"
              style={{ top: "5px", left: "-39px" }}
            >
              {/* Card Background */}
              <div className="w-full h-27.5 mt-7.5 bg-white/50 backdrop-blur-[5px] rounded-[24px] shadow-[0_8px_18px_rgba(0,0,0,0.12)] flex flex-col items-center justify-end pb-5">
                {/* Text */}
                <h4 className="text-center font-medium text-[18px] leading-[115%] text-[#34364A]">
                  Problem &<br />
                  Solutions
                </h4>
              </div>

              {/* Circle Icon */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-17 h-17 rounded-full flex items-center justify-center text-white text-[30px]"
                style={{
                  background:
                    "linear-gradient(311.42deg, #6FA073 16.95%, #A7CBAA 97.27%)",
                }}
              >
                ?
              </div>
            </div>

            {/* Dashboard Card */}
            <div className="hidden lg:flex absolute top-12.5 -right-18 z-[-1] w-38.75 h-37.5 rounded-[24px] bg-white/50 backdrop-blur-[5px] border border-white/40 shadow-[0_8px_18px_rgba(0,0,0,0.08)] flex-col items-center justify-start pt-6">
              {/* Yellow Bubble */}
              <div className="absolute -top-2 right-0 w-5 h-5 rounded-full bg-[#FFC700] shadow-[0_0_0_8px_rgba(255,199,0,0.22)]" />

              {/* Title */}
              <h4 className="text-[16px] font-medium text-[#34364A]">Dashboard</h4>

              {/* Progress Circle */}
              <div className="relative w-22.5 h-22.5 flex items-center justify-center">
                <svg className="-rotate-45" width="90" height="90" viewBox="0 0 90 90">
                  {/* Gray Circle */}
                  <circle
                    cx="45"
                    cy="45"
                    r="35"
                    stroke="#E4E4E4"
                    strokeWidth="6"
                    fill="none"
                  />

                  {/* Green Progress */}
                  <circle
                    cx="45"
                    cy="45"
                    r="35"
                    stroke="#6FA073"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="176"
                    strokeDashoffset="45"
                  />
                </svg>

                {/* Center Text */}
                <span className="absolute text-[24px] font-medium text-[#34364A]">
                  117k
                </span>
              </div>
            </div>

            {/* Chat Bubble */}
            <div className="hidden lg:flex absolute -bottom-10.75 -right-8.75 w-20 h-20 z-[-1] rounded-full bg-[#6FA073] shadow-xl items-center justify-center">
              <ChatIcon />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}