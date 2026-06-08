import Hero from "@/components/hero/hero";
import ServiceAreasSection from "@/components/areas/service-areas-section";
import FAQSection from "@/components/faq/faq-section";
import HowWeWorkSection from "@/components/how-we-work/how-we-work-section";
import ServicesSection from "@/components/services/services-section";
import WhyChooseSection from "@/components/why-choose/why-choose-section";
import CallSection from "@/components/call/call-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseSection />
      <ServiceAreasSection />
      <HowWeWorkSection />
      <FAQSection />
      <CallSection />
    </main>
  );
}
