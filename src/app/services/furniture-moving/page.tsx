import type { Metadata } from "next";
import FurnitureMovingService from "@/components/services/furniture-moving-service";

export const metadata: Metadata = {
  title: "نقل وفك وتركيب الاثاث بالرياض | الأنصار",
  description:
    "خدمات احترافية لنقل وفك وتركيب الاثاث في الرياض - فريق متخصص، معدات حديثة، أسعار منافسة.",
};

export default function FurnitureMovingPage() {
  return (
    <main>
      <FurnitureMovingService />
    </main>
  );
}
