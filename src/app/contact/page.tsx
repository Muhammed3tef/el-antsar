import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/contact/contact-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "تواصل معنا",
  description:
    "تواصل مع الأنصار لبيع أثاثك ومكيفاتك ومعداتك المستعملة في الرياض. معاينة مجانية ودفع فوري عبر الهاتف والواتساب.",
  path: "/contact",
  keywords: ["تواصل الأنصار", "رقم شراء اثاث مستعمل الرياض"],
});

export default function ContactPage() {
  return (
    <main className="pt-[76px]">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
