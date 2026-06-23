"use client";

import Container from "@/components/ui/Container";
import { ChartColumnIncreasing, BadgeAlert } from "lucide-react";
import TargetIcon from "../icons/TargetIcon";

export default function PredictiveIntelligence() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
                Predictive Intelligence
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center w-full max-w-[1400px]">
            {/* Left Side */}
            <div>
              <h2 className="text-heading-homepage font-bold text-[#303042] max-w-[650px]">
                See the Future of your{" "}
                <span className="text-[#8CB38F]">Institution.</span>
              </h2>

              <p className="text-body-homepage text-[#4B5563] leading-9 mt-10 max-w-[650px]">
                Our proprietary AI engine analyses thousands of data points to
                provide actionable forecasts. Understand student engagement
                before it drops and optimize revenue with precision.
              </p>

              {/* Features */}
              <div className="mt-14 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#DCE8DE] flex items-center justify-center shrink-0">
                    <ChartColumnIncreasing size={24} className="text-[#8CB38F]" />
                  </div>

                  <div>
                    <h3 className="text-body-homepage font-semibold text-[#303042]">
                      Automated Trend Reporting
                    </h3>

                    <p className="text-caption-homepage text-[#6B7280] mt-2">
                      Weekly reports delivered directly to your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full border border-[#F4D2AC] flex items-center justify-center shrink-0">
                    <BadgeAlert size={24} className="text-[#F5A94B]" />
                  </div>

                  <div>
                    <h3 className="text-body-homepage font-semibold text-[#303042]">
                      Student Success Score
                    </h3>

                    <p className="text-caption-homepage text-[#6B7280] mt-2">
                      Early warning system for at-risk students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="bg-white border border-[#E8ECE8] rounded-[36px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-body-homepage font-semibold text-[#6FA073]">
                  Revenue Forecast Q4
                </h3>

                <span className="text-body-homepage font-semibold text-[#6FA073]">
                  +24%
                </span>
              </div>

              {/* Graph */}
              <div className="mt-14 flex items-end justify-between gap-4 h-70">
                <div className="w-full h-15 rounded-t-[12px] bg-[#C8D8C9]" />

                <div className="w-full h-30 rounded-t-[12px] bg-[#A9C4AB]" />

                <div className="w-full h-45 rounded-t-[12px] bg-[#8DB18F]" />

                <div className="w-full h-60 rounded-t-[12px] bg-[#6FA073]" />

                <div className="w-full h-40 rounded-t-[12px] bg-[#F5AE54]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}