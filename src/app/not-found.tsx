// src/app/not-found.tsx
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-8xl font-bold text-[#6FA073] mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-[#101828] mb-3">
          Page not found
        </h2>

        <p className="text-[#667085] text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href={ROUTES.dashboard}
            className="px-6 py-3 bg-[#6FA073] text-white rounded-xl font-medium hover:bg-[#5d8a61] transition-all duration-200"
          >
            Go to Dashboard
          </Link>

          <Link
            href={ROUTES.home}
            className="px-6 py-3 border border-[#EAECF0] text-[#344054] rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
