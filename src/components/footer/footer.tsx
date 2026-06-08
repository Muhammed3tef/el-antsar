import Link from "next/link";
import Image from "next/image";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { quickLinks, footerServices } from "@/data/footer-links";
import { contactInfo } from "@/data/contact-info";
import scLogo from "../../../public/imgs/scLogo.svg";

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="text-center md:text-right">
      <h4 className="mb-7 text-lg font-bold text-[#d96a1d]">{title}</h4>
      <ul className="space-y-4 text-sm font-semibold text-[#9b9b9b]">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-[#d96a1d]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] py-12 text-[#9b9b9b]" dir="rtl">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 xl:gap-20">
          <div className="flex flex-col items-center text-center md:items-start md:text-right">
            <Image
              src={scLogo}
              alt="الأنصار"
              priority
              width={150}
              height={92}
              className="h-auto w-[145px]"
            />

            <p className="mt-5 max-w-[250px] text-sm font-semibold leading-8">
              شركة الأنتصار لشراء الأثاث المستعمل بالرياض تقدم أفضل الأسعار لشراء
              الأثاث والمكيفات والمطابخ والمجالس ومعدات المطاعم المستعملة.
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 text-[#d96a1d] md:justify-start">
              <Link
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="واتساب"
                className="transition hover:text-white"
              >
                <FaWhatsapp size={28} />
              </Link>
              <Link
                href={contactInfo.instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="انستجرام"
                className="transition hover:text-white"
              >
                <FaInstagram size={26} />
              </Link>
              <Link
                href={contactInfo.tiktokLink}
                target="_blank"
                rel="noreferrer"
                aria-label="تيك توك"
                className="transition hover:text-white"
              >
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>

          <FooterColumn title="روابط سريعة" links={quickLinks} />
          <FooterColumn title="خدماتنا" links={footerServices} />

          <div className="text-center md:text-right">
            <h4 className="mb-7 text-lg font-bold text-[#d96a1d]">
              تواصل معنا
            </h4>

            <ul className="space-y-5 text-sm font-semibold text-[#b7b7b7]">
              <li>
                <Link
                  href={contactInfo.phoneLink}
                  className="flex items-center justify-center gap-3 transition hover:text-[#d96a1d] md:justify-start"
                >
                  <IoCallOutline className="text-[#d96a1d]" size={20} />
                  <span dir="ltr">{contactInfo.phone}</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <IoLocationOutline className="text-[#d96a1d]" size={20} />
                  <Link
                    href="/areas"
                    className="transition hover:text-[#d96a1d]"
                  >
                    الرياض، المملكة العربية السعودية
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/45 pt-7 text-center text-sm font-semibold leading-8 text-[#9b9b9b]">
          <p>شركة الأنتصار لشراء الأثاث المستعمل بالرياض - نخدم جميع أنحاء الرياض والمناطق المجاورة</p>
          <p className="mt-2">
            © {new Date().getFullYear()} الأنصار جميع الحقوق محفوظة
          </p>
        </div>

        <div className="mt-4 border-t border-white/30 pt-4 text-center text-xs font-semibold leading-7 text-[#777]">
          <p>
            شركة الأنتصار هي الخيار الأفضل لشراء الأثاث المستعمل في الرياض والخرج
            والمزاحمية والقويعية والقصيم، نشتري جميع أنواع الأثاث المستعمل بأفضل
            الأسعار مع خدمة فك ونقل وتركيب احترافية.
          </p>
        </div>
      </div>
    </footer>
  );
}
