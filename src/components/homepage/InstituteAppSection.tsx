"use client";

import Container from "@/components/ui/Container";
import { Smartphone, School, BadgeCheck, Zap, Play } from "lucide-react";
import TargetIcon from "@/components/icons/TargetIcon";

const features = [
  {
    title: "Your Institute Name",
    description:
      "Students download an app that carries your coaching brand, not ours.",
    icon: School,
  },
  {
    title: "Your Logo & Identity",
    description:
      "Display your logo, colors and institute information throughout the app.",
    icon: BadgeCheck,
  },
  {
    title: "Available on Android & iPhone",
    description: "Reach students and parents through a dedicated mobile app.",
    icon: Smartphone,
  },
  {
    title: "Automatic Improvements",
    description: "New features and updates delivered without extra effort.",
    icon: Zap,
  },
];

export default function InstituteAppSection() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
                Mobile App Solution
              </span>
            </div>
          </div>

          {/* Section Heading */}
          <h2 className="text-heading-homepage text-center max-w-175 font-bold">
            Your Own Coaching App
          </h2>

          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-125">
            A connected learning ecosystem built to improve engagement and outcomes.
          </p>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16 w-full">
            {/* Left */}

            <div>
              <h3 className="text-body-homepage font-semibold text-[#303042] max-w-125">
                Give Students an App They&#39;ll Recognize Instantly
              </h3>

              <div className="mt-8 space-y-6">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-[#EEF5EE] border border-[#CFE0D0] flex items-center justify-center shrink-0"
                      >
                        <Icon className="w-6 h-6 text-[#6FA073]" />
                      </div>

                      <div>
                        <h4 className="text-body-homepage font-medium text-[#303042]">
                          {item.title}
                        </h4>

                        <p className="text-caption-homepage text-[#6B7280] mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right */}

            <div className="relative flex justify-center">
              {/* Play Store Card */}

              <div
                className="w-full max-w-105 bg-white rounded-[28px] border border-[#E5E7EB] shadow-xl overflow-hidden"
              >
                {/* Header */}

                <div className="px-5 py-4 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <Play className="w-7 h-7 text-[#6FA073]" />

                    <span className="text-body-homepage font-medium text-[#303042]">
                      Google Play
                    </span>
                  </div>
                </div>

                {/* App Info */}

                <div className="p-5">
                  <div className="flex gap-4">
                    {/* App Icon */}

                    <div className="w-16 h-16 rounded-2xl bg-[#EEF5EE] flex items-center justify-center">
                      <School className="w-8 h-8 text-[#6FA073]" />
                    </div>

                    <div>
                      <h3 className="text-body-homepage font-semibold text-[#303042]">
                        ABC Coaching
                      </h3>

                      <p className="text-caption-homepage text-[#6FA073] font-medium">
                        ABC Coaching Institute
                      </p>

                      <p className="text-caption-homepage mt-1 text-[#6B7280]">
                        Education • Students
                      </p>
                    </div>
                  </div>

                  {/* Stats */}

                  <div className="grid grid-cols-3 mt-6 text-center">
                    <div>
                      <p className="text-body-homepage font-semibold text-[#303042]">
                        4.9★
                      </p>

                      <span className="text-caption-homepage text-[#6B7280]">
                        Rating
                      </span>
                    </div>

                    <div>
                      <p className="text-body-homepage font-semibold text-[#303042]">
                        10K+
                      </p>

                      <span className="text-caption-homepage text-[#6B7280]">
                        Students
                      </span>
                    </div>

                    <div>
                      <p className="text-body-homepage font-semibold text-[#303042]">
                        100K+
                      </p>

                      <span className="text-caption-homepage text-[#6B7280]">
                        Downloads
                      </span>
                    </div>
                  </div>

                  {/* Install */}

                  <button
                    className="mt-6 w-full h-12 rounded-xl bg-[#6FA073] hover:bg-[#628E66] transition-colors flex items-center justify-center"
                  >
                    <span className="text-badge-homepage text-white">
                      Install
                    </span>
                  </button>

                  {/* Screenshots */}

                  <div className="mt-6 flex gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex-1 h-28 rounded-xl bg-[#F4F6F4] border border-[#E5E7EB]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}

              <div className="absolute -top-4 right-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-[#E5E7EB]">
                <span className="text-caption-homepage text-[#6FA073]">
                  Your Brand
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-[#E5E7EB]">
                <span className="text-caption-homepage text-[#303042]">
                  Published on Play Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
