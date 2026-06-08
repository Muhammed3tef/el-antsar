import { contactInfo } from "@/data/contact-info";

export const siteConfig = {
  name: "الأنصار",
  legalName: "شركة الأنصار لشراء الأثاث المستعمل",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.el-antsaar.com",
  defaultTitle: "شراء الاثاث المستعمل بالرياض",
  defaultDescription:
    "نشتري جميع أنواع الاثاث والمكيفات والمطابخ والمجالس ومعدات المطاعم المستعملة بأفضل الأسعار في الرياض مع معاينة مجانية ودفع فوري.",
  locale: "ar_SA",
  keywords: [
    "شراء اثاث مستعمل الرياض",
    "شراء مكيفات مستعملة الرياض",
    "شراء مطابخ مستعملة",
    "شراء معدات مطاعم مستعملة",
    "نقل وفك وتركيب اثاث الرياض",
    "شراء مجالس مستعملة",
    "شراء اثاث مستعمل بأعلى سعر",
    "شركة شراء اثاث مستعمل",
    "الأنصار الرياض",
  ],
  ogImage: "/imgs/hero.jpg",
  phone: contactInfo.phone,
  phoneLink: contactInfo.phoneLink,
  whatsappLink: contactInfo.whatsappLink,
  serviceAreas: contactInfo.serviceAreas,
  workingHours: contactInfo.workingHours,
  social: {
    instagram: contactInfo.instagramLink,
    tiktok: contactInfo.tiktokLink,
  },
} as const;
