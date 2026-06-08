import FurnitureMovingService from "@/components/services/furniture-moving-service";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "نقل وفك وتركيب الاثاث بالرياض",
  description:
    "خدمة نقل وفك وتركيب الأثاث في الرياض بفريق محترف ومعدات حديثة. نقل آمن لجميع أنواع الأثاث مع حماية القطع أثناء النقل.",
  path: "/services/furniture-moving",
  keywords: [
    "نقل اثاث الرياض",
    "فك وتركيب اثاث",
    "شركة نقل اثاث الرياض",
  ],
  image: "/imgs/service-moving.jpg",
});

export default function FurnitureMovingPage() {
  return (
    <main>
      <FurnitureMovingService />
    </main>
  );
}
