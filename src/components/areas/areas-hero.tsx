import { areasHeroContent } from "@/data/areas-page";

type AreasHeroProps = {
  title?: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
};

export default function AreasHero({
  title = areasHeroContent.title,
  description = areasHeroContent.description,
  backgroundImage = areasHeroContent.backgroundImage,
  className = "",
}: AreasHeroProps) {
  return (
    <section
      className={`relative isolate flex min-h-[280px] items-center overflow-hidden py-16 text-white sm:min-h-[320px] sm:py-20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(249,115,22,0.62)_0%,rgba(234,88,12,0.58)_45%,rgba(194,65,12,0.55)_100%)]"
      />

      <div className="container text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-white/95 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
