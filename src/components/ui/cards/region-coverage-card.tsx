import { IoLocationOutline } from "react-icons/io5";

type RegionCoverageCardProps = {
  title: string;
  districts: string[];
  className?: string;
};

export default function RegionCoverageCard({
  title,
  districts,
  className = "",
}: RegionCoverageCardProps) {
  return (
    <article
      className={`rounded-2xl bg-[#fff9f2] px-6 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:px-7 sm:py-8 ${className}`}
    >
      <div className="flex items-center justify-end gap-2">
        <h3 className="text-lg font-bold leading-7 text-[#1e1e1e] sm:text-xl">
          {title}
        </h3>
        <IoLocationOutline
          aria-hidden="true"
          className="shrink-0 text-[26px] text-[#f97316] sm:text-[28px]"
        />
      </div>

      <ul className="mt-5 space-y-2.5">
        {districts.map((district) => (
          <li
            key={district}
            className="flex items-center justify-end gap-2.5 text-base leading-7 text-[#4a5565]"
          >
            <span>{district}</span>
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-[#f97316]"
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
