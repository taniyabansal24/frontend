// src/features/batches/components/MultiSelectField.tsx
"use client";

import { useState, useMemo } from "react";
import { ChevronDown, X, Search } from "lucide-react";

interface Option {
  id: string;
  name: string;
  description?: string;
  duration?: string;
}

interface MultiSelectFieldProps {
  label: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  searchPlaceholder?: string;
  emptyMessage?: string;
}

export default function MultiSelectField({
  label,
  options,
  value,
  onChange,
  searchPlaceholder,
  emptyMessage,
}: MultiSelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedItems = options.filter((item) => value.includes(item.id));

  const filteredOptions = useMemo(() => {
    const query = search.toLowerCase();

    return options.filter(
      (option) =>
        option.name.toLowerCase().includes(query) ||
        option.description?.toLowerCase().includes(query) ||
        option.duration?.toLowerCase().includes(query),
    );
  }, [options, search]);

  const handleSelect = (id: string) => {
    if (value.includes(id)) return;

    onChange([...value, id]);
  };

  const removeItem = (id: string) => {
    onChange(value.filter((item) => item !== id));
  };

  return (
    <div className="relative">
      <label className="card-title text-[#344054] block mb-2">{label}</label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-12 px-4 bg-white border border-[#D0D5DD] rounded-md flex items-center justify-between body-text text-[#667085]"
      >
        <span className="truncate">
          {selectedItems.length > 0
            ? `${selectedItems.length} batch${
                selectedItems.length > 1 ? "es" : ""
              } selected`
            : `Select ${label}`}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-[#EAECF0] rounded-xl shadow-lg z-50 overflow-hidden">
          {/* Search */}
          <div className="sticky top-0 bg-white p-3 border-b border-[#EAECF0]">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
              />

              <input
                autoFocus
                type="text"
                placeholder={
                  searchPlaceholder ?? `Search ${label.toLowerCase()}...`
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-9 pr-3 border border-[#D0D5DD] rounded-lg body-text text-[#101828] outline-none focus:border-[#6FA073]"
              />
            </div>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    handleSelect(option.id);

                    setSearch("");

                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-[#F9FAFB] transition-colors border-b border-[#F2F4F7] last:border-b-0"
                >
                  <div className="flex flex-col">
                    <span className="card-title text-[#101828]">
                      {option.name}
                    </span>

                    {option.description && (
                      <span className="body-text text-[#667085] mt-1">
                        {option.description}
                      </span>
                    )}

                    {option.duration && (
                      <span className="caption text-[#98A2B3] mt-1">
                        {option.duration}
                      </span>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center">
                <p className="body-text text-[#667085]">
                  {emptyMessage ?? `No ${label.toLowerCase()} found`}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Selected Items */}
      {selectedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#F2F4F7] rounded-full card-title text-[#344054]"
            >
              <span className="max-w-45 truncate">{item.name}</span>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-[#667085] hover:text-red-500"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
