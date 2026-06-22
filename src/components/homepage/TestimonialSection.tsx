"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import testimonialUser from "../../../public/testimonial-Image.jpg";
import QuoteIcon from "../icons/QuoteIcon";

export default function TestimonialSection() {
  return (
    <section className="py-32 bg-[#F3F4F5]">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Quote Icon */}
          <QuoteIcon className="text-[#FFB358]" size={48} />

          {/* Testimonial */}
          <p
            className="
              text-body-homepage
              italic
              text-[#303042]
              max-w-225
              mt-8
            "
          >
            Transitioning to EduManage was one of the best decisions for our
            institute. We streamlined daily operations, improved communication,
            and enhanced student engagement within just a few months. It&apos;s
            more than software—it&apos;s a complete growth platform.
          </p>

          {/* User */}
          <div className="mt-14 flex flex-col items-center">
            <div
              className="
                w-18
                h-18
                rounded-full
                overflow-hidden
                border-4
                border-white
                shadow-lg
              "
            >
              <Image
                src={testimonialUser}
                alt="Institute Director"
                width={72}
                height={72}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-body-homepage font-semibold text-[#303042] mt-5">
              Dr. Alistair Vance
            </h4>

            <p className="text-caption-homepage text-[#6B7280] mt-1">
              Director, Vance Global Institute
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}