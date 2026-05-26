import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const inputClass = "w-full h-[52px] bg-[#F3F3F5] border border-black/10 rounded-[12px] px-4 text-[16px] text-[#0A0A0A] placeholder:text-[rgba(10,10,10,0.5)] placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-[#030213] focus:bg-white transition-all";