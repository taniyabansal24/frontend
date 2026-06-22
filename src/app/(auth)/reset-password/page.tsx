"use client";

import Image from "next/image";
import { Toaster } from "@/components/ui/Toast";
import { useRouter } from "next/navigation";

import { ResetPasswordForm } from "@/features/auth";
import LockIcon from "@/components/icons/LockIcon";

export default function ResetPasswordPage() {
  const router = useRouter();
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

          {/* Right Section*/}
          <div className="w-full md:w-1/2 px-8 lg:px-16 pt-24">
            <div className="w-full">
              <div className="mb-13 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-[#6FA073] flex items-center justify-center">
                  <LockIcon width={44} height={44} className="text-white" />
                </div>

                <h1 className="text-[36px] font-medium leading-10 text-[#0A0A0A] tracking-tight mt-8">
                  Set New Password
                </h1>

                <p className="text-[18px] leading-7 text-[#717182] font-normal mt-3">
                  Your new password must be different from previously used
                  passwords
                </p>
              </div>

              <ResetPasswordForm />

              {/* Cancel Button with underline on hover */}
              <div className="pt-6 mx-auto text-center">
                {/* Back */}
                <button
                  onClick={() => router.push("/login")}
                  className="
            text-[#717182]
            hover:text-[#030213]
            hover:underline
            transition-all
            font-medium
            "
                >
                  ← Changed your mind? Return to the Login Page.
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
