import { contactInfo } from "@/data/contact-info";
import { Service } from "@/types/service";
import { IoBedOutline } from "react-icons/io5";
import { LuCookingPot, LuSofa, LuWind } from "react-icons/lu";
import { PiArmchair, PiForkKnife } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

type HomeService = Omit<Service, "detailedDescription">;

export const homeServices: HomeService[] = [
  {
    icon: LuSofa,
    img: "/imgs/service-furniture.jpg",
    title: "شراء أثاث مستعمل بالرياض",
    description:
      "نشتري جميع أنواع الأثاث المستعمل بأفضل الأسعار - غرف نوم، صالونات، طاولات، كنب وجميع قطع الأثاث",
    to: "/services/used-furniture",
  },
  {
    icon: LuWind,
    img: "/imgs/service-ac.jpg",
    title: "شراء مكيفات مستعملة",
    description:
      "شراء جميع أنواع المكيفات المستعملة - سبليت، شباك، مركزي - بأعلى الأسعار في الرياض",
    to: "/services/used-ac",
  },
  {
    icon: LuCookingPot,
    img: "/imgs/service-kitchen.jpg",
    title: "شراء مطابخ مستعملة",
    description:
      "نشتري المطابخ المستعملة بجميع أنواعها - ألمنيوم، خشب، رخام - مع التفكيك والنقل",
    to: "/services/used-kitchens",
  },
  {
    icon: IoBedOutline,
    img: "/imgs/service-bedroom.jpg",
    title: "شراء غرف نوم مستعملة",
    description:
      "شراء غرف النوم المستعملة بجميع أحجامها وأنواعها - ماستر، أطفال، مفردة",
    to: contactInfo.whatsappLink,
  },
  {
    icon: PiArmchair,
    img: "/imgs/service-majlis.jpg",
    title: "شراء مجالس مستعملة",
    description: "شراء المجالس العربية والحديثة بأفضل الأسعار في الرياض",
    to: contactInfo.whatsappLink,
  },
  {
    icon: PiForkKnife,
    img: "/imgs/service-restaurant.jpg",
    title: "شراء معدات مطاعم مستعملة",
    description:
      "نشتري جميع معدات المطاعم والكافيهات - ثلاجات، أفران، معدات تحضير",
    to: "/services/used-restaurant-equipment",
  },
  {
    icon: CiDeliveryTruck,
    img: "/imgs/service-moving.jpg",
    title: "فك وتركيب ونقل أثاث",
    description:
      "خدمات فك وتركيب ونقل الأثاث بطريقة احترافية وآمنة في جميع أنحاء الرياض",
    to: "/services/furniture-moving",
  },
];
