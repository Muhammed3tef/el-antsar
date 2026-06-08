import AdditionalAreasSection from "@/components/areas/additional-areas-section";
import AreasCoverageSection from "@/components/areas/areas-coverage-section";
import AreasCtaSection from "@/components/areas/areas-cta-section";
import AreasHero from "@/components/areas/areas-hero";
import AreasServiceInfoSection from "@/components/areas/areas-service-info-section";

export default function AreasPage() {
  return (
    <main className="pt-[76px]">
      <AreasHero />
      <AreasCoverageSection />
      <AdditionalAreasSection />
      <AreasServiceInfoSection />
      <AreasCtaSection />
    </main>
  );
}
