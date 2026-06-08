import type { Metadata } from "next";
import UsedRestaurantEquipmentService from "@/components/services/used-restaurant-equipment-service";

export const metadata: Metadata = {
  title: "شراء معدات مطاعم مستعملة بالرياض | الأنصار",
  description:
    "شراء معدات مطاعم وكافيهات مستعملة بالرياض بأفضل الأسعار مع تواصل فوري عبر الهاتف والواتساب.",
};

export default function UsedRestaurantEquipmentPage() {
  return (
    <main>
      <UsedRestaurantEquipmentService />
    </main>
  );
}
