import { contactInfo } from "@/data/contact-info";
import { footerServices } from "@/data/footer-links";
import type { ContactFormField, ContactMethod } from "@/types/contact-page";

export const contactHeroContent = {
  title: "تواصل معنا",
  description:
    "نحن هنا للإجابة على جميع استفساراتك وخدمتك على مدار الساعة",
  backgroundImage: "/imgs/service-moving.jpg",
};

export const contactSectionContent = {
  infoTitle: "معلومات الاتصال",
  formTitle: "أرسل لنا رسالة",
  submitLabel: "إرسال عبر واتساب",
  successMessage:
    "تم فتح واتساب. أكمل الإرسال من التطبيق وسنرد عليك في أقرب وقت.",
  errorMessage: "يرجى التأكد من تعبئة جميع الحقول بشكل صحيح.",
};

export const contactMethods: ContactMethod[] = [
  {
    id: "phone",
    title: "الهاتف",
    value: contactInfo.phone,
    subtitle: "متاح 24/7",
    icon: "phone",
    href: contactInfo.phoneLink,
  },
  {
    id: "whatsapp",
    title: "واتساب",
    value: contactInfo.whatsapp,
    subtitle: "استجابة فورية",
    icon: "whatsapp",
    href: contactInfo.whatsappLink,
  },
  {
    id: "location",
    title: "الموقع",
    value: "الرياض، المملكة العربية السعودية",
    subtitle: "نخدم جميع أحياء الرياض",
    icon: "location",
    href: "/areas",
  },
  {
    id: "tiktok",
    title: "التيك توك",
    value: "متاح 24 ساعة / 7 أيام",
    subtitle: "نعمل في جميع الأوقات",
    icon: "tiktok",
    href: contactInfo.tiktokLink,
  },
  {
    id: "instagram",
    title: "الانستغرام",
    value: "متاح 24 ساعة / 7 أيام",
    subtitle: "نعمل في جميع الأوقات",
    icon: "instagram",
    href: contactInfo.instagramLink,
  },
];

export const contactFormFields: ContactFormField[] = [
  {
    id: "fullName",
    label: "الاسم الكامل",
    placeholder: "أدخل اسمك",
    type: "text",
    required: true,
  },
  {
    id: "phone",
    label: "رقم الجوال",
    placeholder: "05XXXXXXXX",
    type: "tel",
    required: true,
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    placeholder: "example@email.com",
    type: "email",
    required: true,
  },
  {
    id: "service",
    label: "الخدمة المطلوبة",
    type: "select",
    required: true,
  },
  {
    id: "message",
    label: "الرسالة",
    placeholder: "اكتب رسالتك هنا...",
    type: "textarea",
    required: true,
  },
];

export const contactServiceOptions = footerServices.map((service) => ({
  value: service.label,
  label: service.label,
}));
