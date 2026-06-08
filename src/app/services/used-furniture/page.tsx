import type { Metadata } from "next";
import UsedFurnitureService from "@/components/services/used-furniture-service";

export const metadata: Metadata = {
  title: "شراء الاثاث المستعمل بالرياض | الأنصار",
  description:
    "شراء الاثاث المستعمل بالرياض بأفضل الأسعار مع تواصل فوري عبر الهاتف والواتساب.",
};

export default function UsedFurniturePage() {
  return (
    <main>
      <UsedFurnitureService />
    </main>
  );
}
