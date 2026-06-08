import type { Metadata } from "next";
import UsedAcService from "@/components/services/used-ac-service";

export const metadata: Metadata = {
  title: "شراء المكيفات المستعملة بالرياض | الأنصار",
  description:
    "شراء المكيفات المستعملة بالرياض بأعلى الأسعار مع خدمة الفك والمعاينة المجانية والتواصل الفوري.",
};

export default function UsedAcPage() {
  return (
    <main>
      <UsedAcService />
    </main>
  );
}
