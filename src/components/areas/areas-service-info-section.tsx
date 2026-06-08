import {
  areasServiceInfoContent,
  areasServiceInfoItems,
  type AreasServiceInfoItem,
} from "@/data/areas-service-info";
import { LuCircleCheck } from "react-icons/lu";

type AreasServiceInfoSectionProps = {
  title?: string;
  items?: AreasServiceInfoItem[];
  className?: string;
};

export default function AreasServiceInfoSection({
  title = areasServiceInfoContent.title,
  items = areasServiceInfoItems,
  className = "",
}: AreasServiceInfoSectionProps) {
  return (
    <section className={`bg-white py-16 sm:py-20 ${className}`}>
      <div className="container">
        <article className="mx-auto max-w-4xl rounded-2xl bg-[#fff9f2] px-6 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:px-10 sm:py-10">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#1e1e1e] sm:text-3xl">
            {title}
          </h2>

          <ul className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-right leading-7"
              >
                <LuCircleCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#f97316]"
                  size={20}
                  strokeWidth={2.5}
                />
                <p className="text-base">
                  <span className="font-bold text-[#f97316]">{item.label}</span>{" "}
                  <span className="text-[#4a5565]">{item.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
