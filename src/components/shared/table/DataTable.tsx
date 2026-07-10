// src/components/shared/table/DataTable.tsx
"use client";

import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { DataTableProps } from "./table-types";
import RowActions from "./RowActions";

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  rowsPerPage = 5,
  editFields,
  customEdit = false,
  onEdit,
  onDelete,
  onView,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState<"table" | "cards">("table");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const gridColumns = columns
    .map((column) => column.width || "minmax(140px,1fr)")
    .join(" ");

  // Helper to render cell content
  const renderCellContent = (row: T, column: any) => {
    if (column.key === "actions") {
      return (
        <div className="flex justify-center w-full">
          <RowActions
            row={row}
            editFields={editFields}
            customEdit={customEdit}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        </div>
      );
    }

    const value = row[column.key as keyof T];

    if (value === null || value === undefined) {
      return "-";
    }

    // Check if it's a URL
    const stringValue = String(value);
    const isUrl = stringValue.startsWith("http://") || stringValue.startsWith("https://");

    if (isUrl) {
      return (
        <a
          href={stringValue}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline break-all"
        >
          {stringValue}
        </a>
      );
    }

    return stringValue;
  };

  return (
    <div className="bg-white rounded-[20px] border border-[#EAECF0] overflow-visible">
      {/* Mobile Toggle */}
      {isMobile && (
        <div className="flex gap-2 p-3 border-b border-[#EAECF0] bg-gray-50">
          <button
            onClick={() => setMobileView("table")}
            className={`flex-1 py-2 card-title rounded-lg transition-all ${
              mobileView === "table"
                ? "bg-[#6FA073] text-white"
                : "bg-white text-[#667085] border border-[#EAECF0]"
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setMobileView("cards")}
            className={`flex-1 py-2 card-title rounded-lg transition-all ${
              mobileView === "cards"
                ? "bg-[#6FA073] text-white"
                : "bg-white text-[#667085] border border-[#EAECF0]"
            }`}
          >
            Card View
          </button>
        </div>
      )}

      {/* Mobile Card View */}
      {isMobile && mobileView === "cards" ? (
        <div className="p-4 space-y-4">
          {currentData.map((row, index) => (
            <div
              key={index}
              className="bg-white border border-[#EAECF0] rounded-md p-4 shadow-sm"
            >
              {columns.map((column) => (
                <div key={column.key} className="mb-3 last:mb-0">
                  <div className="caption mb-1">{column.title}</div>
                  <div className="body-text break-words">
                    {renderCellContent(row, column)}
                  </div>
                </div>
              ))}
            </div>
          ))}
          {currentData.length === 0 && (
            <div className="py-12 text-center">
              <p className="body-text">No data available</p>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Table View */
        <div className="overflow-x-auto overflow-y-visible w-full">
          <div className="w-full">
            {/* Header */}
            <div
              className="bg-[#F9FAFB] border-b border-[#EAECF0] min-h-[56px] px-6 grid items-center rounded-t-2xl gap-x-8"
              style={{
                gridTemplateColumns: gridColumns,
              }}
            >
              {columns.map((column) => (
                <div
                  key={column.key}
                  className={`card-title uppercase tracking-[1px] ${
                    column.key === "actions" ? "text-center" : ""
                  }`}
                >
                  {column.title}
                </div>
              ))}
            </div>

            {/* Rows */}
            {currentData.map((row, index) => (
              <div
                key={index}
                className="relative min-h-[72px] py-4 px-6 border-b border-[#EAECF0] grid items-start gap-x-8 hover:bg-[#FCFCFD] transition-all"
                style={{
                  gridTemplateColumns: gridColumns,
                }}
              >
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className={`body-text break-words whitespace-normal leading-7 ${
                      column.key === "actions"
                        ? "flex items-center justify-center"
                        : "flex items-start"
                    }`}
                  >
                    {renderCellContent(row, column)}
                  </div>
                ))}
              </div>
            ))}

            {/* Empty State */}
            {currentData.length === 0 && (
              <div className="py-12 text-center">
                <p className="body-text">No data available</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="h-auto md:h-20 px-4 md:px-8 py-4 md:py-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EAECF0]">
        <p className="caption">
          Showing {data.length > 0 ? startIndex + 1 : 0} to{" "}
          {Math.min(endIndex, data.length)} of {data.length} results
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}