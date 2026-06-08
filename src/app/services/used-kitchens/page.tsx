import type { Metadata } from "next";
import UsedKitchensService from "@/components/services/used-kitchens-service";

export const metadata: Metadata = {
  title: "شراء المطابخ المستعملة بالرياض | الأنصار",
  description:
    "شراء المطابخ المستعملة بالرياض بأفضل الأسعار مع خدمة الفك المجانية والدفع الفوري.",
};

export default function UsedKitchensPage() {
  return (
    <main>
      <UsedKitchensService />
    </main>
  );
}
