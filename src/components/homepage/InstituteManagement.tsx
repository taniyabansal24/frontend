"use client";

import ContactIcon from "@/components/icons/ContactIcon";
import MobileLearningIcon from "@/components/icons/MobileLearningIcon";
import PaymentIcon from "@/components/icons/PaymentIcon";
import Container from "@/components/ui/Container";
import { GraduationCap, Users } from "lucide-react";

export default function InstituteManagement() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <Users className="w-4 h-4 text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
                All in One
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-homepage text-center max-w-175 font-bold">
            Institute Management{" "}
            <span className="text-[#8CB38F]">Evolved.</span>
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-125">
            Six pillars of operational excellence integrated into one platform.
          </p>

          {/* Bento Grid */}
          <div className="mt-20 w-full max-w-275">
            <div className="grid grid-cols-12 gap-6">
              {/* Curriculum Architect */}
              <div className="col-span-12 lg:col-span-8 h-77.5 rounded-[32px] border border-[#E8ECE8] bg-white p-10 shadow-sm">
                <GraduationCap
                  className="text-[#7DAA80]"
                  size={32}
                  strokeWidth={1.7}
                />

                <h3 className="mt-6 text-body-homepage font-semibold text-[#303042]">
                  Curriculum Architect
                </h3>

                <p className="text-caption-homepage text-[#5B6070] mt-3 max-w-130 leading-6">
                  Design structured learning paths, course modules, and
                  curriculum frameworks with an intuitive drag-and-drop
                  interface.
                </p>

                <div className="flex gap-3 mt-16">
                  <span className="px-3 py-1 rounded-full bg-[#F2F4F3] text-caption-homepage text-[#69707D]">
                    SYLLABUS MGMT
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#F2F4F3] text-caption-homepage text-[#69707D]">
                    ACCREDITATION
                  </span>
                </div>
              </div>

              {/* Smart Bursar */}
              <div className="col-span-12 lg:col-span-4 h-77.5 rounded-[32px] border border-[#F0D8BA] bg-[#FBF4EA] p-10 flex flex-col items-center justify-center text-center">
                <PaymentIcon className="text-[#8A5100]" size={32} />

                <h3 className="mt-6 text-body-homepage font-semibold text-[#303042]">
                  Smart Bursar
                </h3>

                <p className="text-caption-homepage text-[#5B6070] mt-5 max-w-65 leading-6">
                  Automate fee collection, installment plans, reminders, and
                  digital receipts with complete transparency.
                </p>
              </div>

              {/* Faculty Hub */}
              <div className="col-span-12 lg:col-span-4 h-60.25 rounded-[32px] border border-[#E8ECE8] bg-white p-10 shadow-sm">
                <ContactIcon className="text-[#7DAA80]" size={32} />

                <h3 className="mt-6 text-body-homepage font-semibold text-[#303042]">
                  Faculty Hub
                </h3>

                <p className="text-caption-homepage text-[#5B6070] mt-4 leading-6">
                  Manage faculty schedules, performance reviews, and
                  professional development programs.
                </p>
              </div>

              {/* AI Insights */}
              <div className="col-span-12 lg:col-span-8 h-60.25 rounded-[32px] border border-[#D9E5DA]bg-[#EDF4EE] p-10 shadow-sm">
                {/* <Sparkles
                  className="text-[#6FA073]"
                  size={28}
                  strokeWidth={1.8}
                /> */}

                <h3 className="mt-5 text-body-homepage font-semibold text-[#303042]">
                  AI-Driven Insights
                </h3>

                <p className="text-caption-homepage text-[#4F5665] mt-4 max-w-130 leading-6">
                  Leverage predictive analytics to identify learning gaps,
                  forecast student performance, and improve retention rates.
                </p>

                <button
                  className="
                    mt-6
                    px-5
                    py-1.5
                    rounded-xl
                    bg-[#F59E0B]
                    hover:bg-[#EA9508]
                    transition-colors
                  "
                >
                  <span className="text-badge-homepage text-white">
                    Explore AI Suite
                  </span>
                </button>
              </div>

              {/* Branded App */}
              <div className="col-span-12 lg:col-span-4 h-55 rounded-[32px] border border-[#E8ECE8] bg-white p-10 shadow-sm">
                <MobileLearningIcon className="text-[#6FA073]" size={32} />

                <h3 className="mt-4 text-body-homepage font-semibold text-[#303042]">
                  Branded App
                </h3>

                <p className="text-caption-homepage text-[#5B6070] mt-3 leading-6">
                  Launch your institute’s own mobile app experience with custom
                  branding for both iOS and Android users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
