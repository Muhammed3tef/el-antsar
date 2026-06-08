import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { contactInfo } from "@/data/contact-info";

type Props = {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
  iconSize?: number;
  children?: React.ReactNode;
};
const CallButton = ({
  className,
  variant,
  showText = true,
  iconSize = 25,
}: Props) => {
  return (
    <Link
      href={contactInfo.phoneLink}
      rel="noreferrer"
      className={`px-8 py-2 rounded-md flex items-center justify-center gap-2 transition ${className} ${variant === "dark" ? "text-white bg-emerald-800 hover:bg-emerald-900" : "text-green-700 bg-white hover:bg-gray-200"} `}
    >
      <>
        <IoCallOutline size={iconSize} />
        {showText && <span>اتصل الآن</span>}
      </>
    </Link>
  );
};

export default CallButton;
