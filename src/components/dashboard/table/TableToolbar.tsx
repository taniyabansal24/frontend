// components/dashboard/table/TableToolbar.tsx
"use client";

import { Search, Filter, Download, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function TableToolbar() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        {/* Search and Filters Section */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isMobile ? "Search..." : "Search students, teachers, batches..."}
              className="w-full md:w-[280px] lg:w-[480px] h-[40px] pl-10 pr-4 rounded-xl border border-[#EAECF0] focus:outline-none focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 transition-all text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full md:w-[96px] h-[38px] flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] rounded-[10px] hover:bg-[#F9FAFB] transition-all"
          >
            <Filter size={16} strokeWidth={1.8} className="text-[#4A5565]" />
            <span className="text-[14px] font-medium text-[#344054]">
              Filters
            </span>
          </button>
        </div>

        {/* Export Button - Always visible */}
        <button className="bg-[#6FA073] text-white border-none rounded-xl hover:bg-[#5d8a61] transition-all px-3 sm:px-4 py-2 flex items-center justify-center gap-2 text-sm whitespace-nowrap min-w-[80px] sm:min-w-[100px]">
          <Download size={16} />
          <span>Export</span>
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-5 p-4 bg-gray-50 rounded-lg border border-[#EAECF0]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-[#101828]">Filter Students</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="p-1 hover:bg-gray-200 rounded-lg transition-all"
            >
              <X size={16} className="text-[#667085]" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <select className="w-full p-2 border border-[#EAECF0] rounded-lg text-sm bg-white">
              <option value="">All Batches</option>
              <option>JEE 2026 A</option>
              <option>Neet 2026 A</option>
              <option>JEE 2026 B</option>
              <option>Neet 2026 B</option>
            </select>
            <select className="w-full p-2 border border-[#EAECF0] rounded-lg text-sm bg-white">
              <option value="">All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
            <select className="w-full p-2 border border-[#EAECF0] rounded-lg text-sm bg-white">
              <option value="">Attendance Range</option>
              <option>Above 90%</option>
              <option>80% - 90%</option>
              <option>Below 80%</option>
            </select>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#6FA073] text-white rounded-lg py-2 text-sm hover:bg-[#5d8a61] transition-all">
                Apply
              </button>
              <button className="flex-1 border border-[#EAECF0] rounded-lg py-2 text-sm hover:bg-gray-100 transition-all">
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}