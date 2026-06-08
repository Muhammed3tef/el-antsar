import AboutCompanyIntroSection from "@/components/about/about-company-intro-section";
import AboutCtaSection from "@/components/about/about-cta-section";
import AboutHero from "@/components/about/about-hero";
import AboutValuesSection from "@/components/about/about-values-section";
import AboutVisionMissionSection from "@/components/about/about-vision-mission-section";

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
