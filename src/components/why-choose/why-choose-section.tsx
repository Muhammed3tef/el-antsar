import FeatureCard from "@/components/ui/cards/feature-card";
import { coverageAreas, whyChooseFeatures } from "@/data/why-choose";

type WhyChooseSectionProps = {
  title?: string;
  description?: string;
  areasTitle?: string;
  areas?: string;
  className?: string;
};

export default function WhyChooseSection({
  title = "لماذا تختار الانتصار؟",
  description = "نحن الخيار الأمثل لبيع الاثاث المستعمل في الرياض",
  areasTitle = "نخدم جميع أحياء الرياض والمناطق المحيطة",
  areas = coverageAreas,
  className = "",
}: WhyChooseSectionProps) {
  return (
    <section className={`bg-[#fff9f5] py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#1e1e1e]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4a5565] sm:text-xl">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {whyChooseFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-9 rounded-2xl bg-linear-to-br from-[#f97316] to-[#ea580c] px-6 py-8 text-center text-white sm:px-8">
          <h3 className="text-xl font-bold leading-tight sm:text-2xl">
            {areasTitle}
          </h3>
          <p className="mt-4 text-base leading-7 sm:text-lg">{areas}</p>
        </div>
      </div>
    </section>
  );
}
