"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/data/faq";
import MotionCard from "@/components/motion/MotionCard";

type FAQAccordionProps = {
  items: FAQItem[];
  grouped?: boolean;
};

export default function FAQAccordion({ items, grouped = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const groupedItems = useMemo(() => {
    const groups = new Map<string, FAQItem[]>();
    items.forEach((item) => {
      const list = groups.get(item.category) || [];
      list.push(item);
      groups.set(item.category, list);
    });
    return Array.from(groups.entries());
  }, [items]);

  let runningIndex = -1;

  return (
    <div className="flex w-full flex-col gap-8">
      {(grouped ? groupedItems : [["", items] as [string, FAQItem[]]]).map(([category, categoryItems]) => (
        <section key={category || "all"} className="flex flex-col">
          {grouped && (
            <span className="mb-4 font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">
              [{category}]
            </span>
          )}
          <div className="flex flex-col border-t border-[#1D1D1D]">
            {categoryItems.map((faq) => {
              runningIndex += 1;
              const currentIndex = runningIndex;
              const isOpen = openIndex === currentIndex;
              return (
                <MotionCard
                  key={`${faq.category}-${faq.question}`}
                  index={currentIndex}
                  hover={false}
                  className="border-b border-[#1D1D1D] bg-transparent"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : currentIndex)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${currentIndex}`}
                    id={`faq-trigger-${currentIndex}`}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:bg-[#0D0D0D] md:min-h-[72px]"
                  >
                    <h3 className="font-grotesk text-[14px] font-bold tracking-[1px] text-[#F5F5F0] md:text-[16px]">
                      {faq.question}
                    </h3>
                    <motion.span
                      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center font-ibm-mono text-[15px] font-bold"
                      style={{
                        backgroundColor: isOpen ? "#FFD600" : "#1A1A1A",
                        border: isOpen ? "none" : "1px solid #3D3D3D",
                        color: isOpen ? "#0A0A0A" : "#888888",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isOpen ? "-" : "+"}
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${currentIndex}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${currentIndex}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7">
                          <p className="max-w-[920px] font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#888888] md:text-[13px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </MotionCard>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
