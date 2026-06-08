import { aboutVisionMission } from "@/data/about";

type AboutVisionMissionSectionProps = {
  title?: string;
  vision?: string;
  mission?: string;
  className?: string;
};

export default function AboutVisionMissionSection({
  title = aboutVisionMission.title,
  vision = aboutVisionMission.vision,
  mission = aboutVisionMission.mission,
  className = "",
}: AboutVisionMissionSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <article className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#1e1e1e]">
            {title}
          </h2>

          <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
            <p className="text-base leading-8 text-[#4a5565] sm:text-lg">
              {vision}
            </p>
            <p className="text-base leading-8 text-[#4a5565] sm:text-lg">
              {mission}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
