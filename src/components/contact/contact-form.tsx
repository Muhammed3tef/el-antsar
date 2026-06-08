"use client";

import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  contactFormFields,
  contactSectionContent,
  contactServiceOptions,
} from "@/data/contact-page";
import { buildContactWhatsAppUrl } from "@/lib/contact/build-whatsapp-message";
import { validateContactForm } from "@/lib/contact/validate-contact-form";
import type { ContactFormPayload } from "@/types/contact-form";

type FormState = ContactFormPayload;

const initialFormState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

type SubmitStatus = "idle" | "success" | "error";

type ContactFormProps = {
  title?: string;
  submitLabel?: string;
  className?: string;
};

export default function ContactForm({
  title = contactSectionContent.formTitle,
  submitLabel = contactSectionContent.submitLabel,
  className = "",
}: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateContactForm(formState);

    if (!validation.success) {
      setStatus("error");
      setFeedbackMessage(validation.error);
      return;
    }

    const whatsappUrl = buildContactWhatsAppUrl(validation.data);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setFeedbackMessage(contactSectionContent.successMessage);
    setFormState(initialFormState);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-[#1e1e1e] outline-none transition placeholder:text-[#9ca3af] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20";

  const feedbackClassName =
    status === "success"
      ? "rounded-xl border border-[#86efac] bg-[#f0fdf4] px-4 py-3 text-sm font-semibold text-[#166534]"
      : "rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm font-semibold text-[#b91c1c]";

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-[#1e1e1e] sm:text-3xl">{title}</h2>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        {contactFormFields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-2 block text-sm font-bold text-[#1e1e1e]"
            >
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={5}
                required={field.required}
                placeholder={field.placeholder}
                value={formState.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={`${inputClassName} min-h-[140px] resize-y`}
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                value={formState.service}
                onChange={(event) => updateField("service", event.target.value)}
                className={`${inputClassName} appearance-none`}
              >
                <option value="" disabled>
                  اختر الخدمة
                </option>
                {contactServiceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={formState[field.id as keyof FormState]}
                onChange={(event) =>
                  updateField(field.id as keyof FormState, event.target.value)
                }
                className={inputClassName}
                dir={
                  field.type === "tel" || field.type === "email" ? "ltr" : undefined
                }
              />
            )}
          </div>
        ))}

        {feedbackMessage ? (
          <p className={feedbackClassName} role="status" aria-live="polite">
            {feedbackMessage}
          </p>
        ) : null}

        <button
          type="submit"
          className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#25d366] px-6 text-base font-bold text-white transition hover:bg-[#1da851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]"
        >
          <span>{submitLabel}</span>
          <FaWhatsapp size={22} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
