"use client";

import Container from "@/components/ui/Container";
import { CheckCircle2, X, ArrowUpRight, TrendingUp } from "lucide-react";
import TargetIcon from "@/components/icons/TargetIcon";

export default function ParadigmShift() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
               Next-Generation Management
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-20 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center w-full">
            {/* Left Side */}
            <div>
              <h2 className="text-heading-homepage font-bold text-[#303042] max-w-137.5">
                Move Beyond Traditional{" "}
                <span className="text-[#F59E0B]">
                  Institute Management.
                </span>
              </h2>

              <p className="text-body-homepage text-[#4B5563] mt-8 max-w-155 leading-9">
                Replace spreadsheets, manual processes, and disconnected tools with a unified platform designed to streamline operations, improve student outcomes, and scale your institute with confidence.
              </p>

              {/* Feature Cards */}
              <div className="mt-10 space-y-6">
                {/* Card 1 */}
                <div
                  className="
                    bg-white
                    rounded-[20px]
                    border
                    border-[#E8ECE8]
                    shadow-sm
                    overflow-hidden
                    flex
                  "
                >
                  <div className="w-1.5 bg-[#6FA073]" />

                  <div className="p-6 flex gap-5">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-[12px]
                        bg-[#EDF4EE]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <ArrowUpRight
                        size={22}
                        className="text-[#6FA073]"
                      />
                    </div>

                    <div>
                      <h3 className="text-body-homepage font-semibold text-[#303042]">
                        Real-time Coordination
                      </h3>

                      <p className="text-caption-homepage text-[#6B7280] mt-2 leading-6">
                        Keep administrators, teachers, students, and parents connected through a single platform with instant updates and seamless communication.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="
                    bg-white
                    rounded-[20px]
                    border
                    border-[#E8ECE8]
                    shadow-sm
                    overflow-hidden
                    flex
                  "
                >
                  <div className="w-1.5 bg-[#F59E0B]" />

                  <div className="p-6 flex gap-5">
                    <div
                      className="
                        w-12
                        h-12
                        rounded-[12px]
                        bg-[#FFF4E7]
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <TrendingUp
                        size={22}
                        className="text-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <h3 className="text-body-homepage font-semibold text-[#303042]">
                        Predictive Insights
                      </h3>

                      <p className="text-caption-homepage text-[#6B7280] mt-2 leading-6">
                        Leverage AI-powered analytics to identify learning gaps, forecast performance trends, and make smarter operational decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Traditional */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  border
                  border-[#E8ECE8]
                  shadow-sm
                  p-8
                  min-h-80
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#FBECD8]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <X
                    size={26}
                    className="text-[#D98A1E]"
                  />
                </div>

                <h3 className="text-body-homepage font-semibold text-[#303042] mt-8">
                  Traditional Systems
                </h3>

                <p className="text-caption-homepage text-[#6B7280] mt-4 max-w-45 leading-6">
                  Manual data entry, scattered records, repetitive tasks, and limited visibility into institute performance.
                </p>
              </div>

              {/* Smart OS */}
              <div
                className="
                  bg-white
                  rounded-[32px]
                  border
                  border-[#E8ECE8]
                  shadow-sm
                  p-8
                  min-h-80
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#EDF4EE]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <CheckCircle2
                    size={26}
                    className="text-[#6FA073]"
                  />
                </div>

                <h3 className="text-body-homepage font-semibold text-[#6FA073] mt-8">
                  Smart Institute OS
                </h3>

                <p className="text-caption-homepage text-[#6B7280] mt-4 max-w-45 leading-6">
                  Automated workflows, real-time insights, centralized data, and a seamless experience for every stakeholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}