"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

const slides = [
  {
    tag: "[WEB APP]",
    idx: "01 / 04",
    title: "OPERATIONS COMMAND\nPORTAL",
    by: "CUSTOM WORKFLOW // APPROVALS // DASHBOARDS",
    border: "#2D2D2D",
    bg: "#111111",
  },
  {
    tag: "[MOBILE]",
    idx: "02 / 04",
    title: "FIELD SERVICE\nMOBILE TOOL",
    by: "REMOTE TEAMS // FORMS // SYNC",
    border: "#FFD600",
    bg: "#0F0F0F",
  },
  {
    tag: "[MODERNIZE]",
    idx: "03 / 04",
    title: "LEGACY DESKTOP\nREBUILD",
    by: "DATABASE // UI REDESIGN // REPORTS",
    border: "#2D2D2D",
    bg: "#0A0A0A",
  },
  {
    tag: "[API]",
    idx: "04 / 04",
    title: "INTEGRATION\nHUB",
    by: "REST APIS // WEBHOOKS // DATA SYNC",
    border: "#2D2D2D",
    bg: "#111111",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(1);
  const prev = () => setActive((current) => Math.max(0, current - 1));
  const next = () => setActive((current) => Math.min(slides.length - 1, current + 1));
  const slide = slides[active];

  return (
    <section id="showcase" className="flex w-full flex-col gap-8 bg-[#080808] pb-0 pt-16 md:gap-[48px] md:pt-[100px]">
      <div className="flex items-end justify-between px-6 md:px-[120px]">
        <SectionHeader
          label="[07] // SHOWCASE"
          title={"GENERIC CASE\nSTUDIES."}
          titleWidth="w-full max-w-[600px]"
        />
        <div className="flex shrink-0 items-center gap-[8px]">
          <button
            type="button"
            onClick={prev}
            className="flex h-[48px] w-[48px] items-center justify-center border-2 border-[#3D3D3D] bg-[#111111] transition-colors hover:border-[#888888]"
            aria-label="Previous case study"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#888888]">&lt;</span>
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-[48px] w-[48px] items-center justify-center bg-[#FFD600] transition-colors hover:bg-[#e6c200]"
            aria-label="Next case study"
          >
            <span className="font-grotesk text-[18px] font-bold text-[#0A0A0A]">&gt;</span>
          </button>
        </div>
      </div>

      <div className="px-6 md:hidden">
        <CaseCard slide={slide} index={active} />
      </div>

      <div className="hidden md:block md:overflow-visible md:px-[120px] md:py-4">
        <div className="h-[416px] overflow-hidden">
          <div
            className="flex gap-[2px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${active} * (560px + 2px)))` }}
          >
            {slides.map((item, index) => (
              <CaseCard key={item.title} slide={item} wide index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[8px] px-6 md:px-[120px]">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            className="h-[4px] transition-all"
            style={{ width: index === active ? 32 : 8, backgroundColor: index === active ? "#FFD600" : "#333333" }}
            aria-label={`Show case study ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between px-6 pb-16 md:px-[120px] md:pb-[100px]">
        <span className="font-ibm-mono text-[11px] tracking-[2px] text-[#444444]">
          SHOWING 0{active + 1} OF 04 PROJECT TYPES
        </span>
        <Link href="/portfolio/" className="font-ibm-mono text-[11px] tracking-[2px] text-[#FFD600] hover:underline">
          VIEW ALL &gt;
        </Link>
      </div>
    </section>
  );
}

function CaseCard({
  slide,
  wide = false,
  index = 0,
}: {
  slide: (typeof slides)[number];
  wide?: boolean;
  index?: number;
}) {
  return (
    <MotionCard
      index={index}
      className={`flex flex-col gap-[24px] border-2 p-6 md:p-[40px] ${
        slide.border === "#FFD600" ? "border-[#FFD600]" : "border-[#2D2D2D]"
      } ${wide ? "h-[412px] w-[560px] shrink-0" : "w-full"}`}
      style={{ backgroundColor: slide.bg }}
    >
      <div className="flex h-[180px] items-center justify-center border border-[#2D2D2D] bg-[#1A1A1A] md:h-[200px]">
        <span className="font-ibm-mono text-[11px] tracking-[2px] text-[#333333]">[PROJECT BLUEPRINT]</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex h-[24px] items-center justify-center bg-[#FFD600] px-[10px]">
          <span className="font-ibm-mono text-[9px] font-bold tracking-[1px] text-[#0A0A0A]">{slide.tag}</span>
        </div>
        <span className="font-ibm-mono text-[11px] tracking-[2px] text-[#444444]">{slide.idx}</span>
      </div>
      <h3 className="font-grotesk text-[20px] font-bold leading-[1.2] tracking-[1px] whitespace-pre-line text-[#F5F5F0]">
        {slide.title}
      </h3>
      <p className="font-ibm-mono text-[11px] tracking-[1px] text-[#888888]">{slide.by}</p>
    </MotionCard>
  );
}
