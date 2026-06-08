import ServicesSection from "@/components/services/services-section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "خدماتنا",
  description:
    "تعرف على خدمات الأنصار لشراء الأثاث والمكيفات والمطابخ والمعدات المستعملة في الرياض بأفضل الأسعار.",
  path: "/services",
  keywords: ["خدمات شراء اثاث مستعمل", "خدمات الأنصار الرياض"],
});

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesSection />
    </main>
  );
}
