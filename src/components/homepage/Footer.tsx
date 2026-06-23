"use client";

import Container from "@/components/ui/Container";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[#E5E7EB] bg-[#F3F4F5]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-heading-homepage font-bold text-[#6FA073]">
              RougeClasses
            </h3>

            <p className="text-caption-homepage text-[#5F6368] leading-7 mt-4 max-w-[320px]">
              The complete operating system for coaching institutes. Manage
              attendance, tests, fees, communication, and student success from
              one platform.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://www.linkedin.com/company/rougecodes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D9DFDA] flex items-center justify-center text-[#4B5563] hover:bg-white hover:text-[#6FA073] hover:border-[#6FA073] transition-all"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:contact@rougecodes.com"
                className="w-10 h-10 rounded-full border border-[#D9DFDA] flex items-center justify-center text-[#4B5563] hover:bg-white hover:text-[#6FA073] hover:border-[#6FA073] transition-all"
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:+919217327326"
                className="w-10 h-10 rounded-full border border-[#D9DFDA] flex items-center justify-center text-[#4B5563] hover:bg-white hover:text-[#6FA073] hover:border-[#6FA073] transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-body-homepage font-semibold text-[#6FA073]">
              Product
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#features"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Core Features
              </a>

              <a
                href="#analytics"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                AI Analytics
              </a>

              <a
                href="#solutions"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Solutions
              </a>

              <a
                href="#contact"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-body-homepage font-semibold text-[#6FA073]">
              Solutions
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Coaching Institutes
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Teachers
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Students & Parents
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Mobile App
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-body-homepage font-semibold text-[#6FA073]">
              Company
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                About Us
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="text-caption-homepage text-[#4B5563] hover:text-[#6FA073] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-body-homepage font-semibold text-[#6FA073]">
              Get in Touch
            </h4>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:contact@rougecodes.com"
                className="flex items-center gap-2 text-caption-homepage text-[#4B5563]"
              >
                <Mail size={14} className="text-[#6FA073]" />
                contact@rougecodes.com
              </a>

              <a
                href="tel:+919217327326"
                className="flex items-center gap-2 text-caption-homepage text-[#4B5563]"
              >
                <Phone size={14} className="text-[#6FA073]" />
                +91 92173 27326
              </a>

              <p className="text-caption-homepage text-[#5F6368] leading-6">
                C-5, Milap Nagar, Uttam Nagar,
                <br />
                New Delhi - 110059
              </p>

              <a
                href="mailto:contact@rougecodes.com?subject=Demo%20Request"
                className="inline-flex items-center justify-center mt-2 h-10 px-5 rounded-full bg-[#6FA073] text-white text-caption-homepage hover:bg-[#5F8E63] transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#E1E5E2] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption-homepage text-[#6B7280]">
            © 2026 EduManage. All rights reserved.
          </p>

          <p className="text-caption-homepage text-[#6B7280]">
            Built for modern coaching institutes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
