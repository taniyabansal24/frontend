// src/components/layouts/DashboardLayout/DashboardHeader.tsx
"use client";

import { Bell, MessageSquare, Search, Menu } from "lucide-react";
import UserProfileDropdown from "./UserProfileDropdown";
import { useUIStore } from "@/stores/ui-store";
import { useCurrentUser } from "@/features/auth/api/queries";

export default function DashboardHeader() {
  const { toggleSidebar } = useUIStore();

  const { data: user } = useCurrentUser();

  return (
    <header className="h-18 border-b bg-white px-5 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Sidebar toggle */}
        <button
          onClick={toggleSidebar}
          className="btn btn-ghost btn-sm min-h-0 h-auto hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
        >
          <Menu size={18} className="text-[#667085]" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] border border-[#6FA073] flex items-center justify-center caption text-[#6FA073]">
            {user?.tenant?.name
              ?.split(" ")
              .map((word: string) => word[0])
              .slice(0, 2)
              .join("")
              .toUpperCase() ?? "EC"}
          </div>

          <div>
            <h2 className="card-title text-[#101828]">
              {user?.tenant?.name ?? "Elite Coaching"}
            </h2>
            <p className="caption text-[#667085]">
              {user?.user?.role
                ?.replaceAll("_", " ")
                .toLowerCase()
                .replace(/\b\w/g, (c: string) => c.toUpperCase()) ??
                "Admin Dashboard"}
            </p>
          </div>
        </div>
      </div>

      {/* Center Search Section */}
      <div className="hidden lg:flex flex-1 max-w-155 mx-8">
        <div className="relative w-full">
          <Search
            size={18}
            strokeWidth={2}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3] z-10"
          />

          <input
            type="text"
            placeholder="Search students, teachers, batches, payments, tests..."
            className="w-full h-11 rounded-[10px] border-2 border-[#E4E7EC] bg-white pl-12 pr-4 body-text text-[#344054] placeholder:text-[#98A2B3] outline-none focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <button className="relative w-9 h-9 rounded-full border-2 border-[#6FA073] flex items-center justify-center hover:bg-[#6FA073]/10 transition-all duration-200">
          <Bell size={16} className="text-[#6FA073]" />
          <span className="absolute -top-0.5 right-px w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Chat Button */}
        <button className="w-9 h-9 rounded-full border-2 border-[#6FA073] flex items-center justify-center hover:bg-[#6FA073]/10 transition-all duration-200">
          <MessageSquare size={16} className="text-[#6FA073]" />
        </button>

        {/* User Profile */}
        <UserProfileDropdown
          user={{
            name: user?.user?.name ?? "",
            email: user?.user?.email ?? "",
            role:
              user?.user?.role
                ?.replaceAll("_", " ")
                .toLowerCase()
                .replace(/\b\w/g, (c: string) => c.toUpperCase()) ??
              "Admin Dashboard",
          }}
        />
      </div>
    </header>
  );
}
