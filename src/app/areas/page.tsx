import AdditionalAreasSection from "@/components/areas/additional-areas-section";
import AreasCoverageSection from "@/components/areas/areas-coverage-section";
import AreasCtaSection from "@/components/areas/areas-cta-section";
import AreasHero from "@/components/areas/areas-hero";
import AreasServiceInfoSection from "@/components/areas/areas-service-info-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "مناطق الخدمة",
  description:
    "نغطي الرياض والخرج والمزاحمية والقويعية والمناطق المجاورة. خدمة شراء الأثاث والمعدات المستعملة مع وصول سريع.",
  path: "/areas",
  keywords: [
    "شراء اثاث مستعمل الرياض",
    "شراء اثاث الخرج",
    "شراء اثاث المزاحمية",
    "شراء اثاث القويعية",
  ],
});

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
