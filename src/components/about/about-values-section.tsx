import FeatureCard from "@/components/ui/cards/feature-card";
import { aboutValuesFeatures } from "@/data/about";

type AboutValuesSectionProps = {
  title?: string;
  features?: typeof aboutValuesFeatures;
  className?: string;
};

export default function AboutValuesSection({
  title = "قيمنا ومميزاتنا",
  features = aboutValuesFeatures,
  className = "",
}: AboutValuesSectionProps) {
  return (
    <section className={`bg-[#fff9f5] py-16 sm:py-20 ${className}`}>
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight text-[#1e1e1e]">
          {title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description ?? ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
