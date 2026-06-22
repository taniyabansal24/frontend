"use client";

import {
  Calendar,
  Video,
  BookOpen,
  FileText,
  Wallet,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import TargetIcon from "@/components/icons/TargetIcon";

const features = [
  {
    title: "Student Management",
    icon: Calendar,
    rating: 4.9,
    tag: "Core Operations",
    stat: "10K+",
    statLabel: "Students Managed",
    description:
      "Streamline admissions, attendance tracking, batch allocation, and student records from a centralized dashboard. Reduce administrative workload while keeping every student detail organized and accessible.",
    points: ["Student profiles", "Batch management", "Attendance tracking"],
  },
  {
    title: "AI-Powered Assessments",
    icon: FileText,
    rating: 5.0,
    tag: "Smart Analytics",
    stat: "50K+",
    statLabel: "Tests Conducted",
    description:
      "Create online tests and instantly generate AI-powered performance reports. Identify strengths, uncover learning gaps, and provide personalized study recommendations to improve future performance",
    points: ["Online exams", "AI-generated reports", "Personalized insights"],
  },
  {
    title: "Live & Recorded Learning",
    icon: Video,
    rating: 4.8,
    tag: "Interactive Classes",
    stat: "24/7",
    statLabel: "Learning Access",
    description:
      "Conduct engaging live classes, share recorded lectures, and provide uninterrupted learning experiences. Enable students to revisit lessons anytime and learn at their own pace.",
    points: ["Live sessions", "Recorded lectures", "Doubt resolution"],
  },
  {
    title: "Digital Learning Hub",
    icon: BookOpen,
    rating: 4.7,
    tag: "Learning Resources",
    stat: "Unlimited",
    statLabel: "Content Storage",
    description:
      "Store and organize notes, assignments, PDFs, and study materials in one place. Give students instant access to everything they need for effective learning.",
    points: ["Digital library", "Assignments", "Course resources"],
  },
  {
    title: "Fee & Revenue Management",
    icon: Wallet,
    rating: 4.9,
    tag: "Business Automation",
    stat: "100%",
    statLabel: "Payment Visibility",
    description:
      "Automate fee collection, payment reminders, and financial reporting. Track revenue in real time while providing a seamless payment experience for students and parents.",
    points: ["Online payments", "Automated reminders", "Financial reports"],
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <div
      className="sticky"
      style={{
        top: `${80 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          bg-white
          rounded-[32px]
          border
          border-[#C7D9C8]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          w-full
          max-w-5xl
          mx-auto
        "
      >
        <div className="px-6 md:px-10 lg:px-16 py-8 md:py-10">
          {/* Header */}
          <div className="flex items-center gap-4 md:gap-6">
            <div
              className="
                h-16
                w-16
                md:h-18
                md:w-18
                rounded-[18px]
                bg-[#6FA073]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Icon size={32} className="text-white" strokeWidth={1.75} />
            </div>

            <div>
              <h3 className="text-xl md:text-[24px] font-semibold text-[#303042]">
                {feature.title}
              </h3>

              <p className="text-[#9A9AA3] mt-1">{feature.tag}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-[700px]">
            <p className="leading-7 text-[#3D4156]">{feature.description}</p>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="space-y-3">
              {feature.points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F3F3F3] flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-[#6FA073]" />
                  </div>

                  <span className="text-[#3D4156]">{point}</span>
                </div>
              ))}
            </div>

            <div className="text-left md:text-right">
              <div className="text-heading-homepage font-semibold leading-none text-[#303042]">
                {feature.stat}
              </div>

              <p className="text-[#6B7280] mt-2 font-medium">
                {feature.statLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="h-4 bg-[#EAF2EB]" />
      </motion.div>
    </div>
  );
}

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <TargetIcon className="text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
                Core Platform Features
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-homepage text-center max-w-175 font-bold">
            Smarter Learning Ecosystem
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-125">
            Empower students and educators with intelligent tools for teaching,
            learning, and academic success.
          </p>

          {/* Stack */}
          <div className="mt-12 w-full max-w-5xl mx-auto">
            <div
              className="relative w-full"
              style={{
                height: `${features.length * 75}vh`,
              }}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
