"use client";

import { useRouter } from "next/navigation";
import MailIcon from "@/components/icons/MailIcon";


export default function EmailSent() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center text-center py-10">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-[#6FA073] flex items-center justify-center">
        <MailIcon className="text-white" />
      </div>

      {/* Heading */}
      <h1 className="heading text-[#0A0A0A] mt-8">
        Email Sent Successfully!
      </h1>

      {/* Description */}
      <p className="body-text text-[#717182] mt-4 max-w-sm leading-6">
        We&apos;ve sent password reset instructions to your registered contact information. Please check your email or SMS and follow the link to reset your password.
      </p>

      {/* Info Box */}
      <div className="w-full bg-[#F7F7F8] rounded-2xl p-6 mt-10">
        <p className="card-title text-[#0A0A0A]">
          Didn&apos;t receive the email?
        </p>

        <p className="caption text-[#717182] mt-2">
          Check your spam folder or wait a few minutes for
          the email to arrive.
        </p>

        <button className="mt-5 card-title text-[#030213] hover:underline">
          Try again with different details
        </button>
      </div>

      {/* Back */}
      <button
        onClick={() => router.push("/login")}
        className="mt-8 card-title text-[#6FA073] hover:underline"
      >
        ← Back to Login
      </button>
    </div>
  );
}