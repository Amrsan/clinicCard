import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ClinicsSection from "@/components/ClinicsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HealthCTASection from "@/components/HealthCTASection";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import AboutUs from "./AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen font-cairo">
      
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <ClinicsSection />
        <TestimonialsSection />
        <HealthCTASection />
      </main>
      
      <ContactButtons />
    </div>
  );
};

export default Index;
