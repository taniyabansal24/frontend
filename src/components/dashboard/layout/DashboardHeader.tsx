//components/dashboard/layout/DashboardHeader.tsx
"use client";

import { Bell, MessageSquare, Search, Menu, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserProfileDropdown from "./UserProfileDropdown";

interface DashboardHeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

export default function DashboardHeader({ title, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="h-[72px] border-b bg-white px-5 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Sidebar toggle */}
        <button 
          onClick={onMenuClick}
          className="btn btn-ghost btn-sm p-0 min-h-0 h-auto hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
        >
          <Menu size={18} className="text-[#667085]" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] border border-[#6FA073] flex items-center justify-center text-[12px] font-medium text-[#6FA073]">
            EC
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#101828]">
              Elite Coaching
            </h2>
            <p className="text-[11px] text-[#667085]">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Center Search Section */}
      <div className="hidden lg:flex flex-1 max-w-[620px] mx-8">
        <div className="relative w-full">
          <Search
            size={18}
            strokeWidth={2}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3] z-10"
          />

          <input
            type="text"
            placeholder="Search students, teachers, batches, payments, tests..."
            className="w-full h-[44px] rounded-[10px] border-2 border-[#E4E7EC] bg-white pl-12 pr-4 text-[14px] text-[#344054] placeholder:text-[#98A2B3] outline-none focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <button className="relative w-9 h-9 rounded-full border-2 border-[#6FA073] flex items-center justify-center hover:bg-[#6FA073]/10 transition-all duration-200">
          <Bell size={16} className="text-[#6FA073]" />
          <span className="absolute top-[-2px] right-[1px] w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Chat Button */}
        <button className="w-9 h-9 rounded-full border-2 border-[#6FA073] flex items-center justify-center hover:bg-[#6FA073]/10 transition-all duration-200">
          <MessageSquare size={16} className="text-[#6FA073]" />
        </button>

        {/* User Profile */}
        <UserProfileDropdown
          user={{
            name: "Sahil Admin",
            email: "admin@elite.com",
            role: "Super Admin",
          }}
        />
      </div>
    </header>
  );
}