import UsedRestaurantEquipmentService from "@/components/services/used-restaurant-equipment-service";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "شراء معدات مطاعم مستعملة بالرياض",
  description:
    "شراء معدات المطاعم والكافيهات المستعملة في الرياض بأعلى الأسعار. ثلاجات وأفران ومعدات تحضير وغسالات صناعية.",
  path: "/services/used-restaurant-equipment",
  keywords: [
    "شراء معدات مطاعم مستعملة",
    "بيع معدات مطعم الرياض",
    "شراء ثلاجات مطاعم مستعملة",
  ],
  image: "/imgs/service-restaurant.jpg",
});

export default function UsedRestaurantEquipmentPage() {
  return (
    <main>
      <UsedRestaurantEquipmentService />
    </main>
  );
}
