import { NavLink } from "@/types/nav-link";

export const navLinks: NavLink[] = [
  {
    href: "/",
    name: "الرئيسية",
  },
  {
    href: "/services",
    name: "خدماتنا",
    children: [
      {
        href: "/services/used-furniture",
        name: "شراء اثاث مستعمل",
      },
      {
        href: "/services/used-ac",
        name: "شراء مكيفات مستعملة",
      },
      {
        href: "/services/used-kitchens",
        name: "شراء مطابخ مستعملة",
      },
      {
        href: "/services/used-restaurant-equipment",
        name: "شراء معدات مطاعم",
      },
      {
        href: "/services/furniture-moving",
        name: "نقل وفك وتركيب اثاث",
      },
    ],
  },
  {
    href: "/blog",
    name: "المدونة",
  },
  {
    href: "/areas",
    name: "المناطق",
  },
  {
    href: "/about",
    name: "من نحن",
  },
  {
    href: "/contact",
    name: "تواصل معنا",
  },
];
