"use client";

import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div
          className="
            max-w-225
            mx-auto
            bg-white
            rounded-[36px]
            border
            border-[#ECECEC]
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            px-8
            md:px-16
            py-16
            text-center
          "
        >
          {/* Heading */}
          <h2 className="text-heading-homepage text-[#303042] font-bold">
            Ready to Transform Your Institute?
          </h2>

          {/* Description */}
          <p className="text-body-homepage text-[#5B6070] mt-6 max-w-162.5 mx-auto">
            Join hundreds of coaching institutes already using EduManage to
            streamline operations, improve student outcomes, and grow faster.
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              className="
                px-10
                md:px-14
                h-16
                rounded-full
                bg-[#6FA073]
                text-white
                shadow-[0_12px_24px_rgba(111,160,115,0.25)]
                hover:shadow-[0_16px_32px_rgba(111,160,115,0.35)]
                hover:translate-y-0.5
                transition-all
                duration-300
              "
            >
              <span className="text-body-homepage font-medium text-white">
                Book a Free Demo
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              items-center
              gap-8
              md:gap-12
            "
          >
            <span className="text-caption-homepage text-[#8A8A8A] uppercase">
              Trusted by Institutes
            </span>

            <span className="text-caption-homepage text-[#8A8A8A] uppercase">
              Secure & Reliable
            </span>

            <span className="text-caption-homepage text-[#8A8A8A] uppercase">
              24/7 Support
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}