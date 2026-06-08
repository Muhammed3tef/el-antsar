import LocationCard from "@/components/ui/cards/location-card";
import {
  additionalAreas,
  additionalAreasContent,
} from "@/data/additional-areas";

type AdditionalAreasSectionProps = {
  title?: string;
  description?: string;
  areas?: string[];
  className?: string;
};

export default function AdditionalAreasSection({
  title = additionalAreasContent.title,
  description = additionalAreasContent.description,
  areas = additionalAreas,
  className = "",
}: AdditionalAreasSectionProps) {
  return (
    <section className={`bg-[#f9fafb] py-16 sm:py-20 ${className}`}>
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
            <LocationCard key={area} name={area} variant="plain" />
          ))}
        </div>
      </div>
    </section>
  );
}
