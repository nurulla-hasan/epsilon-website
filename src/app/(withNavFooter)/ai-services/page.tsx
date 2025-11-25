import HeroSection from "@/components/ai-service/HeroSection";
import DataSection from "@/components/ai-service/DataSection";
import ServicesSection from "@/components/ai-service/ServicesSection";
import CTASection from "@/components/ai-service/CTASection";

const AiServicesPage = () => {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      <DataSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
};

export default AiServicesPage;