"use client";

import Container from "@/components/ui/Container";
import {
  GraduationCap,
  UserRound,
  Users,
  LayoutGrid,
  ArrowRight,
  Calendar,
  BookOpen,
  FileText,
  BarChart3,
  Upload,
  ClipboardCheck,
  TrendingUp,
  CreditCard,
  Bell,
  Settings,
  DollarSign,
  UserCog,
} from "lucide-react";

const roles = [
  {
    title: "Students",
    description:
      "Access classes, study materials, tests, and performance insights from one dashboard.",
    icon: GraduationCap,
    features: [
      { icon: Calendar, label: "View class schedules" },
      { icon: BookOpen, label: "Access study materials" },
      { icon: FileText, label: "Attempt online tests" },
      { icon: BarChart3, label: "Track academic progress" },
      { icon: ClipboardCheck, label: "Submit assignments" },
    ],
    statLabel: "Attendance",
    statValue: "92%",
    statMessage: "Excellent attendance this month",
    type: "progress",
  },
  {
    title: "Teachers",
    description:
      "Manage classes, assessments, attendance, and student performance efficiently.",
    icon: UserRound,
    features: [
      { icon: Calendar, label: "Manage class schedules" },
      { icon: Upload, label: "Upload study materials" },
      { icon: FileText, label: "Create & evaluate tests" },
      { icon: ClipboardCheck, label: "Mark attendance" },
      { icon: TrendingUp, label: "Monitor student growth" },
    ],
    statLabel: "Today's Classes",
    statValue: "4",
    statMessage: "2 upcoming sessions remaining today",
    type: "number",
  },
  {
    title: "Parents",
    description:
      "Stay connected with your child's attendance, performance, and institute updates.",
    icon: Users,
    features: [
      { icon: TrendingUp, label: "Monitor academic progress" },
      { icon: ClipboardCheck, label: "View attendance records" },
      { icon: FileText, label: "Check test results" },
      { icon: CreditCard, label: "Pay fees online" },
      { icon: Bell, label: "Receive instant updates" },
    ],
    statLabel: "Latest Test Score",
    statValue: "88/100",
    statMessage: "Strong improvement this term",
    type: "number",
  },
  {
    title: "Administrators",
    description:
      "Control operations, manage users, finances, and analytics from a single platform.",
    icon: LayoutGrid,
    features: [
      { icon: UserCog, label: "Manage students & staff" },
      { icon: TrendingUp, label: "Access institute analytics" },
      { icon: Settings, label: "Configure system settings" },
      { icon: DollarSign, label: "Monitor fee collections" },
      { icon: Settings, label: "Manage permissions" },
    ],
    statLabel: "Active Students",
    statValue: "1,247",
    statMessage: "+12 new enrollments this week",
    type: "number",
  },
];

export default function RoleBasedAccess() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#DCE8DE] bg-white mb-8">
            <div className="flex flex-row items-center gap-2">
              <Users className="w-4 h-4 text-[#6FA073]" />
              <span className="text-badge-homepage text-[#6FA073]">
                Role-Based Access
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-heading-homepage text-center max-w-[700px] font-bold">
            Built for Every Role
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#464652] font-light leading-7 text-center mt-6 max-w-[500px]">
            Personalized dashboards and workflows designed for students,
            teachers, parents, and administrators.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20 w-full">
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <div
                  key={role.title}
                  className="bg-white rounded-[24px] border border-[#E8ECE8] p-6 min-h-[620px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-[16px] bg-[#F1F5F1] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#8CB38F]" strokeWidth={1.8} />
                    </div>

                    <button className="w-10 h-10 rounded-full border border-[#D9D9D9] flex items-center justify-center hover:bg-[#6FA073] hover:text-white hover:border-[#6FA073] transition-colors">
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-[28px] font-bold text-[#303042]">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-caption-homepage text-[#6B7280] mt-3">
                    {role.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {role.features.map((feature) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div key={feature.label} className="flex items-center gap-3">
                          <FeatureIcon size={18} className="text-[#445B49]" />
                          <span className="text-caption-homepage text-[#46505A]">
                            {feature.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#ECECEC] mt-10" />

                  {/* Bottom Stat Card */}
                  <div className="mt-8 rounded-[18px] bg-[#F8FAF7] p-5 relative overflow-hidden">
                    <p className="text-caption-homepage uppercase tracking-[2px] text-[#6B7280]">
                      {role.statLabel}
                    </p>

                    <div className="mt-3">
                      <span className="text-heading-homepage font-semibold text-[#445B49]">
                        {role.statValue}
                      </span>
                    </div>

                    {role.type === "progress" ? (
                      <>
                        <div className="mt-4 h-3 rounded-full bg-[#DDE5DD] overflow-hidden">
                          <div className="w-[92%] h-full bg-[#8CB38F] rounded-full" />
                        </div>

                        <p className="mt-3 text-caption-homepage text-[#445B49] max-w-[150px]">
                          {role.statMessage}
                        </p>
                      </>
                    ) : (
                      <p className="mt-3 text-caption-homepage text-[#445B49] font-medium max-w-[150px]">
                        {role.statMessage}
                      </p>
                    )}

                    {/* Decorative watermark */}
                    <div className="absolute bottom-2 right-2 opacity-10">
                      <Icon size={60} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}