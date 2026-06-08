import { IoLocationOutline } from "react-icons/io5";

type LocationCardProps = {
  name: string;
  variant?: "default" | "plain";
  className?: string;
};

const variantStyles = {
  default:
    "border border-[#f97316]/20 bg-linear-to-br from-[#fff7ed] via-[#fffaf5] to-white shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#f97316]/35 hover:shadow-lg",
  plain:
    "border border-transparent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)]",
};

export default function LocationCard({
  name,
  variant = "default",
  className = "",
}: LocationCardProps) {
  return (
    <article
      className={`flex min-h-[92px] flex-col items-center justify-center rounded-2xl px-5 py-5 text-center ${variantStyles[variant]} ${className}`}
    >
      <IoLocationOutline
        aria-hidden="true"
        className="text-[34px] text-[#f97316]"
      />
      <h3 className="mt-3 text-base font-bold leading-7 text-[#1e1e1e] sm:text-lg">
        {name}
      </h3>
    </article>
  );
}
