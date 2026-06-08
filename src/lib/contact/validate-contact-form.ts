import type {
  ContactFormPayload,
  ContactFormValidationResult,
} from "@/types/contact-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^05\d{8}$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactForm(
  payload: unknown,
): ContactFormValidationResult {
  if (!payload || typeof payload !== "object") {
    return { success: false, error: "بيانات غير صالحة." };
  }

  const data = payload as Partial<ContactFormPayload>;
  const fullName = asTrimmedString(data.fullName);
  const phone = asTrimmedString(data.phone);
  const email = asTrimmedString(data.email);
  const service = asTrimmedString(data.service);
  const message = asTrimmedString(data.message);

  if (!fullName || fullName.length < 2) {
    return { success: false, error: "يرجى إدخال الاسم الكامل." };
  }

  if (!PHONE_PATTERN.test(phone)) {
    return {
      success: false,
      error: "يرجى إدخال رقم جوال سعودي صحيح (مثال: 05XXXXXXXX).",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: "يرجى إدخال بريد إلكتروني صحيح." };
  }

  if (!service) {
    return { success: false, error: "يرجى اختيار الخدمة المطلوبة." };
  }

  if (!message || message.length < 10) {
    return { success: false, error: "يرجى كتابة رسالة لا تقل عن 10 أحرف." };
  }

  return {
    success: true,
    data: { fullName, phone, email, service, message },
  };
}
