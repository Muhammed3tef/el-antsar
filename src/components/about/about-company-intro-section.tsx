import { aboutCompanyIntro } from "@/data/about";
import type { AboutIntroParagraph } from "@/types/about";

type AboutCompanyIntroSectionProps = {
  title?: string;
  paragraphs?: AboutIntroParagraph[];
  className?: string;
};

function renderParagraph(paragraph: AboutIntroParagraph, index: number) {
  if (typeof paragraph === "string") {
    return (
      <p key={index} className="text-base leading-8 text-[#4a5565] sm:text-lg">
        {paragraph}
      </p>
    );
  }

  return (
    <p key={index} className="text-base leading-8 text-[#4a5565] sm:text-lg">
      {paragraph.before}
      <span className="font-bold text-[#f97316]">{paragraph.highlight}</span>
      {paragraph.after}
    </p>
  );
}

export default function AboutCompanyIntroSection({
  title = aboutCompanyIntro.title,
  paragraphs = aboutCompanyIntro.paragraphs,
  className = "",
}: AboutCompanyIntroSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <article className="mx-auto max-w-4xl text-right">
          <h2 className="text-2xl font-bold leading-tight text-[#f97316] sm:text-3xl">
            {title}
          </h2>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            {paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
