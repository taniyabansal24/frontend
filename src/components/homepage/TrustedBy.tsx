"use client";

import Container from "@/components/ui/Container";

export default function TrustedBy() {
  const brands = [
    {
      name: "SKILL SHARE",
      className: "text-[38px] font-black leading-[0.8] w-32",
    },
    {
      name: "udemy",
      className: "text-[38px] font-bold lowercase",
    },
    {
      name: "duolingo",
      className: "text-[38px] font-bold lowercase",
    },
    {
      name: "coursera",
      className: "text-[38px] font-black lowercase",
    },
  ];

  return (
    <section className="w-full py-12">
      <Container>
        {/* Logos row */}
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-24 opacity-35">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`text-[#34364A] transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer ${brand.className}`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}