import { FooterLink } from "@/types/footer";

export const quickLinks: FooterLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "اتصل بنا", href: "/contact" },
  { label: "المدونة", href: "/blog" },
  { label: "المناطق التي نخدمها", href: "/areas" },
  { label: "من نحن", href: "/about" },
];

export const footerServices: FooterLink[] = [
  { label: "شراء اثاث مستعمل", href: "/services/used-furniture" },
  { label: "شراء مكيفات مستعملة", href: "/services/used-ac" },
  { label: "شراء مطابخ مستعملة", href: "/services/used-kitchens" },
  { label: "شراء معدات مطاعم", href: "/services/used-restaurant-equipment" },
  { label: "نقل وعزل فك اثاث", href: "/services/furniture-moving" },
];
