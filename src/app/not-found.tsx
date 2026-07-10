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

        <div className="flex justify-center gap-3">
          <Link
            href={ROUTES.dashboard}
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl card-title bg-[#6FA073] text-white transition-all duration-200 hover:bg-[#5f8d63] active:scale-95 active:bg-[#567f5a] focus:outline-none focus:ring-2 focus:ring-[#6FA073]/40"
          >
            Go to Dashboard
          </Link>

          <Link
            href={ROUTES.home}
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl card-title border border-gray-300 bg-white text-[#344054] transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
