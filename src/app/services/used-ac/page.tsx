import UsedAcService from "@/components/services/used-ac-service";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "شراء المكيفات المستعملة بالرياض",
  description:
    "شراء المكيفات المستعملة بالرياض بأعلى الأسعار مع خدمة الفك والمعاينة المجانية. نشتري السبليت والشباك والمكيفات المركزية.",
  path: "/services/used-ac",
  keywords: [
    "شراء مكيفات مستعملة",
    "بيع مكيف مستعمل الرياض",
    "شراء مكيف سبليت مستعمل",
  ],
  image: "/imgs/service-ac.jpg",
});

export default function UsedAcPage() {
  return (
    <main>
      <UsedAcService />
    </main>
  );
}
