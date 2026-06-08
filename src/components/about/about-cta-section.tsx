import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { aboutCtaContent } from "@/data/about";
import { contactInfo } from "@/data/contact-info";

type AboutCtaSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function AboutCtaSection({
  title = aboutCtaContent.title,
  description = aboutCtaContent.description,
  className = "",
}: AboutCtaSectionProps) {
  return (
    <section
      className={`bg-[#f47920] py-16 text-white sm:py-20 ${className}`}
      dir="rtl"
    >
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          <p className="mt-4 text-base font-medium leading-8 text-white/90 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#39cc65] px-8 text-sm font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition hover:bg-[#32b85a] sm:w-[250px]"
            >
              <span>تواصل عبر واتساب</span>
              <FaWhatsapp size={21} />
            </Link>

            <Link
              href={contactInfo.phoneLink}
              className="flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-[#f47920] shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition hover:bg-orange-50 sm:w-[250px]"
            >
              <span>اتصل الآن: {contactInfo.phone}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
