import { AboutCompanyIntro, AboutUs, AboutVisionMission } from "@/types/about";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuAward, LuClock3, LuTarget, LuUsers } from "react-icons/lu";
import { WiTime4 } from "react-icons/wi";

export const aboutHeroContent = {
  title: "من نحن",
  description:
    "شركة الانتصار الرائدة في شراء الاثاث والمعدات المستعملة بالرياض",
  backgroundImage: "/imgs/service-bedroom.jpg",
};

export const aboutCompanyIntro: AboutCompanyIntro = {
  title: "شركة الانتصار لشراء الاثاث المستعمل",
  paragraphs: [
    {
      before: "نحن شركة ",
      highlight: "الانتصار",
      after:
        "، إحدى الشركات الرائدة في مجال شراء الاثاث والمعدات المستعملة في مدينة الرياض والمناطق المحيطة. منذ تأسيسنا، كنا ملتزمين بتقديم أفضل الخدمات لعملائنا وبناء علاقات طويلة الأمد معهم من خلال الشفافية والمصداقية.",
    },
    "نفخر بأننا نقدم أعلى الأسعار في السوق السعودي لشراء جميع أنواع الاثاث المستعمل، المكيفات، المطابخ، المجالس، معدات المطاعم، والأجهزة الكهربائية. فريقنا المتخصص يضم خبراء في تقييم الاثاث والمعدات، مما يضمن حصولك على سعر عادل يعكس القيمة الحقيقية لممتلكاتك.",
    "نوفر خدمات شاملة تشمل الفك، التركيب، النقل، والتحميل بشكل احترافي. نستخدم أحدث المعدات والأدوات لضمان سلامة القطع أثناء النقل. خدماتنا متاحة في جميع أحياء الرياض ونصل إليك في نفس اليوم.",
  ],
};

export const whyChooseUs: AboutUs[] = [
  {
    icon: BiDollar,
    title: "أفضل الأسعار",
    description: "نقدم أفضل سعر لشراء الأثاث المستعمل بالرياض مقارنة بالسوق",
  },
  {
    icon: WiTime4,
    title: "خدمة سريعة",
    description: "نصل إلى موقعك في أسرع وقت داخل الرياض وخارجها",
  },
  {
    icon: WiTime4,
    title: "دفع فوري",
    description: "ندفع لك نقداً فور الانتهاء من الاتفاق بدون تأجيل",
  },

  {
    icon: AiOutlineSafetyCertificate,
    title: "أمان تام",
    description: "نضمن سلامة أثاثك خلال عمليات الفك والنقل والتركيب",
  },
  {
    icon: IoLocationOutline,
    title: "تغطية شاملة",
    description: "نغطي جميع مناطق الرياض والمدن المجاورة",
  },
  {
    icon: CiDeliveryTruck,
    title: "خدمة فك وتركيب",
    description: "نوفر خدمة فك وتركيب ونقل الأثاث بدون أي مجهود عليك",
  },
];

export const whatWeBuy: string[] = [
  "شراء أثاث مستعمل بجميع أنواعه",
  "غرف نوم مستعملة",
  "شراء مكيفات مستعملة",
  "شراء أجهزة كهربائية مستعملة",
  "شراء مكيفات شبابية",
  "شراء معدات مطاعم مستعملة",
  "فك وتركيب ونقل الأثاث",
  "دفع نقدي في نفس اليوم",
];

export const trustReasons: AboutUs[] = [
  {
    icon: AiOutlineSafetyCertificate,
    title: "دفع فوري",
    description: "نقوم بالدفع فور الاتفاق بدون أي تأجيل",
  },
  {
    icon: WiTime4,
    title: "سرعة التنفيذ",
    description: "نصل إلى موقعك في أسرع وقت وننتهي جميع الإجراءات سريعاً",
  },
  {
    icon: IoLocationOutline,
    title: "تغطية واسعة",
    description: "نغطي جميع أحياء الرياض والمناطق المجاورة",
  },
  {
    icon: BiDollar,
    title: "أفضل سعر",
    description: "نقدم أسعار تنافسية لشراء الأثاث المستعمل حسب حالة الأثاث",
  },
  {
    icon: LiaCertificateSolid,
    title: "خبرة واسعة",
    description: "سنوات من الخبرة في مجال شراء الأثاث المستعمل",
  },
  {
    icon: CiDeliveryTruck,
    title: "خدمة متكاملة",
    description: "نوفر خدمة فك وتركيب ونقل الأثاث بدون أي مجهود عليك",
  },
];

export const aboutVisionMission: AboutVisionMission = {
  title: "رؤيتنا ورسالتنا",
  vision:
    "رؤيتنا هي أن نكون الشركة الأولى والأكثر موثوقية في مجال شراء الأثاث والمعدات المستعملة في المملكة العربية السعودية. نسعى لتقديم خدمات متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
  mission:
    "رسالتنا هي توفير حلول مرنة وسريعة لمن يرغب في بيع الأثاث والمعدات المستعملة، مع الالتزام بأعلى معايير الجودة والمصداقية في التعامل. نؤمن بأهمية بناء علاقات طويلة الأمد مع عملائنا من خلال الخدمة الممتازة والأسعار العادلة.",
};

export const aboutValuesFeatures: AboutUs[] = [
  {
    icon: LuTarget,
    title: "مصداقية عالية",
    description:
      "نعمل بشفافية تامة ونلتزم بوعودنا لكسب ثقة عملائنا",
  },
  {
    icon: LuAward,
    title: "أفضل الأسعار",
    description:
      "نقدم أعلى الأسعار في السوق لشراء الأثاث والمعدات المستعملة بكل أنواعها",
  },
  {
    icon: LuClock3,
    title: "خدمة سريعة",
    description:
      "نصل إليك في نفس اليوم ونوفر خدمة سريعة وفعالة دون أي تأخير",
  },
  {
    icon: LuUsers,
    title: "فريق محترف",
    description:
      "نمتلك فريق عمل مدرب على أعلى مستوى من الاحترافية والخبرة في مجال شراء الأثاث المستعمل",
  },
];

export const companyValues: AboutUs[] = [
  { icon: AiOutlineSafetyCertificate, title: "المصداقية في التعامل" },
  { icon: FaPersonRunning, title: "السرعة في التنفيذ" },
  { icon: WiTime4, title: "الالتزام بالمواعيد" },
  { icon: AiOutlineSafetyCertificate, title: "الجودة في الخدمة" },
  { icon: FaRegHeart, title: "احترام العميل" },
];

export const aboutCtaContent = {
  title: "تواصل معنا الآن",
  description:
    "نحن هنا لخدمتك على مدار الساعة. تواصل معنا واحصل على أفضل سعر لأثاثك المستعمل",
};
