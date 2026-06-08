import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contact-info";

export default function FloatingWhatsappButton() {
  return (
    <Link
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#34c759] text-white shadow-lg shadow-black/20 transition hover:bg-[#25b64c]"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
