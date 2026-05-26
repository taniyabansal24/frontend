//dashboard/layout.tsx
"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      
      {/* Header */}
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} />

        {/* Content */}
        <main className={`flex-1 p-6 overflow-auto transition-all duration-300 ${!isSidebarOpen ? 'ml-0' : ''}`}>
          {children}
        </main>

      </div>

    </div>
  );
}