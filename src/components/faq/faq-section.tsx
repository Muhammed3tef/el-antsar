import Accordion from "@/components/ui/accordion/accordion";
import { faqItems, type FaqItem } from "@/data/faq";

type FAQSectionProps = {
  title?: string;
  description?: string;
  items?: FaqItem[];
  className?: string;
};

export default function FAQSection({
  title = "الأسئلة الشائعة حول شراء المكيفات",
  description = "إجابات على استفساراتك",
  items = faqItems,
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`bg-[#fff9f5] py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="text-center lg:sticky lg:top-28 lg:text-right">
            <span className="inline-flex rounded-full bg-[#fff4ed] px-4 py-2 text-sm font-bold text-[#f97316]">
              أسئلة العملاء
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1e1e1e] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4a5565] sm:text-xl">
              {description}
            </p>
          </div>

          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
