"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import girlImage from "../../../public/comparison-girl.png";
import ChatIcon from "@/components/icons/ChatIcon";
import ChatIcon2 from "@/components/icons/ChatIcon2";
import GreenIcon from "@/components/icons/GreenIcon";
import RedIcon from "@/components/icons/RedIcon";
import ProgressCircleIcon from "@/components/icons/ProgressCircleIcon";

const leftData = [
  {
    title: "Attendance on Paper & Notes on Whatsapp.",
    desc: "Lost records, No tracking, time consuming, Scattered information, No organization",
  },
  {
    title: "Fees in Excel & No student Tracking",
    desc: "Manual calculations, payment tracking errors, zero visibility into performance and progress.",
  },
  {
    title: "Always Offline classes",
    desc: "Limited accessibility and flexibility for students.",
  },
];

const rightData = [
  {
    title: "Digital Attendance & Centralized Study Materials",
    desc: "Instant reports with many more, Organized library, Instant access for all students.",
  },
  {
    title: "Automated Fee Management & Real-time analytics",
    desc: "Online payments, Auto-reminders, Reconciliation, Complete visibility into every.",
  },
  {
    title: "Seamless Online classes",
    desc: "Interactive learning with instant access to content.",
  },
];

function Card({
  title,
  desc,
  smart,
}: {
  title: string;
  desc: string;
  smart?: boolean;
}) {
  return (
    <div className="bg-white rounded-[20px] p-5 lg:p-7.5 shadow-[0px_1px_12px_rgba(0,0,0,0.08)] min-h-40 lg:min-h-45 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300">
      {/* icon */}
      <div className="w-12 h-12 lg:w-14.5 lg:h-14.5 rounded-full mb-3 flex items-center justify-center">
        {smart ? <GreenIcon /> : <RedIcon />}
      </div>

      <h3 className="text-body-homepage font-semibold text-[#303042] leading-7">
        {title}
      </h3>

      <p className="mt-2 text-caption-homepage text-[#6B7280] leading-6">
        {desc}
      </p>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-heading-homepage text-center font-bold">
            The Traditional Way vs The{" "}
            <span className="text-[#8CB38F]">Smart</span> Way
          </h2>

          <div className="grid lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[450px_1fr_1fr] gap-6 lg:gap-8 mt-20">
            {/* image side */}
            <div className="relative h-125 lg:h-175 rounded-[20px] lg:rounded-[30px] bg-[linear-gradient(317deg,#9CC29F_0%,#73A377_99%)]">
              {/* category badges */}
              <div className="absolute top-8 lg:top-16 left-4 lg:left-10 z-20">
                <div className="bg-white/30 backdrop-blur-md rounded-full px-4 flex items-center justify-center py-2 gap-2">
                  {/* <ChatIcon2 className="pt-1" /> */}
                  <ProgressCircleIcon size={20} />
                  <span className="text-badge-homepage font-medium text-white">
                    Progress
                  </span>
                </div>

                <div className="mt-3 lg:mt-4 bg-white rounded-full px-4 flex items-center justify-center shadow-md py-2 gap-2">
                  <ChatIcon2 className="text-[#7EAC82]" size={25} />
                  <span className="text-badge-homepage font-medium text-[#7EAC82]">
                    connect
                  </span>
                </div>
              </div>

              {/* gallery card */}
              <div className="absolute -right-5.75 lg:-right-5 top-8 lg:top-10 bg-white p-3 lg:p-4 rounded-[15px] lg:rounded-[20px] shadow-lg">
                <div className="w-25 lg:w-32.5 h-15 lg:h-18.75 bg-[#EDEDED] rounded-[12px] lg:rounded-[15px]" />
                <div className="h-2.5 lg:h-3.25 rounded-full bg-[#EDEDED] mt-3 lg:mt-4" />
                <div className="w-17.5 lg:w-22.5 h-2.5 lg:h-3.25 rounded-full bg-[#EDEDED] mt-2 lg:mt-3" />
              </div>

              {/* chat bubble */}
              <div className="absolute -left-7.5 lg:-left-10 top-[40%] lg:top-[50%]">
                <div className="w-17.5 lg:w-22.5 h-17.5 lg:h-22.5 rounded-full bg-[linear-gradient(311deg,#9EC3A1,#6FA073)] flex justify-center items-center border-[3px] border-[#F4F6FB] shadow-xl">
                  <ChatIcon className="-rotate-12 w-8 h-8 lg:w-auto lg:h-auto" />
                </div>
              </div>

              <Image
                src={girlImage}
                alt="student"
                priority
                className="absolute bottom-0 w-full h-auto object-contain"
              />
            </div>

            {/* traditional */}
            <div className="space-y-4 lg:space-y-5">
              {leftData.map((item, index) => (
                <Card key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>

            {/* smart */}
            <div className="space-y-4 lg:space-y-5">
              {rightData.map((item, index) => (
                <Card
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  smart
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
