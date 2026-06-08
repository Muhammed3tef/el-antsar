import type { Metadata } from "next";
import ServicesSection from "@/components/services/services-section";

export const metadata: Metadata = {
  title: "خدماتنا | الأنصار",
  description:
    "تعرف على خدمات الأنصار لشراء الأثاث والمكيفات والمطابخ والمعدات المستعملة في الرياض.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesSection />
    </main>
  );
}
