import { contactInfo } from "@/data/contact-info";
import type { ContactFormPayload } from "@/types/contact-form";

export function buildContactWhatsAppMessage(data: ContactFormPayload) {
  return [
    "مرحباً، أود التواصل معكم:",
    "",
    `الاسم: ${data.fullName}`,
    `رقم الجوال: ${data.phone}`,
    `البريد الإلكتروني: ${data.email}`,
    `الخدمة المطلوبة: ${data.service}`,
    "",
    "الرسالة:",
    data.message,
  ].join("\n");
}

export function buildContactWhatsAppUrl(data: ContactFormPayload) {
  const message = encodeURIComponent(buildContactWhatsAppMessage(data));

  return `${contactInfo.whatsappLink}?text=${message}`;
}
