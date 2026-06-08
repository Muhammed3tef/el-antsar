import AboutCompanyIntroSection from "@/components/about/about-company-intro-section";
import AboutCtaSection from "@/components/about/about-cta-section";
import AboutHero from "@/components/about/about-hero";
import AboutValuesSection from "@/components/about/about-values-section";
import AboutVisionMissionSection from "@/components/about/about-vision-mission-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "من نحن",
  description:
    "تعرف على شركة الأنصار، خبرتنا في شراء الأثاث والمعدات المستعملة في الرياض وقيمنا في تقديم خدمة سريعة وموثوقة.",
  path: "/about",
  keywords: ["شركة الأنصار", "من نحن الأنصار"],
});

export default function AboutPage() {
  return (
    <main className="pt-[76px]">
      <AboutHero />
      <AboutCompanyIntroSection />
      <AboutValuesSection />
      <AboutVisionMissionSection />
      <AboutCtaSection />
    </main>
  );
}
