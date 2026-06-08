import ProcessStepCard from "@/components/ui/cards/process-step-card";
import { howWeWorkSteps } from "@/data/how-we-work";

type HowWeWorkSectionProps = {
  title?: string;
  description?: string;
  steps?: typeof howWeWorkSteps;
  className?: string;
};

export default function HowWeWorkSection({
  title = "كيف نعمل؟",
  description = "عملية بسيطة وسريعة لشراء الاثاث المستعمل",
  steps = howWeWorkSteps,
  className = "",
}: HowWeWorkSectionProps) {
  return (
    <section className={`bg-[#1e1e1e] py-16 text-white sm:py-20 ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[#f2f2f7] sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative mx-auto mt-11 grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-1 bg-linear-to-r from-[#f97316] via-[#8a3d08]/60 to-transparent lg:block"
          />

          {steps.map((step) => (
            <ProcessStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
