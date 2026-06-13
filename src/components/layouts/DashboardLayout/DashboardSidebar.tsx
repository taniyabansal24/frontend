"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { sidebarItems } from "./sidebar-data";
import { useState } from "react";
import Link from "next/link";
import { useUIStore } from "@/stores/ui-store";

export default function DashboardSidebar() {
  const [openDropdowns, setOpenDropdowns] = useState(["Dashboard"]);
  const { isSidebarOpen: isOpen } = useUIStore();

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-[#EAECF0] px-3 py-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-[280px]' : 'w-[80px]'
        } min-h-screen relative`}
      >
        <div className="space-y-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdowns.includes(item.title);

            return (
              <div key={item.title}>
                {/* Parent Item */}
                <button
                  onClick={() => {
                    if (hasChildren) {
                      setOpenDropdowns((prev) =>
                        prev.includes(item.title)
                          ? prev.filter((x) => x !== item.title)
                          : [...prev, item.title],
                      );
                    }
                  }}
                  className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#344054] hover:bg-[#6FA073] hover:text-white transition-all duration-200 ${
                    !isOpen ? 'justify-center' : ''
                  }`}
                  title={!isOpen ? item.title : undefined}
                >
                  <div className={`flex items-center gap-3 ${!isOpen ? 'justify-center w-full' : ''}`}>
                    <Icon size={18} className="min-w-[18px]" />
                    {isOpen && <span className="sidebar-text whitespace-nowrap">{item.title}</span>}
                  </div>

                  {hasChildren && isOpen && (
                    isDropdownOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />
                  )}
                </button>

                {/* Children Items - Only show when sidebar is open */}
                {hasChildren && isOpen && isDropdownOpen && (
                  <div className="ml-11 mt-2 space-y-2">
                    {item.children!.map((child) => (
                      <Link
                        key={child.title}
                        href={child.path}
                        className="block w-full text-left px-3 py-2 rounded-lg body-text hover:bg-[#F2F4F7] transition-all duration-200"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}