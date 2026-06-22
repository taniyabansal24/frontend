"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { sidebarItems } from "./sidebar-data";
import { useUIStore } from "@/stores/ui-store";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const { isSidebarOpen: isOpen } = useUIStore();

  const [manualDropdown, setManualDropdown] = useState("");

  const activeDropdown =
    sidebarItems.find((item) =>
      item.children?.some((child) => pathname === child.path),
    )?.title ?? "";

  const openDropdown = manualDropdown || activeDropdown;

  return (
    <aside
      className={`bg-white border-r border-[#EAECF0] px-3 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen ? "w-70" : "w-20"
      } min-h-screen relative`}
    >
      <div className="space-y-3">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          const hasChildren = !!item.children?.length;

          const isDropdownOpen = openDropdown === item.title;

          return (
            <div key={item.title}>
              {/* Parent */}
              <button
                onClick={() => {
                  if (!hasChildren) return;

                  setManualDropdown(isDropdownOpen ? "" : item.title);
                }}
                className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ease-out ${
                  isDropdownOpen
                    ? "bg-[#6FA073] text-white"
                    : "text-[#344054] hover:bg-[#6FA073] hover:text-white"
                } ${!isOpen ? "justify-center" : ""}`}
                title={!isOpen ? item.title : undefined}
              >
                <div
                  className={`flex items-center gap-3 ${
                    !isOpen ? "justify-center w-full" : ""
                  }`}
                >
                  <Icon size={18} className="min-w-4.5" />

                  {isOpen && (
                    <span className="sidebar-text whitespace-nowrap">
                      {item.title}
                    </span>
                  )}
                </div>

                {hasChildren && isOpen && (
                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {/* Children */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  hasChildren && isOpen
                    ? isDropdownOpen
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-11 space-y-2 pb-1">
                  {item.children?.map((child) => {
                    const isActive = pathname === child.path;

                    return (
                      <Link
                        key={child.title}
                        href={child.path}
                        className={`block px-3 py-2 rounded-lg card-title transition-all duration-200 ${
                          isActive
                            ? "bg-[#F2F4F7] text-[#6FA073] font-semibold"
                            : "text-[#344054] hover:bg-[#F2F4F7] hover:translate-x-1"
                        }`}
                      >
                        {child.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
