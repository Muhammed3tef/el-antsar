import UsedFurnitureService from "@/components/services/used-furniture-service";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "شراء الاثاث المستعمل بالرياض",
  description:
    "شراء الاثاث المستعمل بالرياض بأفضل الأسعار مع معاينة مجانية ودفع فوري. نشتري غرف النوم والمجالس والمطابخ وجميع أنواع الأثاث.",
  path: "/services/used-furniture",
  keywords: [
    "شراء اثاث مستعمل",
    "بيع اثاث مستعمل الرياض",
    "شراء غرف نوم مستعملة",
    "شراء مجالس مستعملة",
  ],
  image: "/imgs/service-furniture.jpg",
});

export default function UsedFurniturePage() {
  return (
    <main>
      <UsedFurnitureService />
    </main>
  );
}
