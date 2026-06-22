"use client";

import Container from "@/components/ui/Container";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import IdeaIcon from "@/components/icons/IdeaIcon";
import WorkflowIcon from "@/components/icons/WorkflowIcon";
import TargetIcon from "@/components/icons/TargetIcon";

const features = [
  {
    icon: AnalyticsIcon,
    title: "AI Performance Analytics",
    description: "Real-time subject tracking and predictive progress modeling.",
    iconBg: "#EDF3EE",
    iconColor: "#6FA073",
  },
  {
    icon: SupportIcon,
    title: "AI Learning Insights",
    description:
      "Deep-dive strength mapping and automated knowledge gap detection.",
    iconBg: "#FFF3E8",
    iconColor: "#F4A340",
  },
  {
    icon: IdeaIcon,
    title: "Smart Recommendations",
    description:
      "Hyper-personalized study plans focused on your highest priority topics.",
    iconBg: "#EDF3EE",
    iconColor: "#6FA073",
  },
  {
    icon: WorkflowIcon,
    title: "Parent & Teacher View",
    description:
      "Collaborative behavior reports and early-warning risk alerts.",
    iconBg: "#FFF3E8",
    iconColor: "#F4A340",
  },
];

export default function Feature() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
               Smart Learning Ecosystem
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-homepage text-center max-w-175 font-bold">
            Precision Engineered Learning
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-125">
            Harness the power of neural networks to navigate your academic
            journey with laser focus.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 w-full">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    bg-white
                    border
                    border-[#E5E7EB]
                    rounded-[32px]
                    p-10
                    min-h-80
                    shadow-[0_4px_16px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: feature.iconBg,
                    }}
                  >
                    <Icon
                      size={30}
                      style={{
                        color: feature.iconColor,
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-10 text-body-homepage font-semibold leading-7 text-[#191C1D]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-caption-homepage text-[#464652] leading-5">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
