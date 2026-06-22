// components/shared/table/Pagination.tsx

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = isMobile ? 3 : 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisible - 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - (maxVisible - 2); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="h-8 sm:h-9 px-2 sm:px-4 border border-[#D0D5DD] rounded-xl body-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F9FAFB] transition-all flex items-center gap-1"
      >
        <ChevronLeft size={14} className="sm:hidden" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-1 sm:gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`
              min-w-8 sm:min-w-9 h-8 sm:h-9 px-1 sm:px-0 rounded-xl transition-all body-text 
              ${
                currentPage === page
                  ? "bg-[#6FA073] text-white"
                  : page === "..."
                    ? "cursor-default text-[#667085]"
                    : "border border-[#D0D5DD] body-text hover:bg-[#F9FAFB]"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="h-8 sm:h-9 px-2 sm:px-4 border border-[#D0D5DD] rounded-xl body-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F9FAFB] transition-all flex items-center gap-1"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={14} className="sm:hidden" />
      </button>
    </div>
  );
}
