"use client";

import DashboardHeader from "@/components/layouts/DashboardLayout/DashboardHeader";
import DashboardSidebar from "@/components/layouts/DashboardLayout/DashboardSidebar";
import { useUIStore } from "@/stores/ui-store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useUIStore();

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      
      {/* Header */}
      <DashboardHeader />

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <DashboardSidebar />

        {/* Content */}
        <main className={`flex-1 p-6 overflow-auto transition-all duration-300 ${!isSidebarOpen ? 'ml-0' : ''}`}>
          {children}
        </main>

      </div>

    </div>
  );
}