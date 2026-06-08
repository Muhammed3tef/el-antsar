import Hero from "@/components/hero/hero";
import ServiceAreasSection from "@/components/areas/service-areas-section";
import FAQSection from "@/components/faq/faq-section";
import HowWeWorkSection from "@/components/how-we-work/how-we-work-section";
import ServicesSection from "@/components/services/services-section";
import WhyChooseSection from "@/components/why-choose/why-choose-section";
import CallSection from "@/components/call/call-section";
import JsonLd from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getFaqPageSchema } from "@/lib/seo/structured-data";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  keywords: [
    "شراء اثاث مستعمل",
    "بيع اثاث مستعمل الرياض",
    "شراء اثاث بأعلى سعر",
  ],
});

export default function Home() {
  return (
    <main>
      <JsonLd data={getFaqPageSchema()} />
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
