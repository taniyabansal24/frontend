// import AIAnalytics from "@/components/homepage/AIAnalytics";
import InstituteAppSection from "@/components/homepage/InstituteAppSection";
import ComparisonSection from "@/components/homepage/comparison-section";
import CoreFeatures from "@/components/homepage/CoreFeatures";
import Feature from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import InstituteManagement from "@/components/homepage/InstituteManagement";
import Navbar from "@/components/homepage/Navbar";
import RoleBasedAccess from "@/components/homepage/RoleBasedAccess";
import AIAnalytics from "@/components/homepage/AIAnalytics";
import PredictiveIntelligence from "@/components/homepage/PredictiveIntelligence";
import ParadigmShift from "@/components/homepage/ParadigmShift";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import CTASection from "@/components/homepage/CTASection";
import Footer from "@/components/homepage/Footer";
// import TrustedBy from "@/components/homepage/TrustedBy";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* <TrustedBy /> */}
      <Feature />

      <div id="features">
        <CoreFeatures />
      </div>

      <div id="analytics">
        <AIAnalytics />
      </div>

      <ComparisonSection />
      <div id="solutions">
        <RoleBasedAccess />
        <InstituteManagement />
        <PredictiveIntelligence />
      </div>

      <ParadigmShift />

      <div className="py-28 lg:py-32 ">
        <InstituteAppSection />
      </div>

      <TestimonialSection />

      <CTASection />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
