import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { areasCtaContent } from "@/data/areas-page";
import { contactInfo } from "@/data/contact-info";

type AreasCtaSectionProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function AreasCtaSection({
  title = areasCtaContent.title,
  description = areasCtaContent.description,
  className = "",
}: AreasCtaSectionProps) {
  return (
    <section
      className={`bg-[#1a1a1a] py-16 text-white sm:py-20 ${className}`}
      dir="rtl"
    >
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          <p className="mt-4 text-base font-medium leading-8 text-white/70 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={contactInfo.phoneLink}
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-8 text-sm font-bold text-[#f97316] transition hover:bg-orange-50 sm:w-[250px]"
            >
              <span>اتصل الآن: {contactInfo.phone}</span>
              <IoCallOutline size={21} />
            </Link>

            <Link
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#32d74b] px-8 text-sm font-bold text-white transition hover:bg-[#2bc441] sm:w-[250px]"
            >
              <span>تواصل عبر واتساب</span>
              <FaWhatsapp size={21} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
