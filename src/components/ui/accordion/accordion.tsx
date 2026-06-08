"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  variant?: "default" | "compact";
};

export default function Accordion({
  items,
  defaultOpenIndex = 0,
  className = "",
  variant = "default",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const isCompact = variant === "compact";

  return (
    <div className={`${isCompact ? "space-y-3" : "space-y-4"} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `accordion-content-${index}`;

        return (
          <article
            key={item.question}
            className={
              isCompact
                ? "overflow-hidden rounded-xl bg-[#fff9f5] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition"
                : "overflow-hidden rounded-2xl border border-[#ffe0c7] bg-white shadow-[0_10px_30px_rgba(249,115,22,0.08)] transition hover:border-[#f97316]/50"
            }
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={
                isCompact
                  ? "flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-3 text-right sm:px-6"
                  : "flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-right sm:px-6"
              }
            >
              <span
                className={
                  isCompact
                    ? "text-sm font-extrabold leading-6 text-[#2f2f2f] sm:text-base"
                    : "text-base font-bold leading-7 text-[#1e1e1e] sm:text-lg"
                }
              >
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`grid shrink-0 place-items-center font-bold leading-none text-[#f97316] transition duration-300 ${
                  isCompact
                    ? "size-5 text-base"
                    : "size-9 rounded-full bg-[#fff4ed] text-2xl"
                } ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              id={contentId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={
                    isCompact
                      ? "border-t border-[#ffe9d9] px-5 pb-4 pt-3 text-sm leading-7 text-[#4a5565] sm:px-6"
                      : "border-t border-[#ffe0c7] px-5 pb-5 pt-4 text-sm leading-7 text-[#4a5565] sm:px-6 sm:text-base"
                  }
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
