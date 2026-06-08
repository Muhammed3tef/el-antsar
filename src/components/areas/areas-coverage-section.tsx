import RegionCoverageCard from "@/components/ui/cards/region-coverage-card";
import {
  areasCoverageContent,
  riyadhRegionCoverage,
  type RegionCoverage,
} from "@/data/areas-coverage";

type AreasCoverageSectionProps = {
  title?: string;
  description?: string;
  regions?: RegionCoverage[];
  className?: string;
};

export default function AreasCoverageSection({
  title = areasCoverageContent.title,
  description = areasCoverageContent.description,
  regions = riyadhRegionCoverage,
  className = "",
}: AreasCoverageSectionProps) {
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

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {regions.map((region) => (
            <RegionCoverageCard
              key={region.title}
              title={region.title}
              districts={region.districts}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
