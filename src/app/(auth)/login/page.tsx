"use client";

import Image from "next/image";
import { Toaster } from "@/components/ui/Toast";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Toaster />

      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full overflow-hidden bg-white flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="hidden md:flex md:w-1/2 bg-[#6FA073] px-24 py-20 flex-col">
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

          {/* Right Section */}
          <div className="w-full md:w-1/2 px-8 lg:px-16 py-12">
            <div className="mb-10">
              <h1 className="text-[42px] font-semibold text-black">
                Welcome Back
              </h1>

              <p className="text-[#717182] mt-3 text-lg">
                Sign in to access your academy dashboard
              </p>
            </div>

            <LoginForm />

            <hr className="my-10"/>

            {/* Demo Credentials */}
            <div className="w-full rounded-[14px] bg-[rgba(236,236,240,0.5)] p-6">
              <h3 className="text-[16px] font-medium text-[#0A0A0A] mb-6">
                Demo Credentials for Testing:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 justify-between">
                {/* Organization Code */}
                <div className="justify-self-start">
                  <p className="text-[12px] text-[#717182] mb-2">
                    Organization Code
                  </p>

                  <p className="font-mono text-[14px] text-[#0A0A0A] break-words">
                    rouge-coaching-academy
                  </p>
                </div>

                {/* Login ID */}
                <div className="justify-self-center">
                  <p className="text-[12px] text-[#717182] mb-2">Login ID</p>

                  <p className="font-mono text-[14px] text-[#0A0A0A] break-words">
                    admin@rougeacademy.com
                  </p>
                </div>

                {/* Password */}
                <div className="justify-self-end">
                  <p className="text-[12px] text-[#717182] mb-2">Password</p>

                  <p className="font-mono text-[14px] text-[#0A0A0A]">
                    StrongPass@123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
