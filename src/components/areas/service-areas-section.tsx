import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import LocationCard from "@/components/ui/cards/location-card";
import { serviceAreasPreview } from "@/data/service-areas";

type ServiceAreasSectionProps = {
  title?: string;
  description?: string;
  areas?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function ServiceAreasSection({
  title = "المناطق التي نخدمها",
  description = "نغطي جميع مناطق الرياض والمحافظات القريبة",
  areas = serviceAreasPreview,
  ctaLabel = "عرض جميع المناطق",
  ctaHref = "/areas",
  className = "",
}: ServiceAreasSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#1e1e1e]">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#4a5565] sm:text-xl">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {areas.map((area) => (
            <LocationCard key={area} name={area} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#f97316] px-7 text-base font-bold text-white shadow-sm transition hover:bg-[#ea580c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
          >
            <IoLocationOutline aria-hidden="true" size={20} />
            <span>{ctaLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
