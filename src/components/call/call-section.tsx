import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { contactInfo } from "@/data/contact-info";

type CallSectionProps = {
  className?: string;
};

export default function CallSection({ className = "" }: CallSectionProps) {
  return (
    <section
      className={`bg-[#df6205] py-14 text-white sm:py-16 ${className}`}
      dir="rtl"
    >
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            هل تريد بيع الاثاث المستعمل؟
          </h2>

          <p className="mt-4 text-base font-medium leading-8 text-white/80 sm:text-xl">
            تواصل معنا الآن واحصل على أفضل سعر فوري لأثاثك المستعمل في الرياض
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={contactInfo.phoneLink}
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-8 text-sm font-bold text-[#df6205] shadow-[0_8px_16px_rgba(0,0,0,0.22)] transition hover:bg-orange-50 sm:w-[250px]"
            >
              <span>اتصل الآن: {contactInfo.phone}</span>
              <IoCallOutline size={21} />
            </Link>

            <Link
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#20c763] px-8 text-sm font-bold text-white shadow-[0_8px_16px_rgba(0,0,0,0.22)] transition hover:bg-[#1ab456] sm:w-[250px]"
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
