"use client";

import {
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import Container from "@/components/ui/Container";
import TargetIcon from "@/components/icons/TargetIcon";

export default function AIAnalytics() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
               Smart Performance Insights
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-homepage text-center max-w-175 font-bold">
            AI Powered Academic{" "}
            <span className="text-[#8CB38F]">
              Growth
            </span>
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-125">
            Transform test results into actionable insights with personalized guidance and performance intelligence.
          </p>

          {/* Analytics Card */}
          <div
            className="mt-20 w-full max-w-262.5 rounded-[36px] border border-[#E8E8E8] bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="grid lg:grid-cols-[290px_1fr] gap-8">
              {/* Left Card */}
              <div className="rounded-[28px] bg-[#F4F7F4] p-8">
                <h3 className="text-body-homepage font-semibold text-center text-[#4A4A59]">
                  AI Analytics
                </h3>

                {/* Circle */}
                <div className="relative flex justify-center mt-8">
                  <div className="relative w-42.5 h-42.5">
                    <svg
                      viewBox="0 0 120 120"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke="#E7ECE7"
                        strokeWidth="10"
                        fill="none"
                      />

                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke="#7FB084"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="301"
                        strokeDashoffset="36"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[42px] font-bold text-[#23238B]">
                        88%
                      </span>

                      <span className="text-[12px] font-medium text-[#4A4A59] uppercase">
                        Readiness
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="text-body-homepage font-semibold text-[#303042]">
                    +12% vs last month
                  </p>

                  <p className="text-caption-homepage text-[#7C7C88] mt-1">
                    Predicted for Final Exams
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-body-homepage text-[#7FB084] font-medium">
                      Academic Analytics
                    </h4>

                    <p className="text-body-homepage text-[#4B4B5C] mt-2">
                      Detailed breakdown of subject performance
                    </p>
                  </div>

                  <button className="w-10 h-10 rounded-xl bg-[#F3F3F3] flex items-center justify-center">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                {/* Chart */}
                <div className="mt-10">
                  <svg
                    viewBox="0 0 600 220"
                    className="w-full h-auto"
                  >
                    <polyline
                      fill="rgba(127,176,132,0.12)"
                      stroke="#7FB084"
                      strokeWidth="3"
                      points="
                        20,170
                        120,120
                        260,125
                        420,40
                        560,40
                        560,170
                        20,170
                      "
                    />

                    <polyline
                      fill="none"
                      stroke="#7FB084"
                      strokeWidth="3"
                      points="
                        20,170
                        120,120
                        260,125
                        420,40
                        560,40
                      "
                    />

                    <line
                      x1="20"
                      y1="170"
                      x2="560"
                      y2="170"
                      stroke="#E5E7EB"
                    />

                    <text x="85" y="195" fontSize="14" fill="#4B4B5C">
                      MATH
                    </text>

                    <text x="235" y="195" fontSize="14" fill="#4B4B5C">
                      PHYS
                    </text>

                    <text x="390" y="195" fontSize="14" fill="#4B4B5C">
                      CHEM
                    </text>

                    <text x="550" y="195" fontSize="14" fill="#4B4B5C">
                      BIO
                    </text>
                  </svg>
                </div>

                <div className="border-t border-[#ECECEC] mt-4 pt-8">
                  <div className="rounded-[20px] bg-[#FFF5F5] px-6 py-5 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <TrendingUp
                        size={22}
                        className="text-[#23238B]"
                      />
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#303042]">
                        Weekly Growth Momentum
                      </h5>

                      <p className="text-caption-homepage text-[#6B7280] mt-1">
                        You&apos;ve completed 4 targets. Your focus has improved by
                        24%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}