// src/app/loading.tsx
// Global loading UI — shown by Next.js during route transitions

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 rounded-full border-4 border-[#6FA073]/20 border-t-[#6FA073] animate-spin" />

        <p className="body-text">Loading...</p>
      </div>
    </div>
  );
}