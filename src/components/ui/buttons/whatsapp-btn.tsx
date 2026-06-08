import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contact-info";

type Props = {
  className?: string;
  showText?: boolean;
  iconSize?: number;
  children?: React.ReactNode;
};
const WhatsappButton = ({
  className,
  showText = true,
  iconSize = 25,
  children,
}: Props) => {
  return (
    <Link
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={`text-white px-4 py-2 rounded-md flex items-center justify-center w-[149px] gap-2 transition ${className} bg-green-600 hover:bg-green-700 ${showText && "text-white"}`}
    >
      {children ? (
        children
      ) : (
        <>
          <FaWhatsapp size={iconSize} />
          {showText && <span>واتساب</span>}
        </>
      )}
    </Link>
  );
};

export default WhatsappButton;
