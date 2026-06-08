import UsedKitchensService from "@/components/services/used-kitchens-service";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "شراء المطابخ المستعملة بالرياض",
  description:
    "شراء المطابخ المستعملة بالرياض بأفضل الأسعار مع معاينة مجانية ودفع نقدي فوري. نشتري المطابخ الخشبية والألومنيوم وجميع الموديلات.",
  path: "/services/used-kitchens",
  keywords: [
    "شراء مطابخ مستعملة",
    "بيع مطبخ مستعمل الرياض",
    "شراء مطابخ ايكيا مستعملة",
  ],
  image: "/imgs/service-kitchen.jpg",
});

export default function UsedKitchensPage() {
  return (
    <main>
      <UsedKitchensService />
    </main>
  );
}
