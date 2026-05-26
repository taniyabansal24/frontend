import Hero from "@/components/homepage/Hero/Hero";
import Navbar from "@/components/homepage/Navbar/Navbar";
import TrustedBy from "@/components/homepage/TrustedBy/TrustedBy";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className=" pt-20 "></div>
      <Hero />

      <div className="py-28 lg:py-32 ">
        <TrustedBy />
      </div>
    </>
  );
}
