import Link from "next/link";
import type { ReactNode } from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import type { ContactMethod, ContactMethodIcon } from "@/types/contact-page";

type ContactInfoCardProps = {
  method: ContactMethod;
};

const iconStyles: Record<
  ContactMethodIcon,
  { wrapper: string; icon: ReactNode }
> = {
  phone: {
    wrapper: "bg-[#1b1b1b] text-white",
    icon: <IoCall size={22} aria-hidden="true" />,
  },
  whatsapp: {
    wrapper: "bg-transparent text-[#25d366]",
    icon: <FaWhatsapp size={30} aria-hidden="true" />,
  },
  location: {
    wrapper: "bg-[#3d4f5f] text-white",
    icon: <IoLocationOutline size={24} aria-hidden="true" />,
  },
  tiktok: {
    wrapper: "bg-transparent text-[#1b1b1b]",
    icon: <FaTiktok size={28} aria-hidden="true" />,
  },
  instagram: {
    wrapper: "bg-transparent text-[#e4405f]",
    icon: <FaInstagram size={28} aria-hidden="true" />,
  },
};

function CardContent({ method }: ContactInfoCardProps) {
  const { wrapper, icon } = iconStyles[method.icon];

  return (
    <>
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${wrapper}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1 text-right">
        <h3 className="text-base font-bold text-[#1e1e1e]">{method.title}</h3>
        <p
          className="mt-1 text-sm font-semibold text-[#1e1e1e] sm:text-base"
          dir={method.icon === "phone" || method.icon === "whatsapp" ? "ltr" : undefined}
        >
          {method.value}
        </p>
        <p className="mt-1 text-sm text-[#9b9b9b]">{method.subtitle}</p>
      </div>
    </>
  );
}

export default function ContactInfoCard({ method }: ContactInfoCardProps) {
  const cardClassName =
    "flex items-center gap-4 rounded-2xl bg-[#fff8f0] px-5 py-5 transition hover:bg-[#fff3e8] sm:px-6";

  if (method.href) {
    const isExternal = method.href.startsWith("http");

    return (
      <Link
        href={method.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={cardClassName}
      >
        <CardContent method={method} />
      </Link>
    );
  }

  return (
    <article className={cardClassName}>
      <CardContent method={method} />
    </article>
  );
}
