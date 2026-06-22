// src/app/not-found.tsx
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-[#6FA073] mb-4">
          404
        </h1>

        <h2 className="heading mb-3">Page not found</h2>

        <p className="body-text mb-8">
          The page you are looking for could not be found.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href={ROUTES.dashboard}
            className="px-6 py-3 bg-[#6FA073] text-white rounded-xl card-title hover:bg-[#5d8a61] transition-all duration-200"
          >
            Go to Dashboard
          </Link>

          <Link
            href={ROUTES.home}
            className="px-6 py-3 border border-[#EAECF0] text-[#344054] rounded-xl card-title hover:bg-gray-50 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
