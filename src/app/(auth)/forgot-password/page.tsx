"use client";

import { useState } from "react";

import Image from "next/image";

import banner from "../../../../public/banner.jpg";

import Container from "@/components/ui/Container";

import { Toaster } from "@/components/ui/Toast";

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

import ForgotPasswordHelp from "@/components/forms/ForgotPasswordHelp";

import EmailSent from "@/components/forms/EmailSent";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Toaster />

      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full overflow-hidden bg-white flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="hidden md:flex md:w-1/2 bg-[#6FA073] px-24 pt-20 flex-col">
            {/* Logo + shapes */}
            <div className="absolute left-29.25 top-12.5">
              <span className="font-['Inter'] font-normal text-[16px] leading-4.75 text-white/50">
                Logo
              </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute left-10.25 top-9.75 w-19 h-18">
              <div className="w-13.25 h-13.25 bg-[rgba(176,195,178,0.2)] rounded-[5px] absolute left-0 top-0" />
              <div className="w-11.5 h-11.5 bg-[rgba(217,217,217,0.2)] rounded-full absolute left-7.5 top-6.5" />
            </div>

            {/* Text content */}
            <div className="mt-28">
              <h2 className="text-white text-[48px] font-bold leading-tight">
                Manage your Coaching the best way
              </h2>

              <p className="text-white/80 mt-6 text-sm leading-6 max-w-85">
                Awesome, we&apos;ve created the perfect place for you to store
                all your documents
              </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center items-end mt-4">
              <Image
                src="/image.png"
                alt="academy"
                width={420}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 px-8 lg:px-16 pt-24">
            {!isSubmitted ? (
              <div className="w-full">
                <div className="mb-13 text-center lg:text-left">
                  <h1 className="text-[36px] font-medium leading-10 text-[#0A0A0A] tracking-tight">
                    Forgot Password?
                  </h1>

                  <p className="text-[18px] leading-7 text-[#717182] font-normal mt-3">
                    Enter your organization code and login ID to receive reset
                    instructions
                  </p>
                </div>

                <ForgotPasswordForm onSuccess={() => setIsSubmitted(true)} />

                <ForgotPasswordHelp />
              </div>
            ) : (
              <EmailSent />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
