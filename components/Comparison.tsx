"use client";

import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

const rows = [
  { feature: "DISCOVERY BEFORE BUILD", csw: "[YES]", template: "[LIMITED]", freelance: "[LIMITED]", adhoc: "[NO]" },
  { feature: "CUSTOM SOFTWARE SCOPE", csw: "[YES]", template: "[NO]", freelance: "[LIMITED]", adhoc: "[NO]" },
  { feature: "API AND DATABASE PLANNING", csw: "[YES]", template: "[NO]", freelance: "[LIMITED]", adhoc: "[NO]" },
  { feature: "STATIC EXPORT READY SITES", csw: "[YES]", template: "[YES]", freelance: "[LIMITED]", adhoc: "[NO]" },
  { feature: "MAINTENANCE SUPPORT", csw: "[YES]", template: "[NO]", freelance: "[LIMITED]", adhoc: "[NO]" },
  { feature: "NO UNSUPPORTED CLAIMS", csw: "[YES]", template: "[NO]", freelance: "[NO]", adhoc: "[NO]" },
];

function cellStyle(value: string) {
  if (value === "[YES]") return "font-bold text-[14px]";
  if (value === "[NO]") return "text-[#3D3D3D] text-[13px]";
  return "text-[#444444] text-[10px]";
}

function cellColor(value: string) {
  if (value === "[YES]") return "text-[#444444]";
  return "";
}

export default function Comparison() {
  return (
    <section id="comparison" className="flex w-full flex-col gap-12 bg-[#050505] px-6 py-16 md:gap-[64px] md:px-[120px] md:py-[100px]">
      <SectionHeader
        label="[06] // DELIVERY COMPARISON"
        title={"WHY CUSTOM\nSOFTWARE MATTERS."}
        subtitle="A TEMPLATE CAN START A PAGE. A SOFTWARE PARTNER MAPS THE WORKFLOW, DATA, INTEGRATIONS, AND SUPPORT MODEL."
      />

      <div className="hidden w-full flex-col border border-[#2D2D2D] md:flex">
        <div className="flex h-[56px] w-full border-b-2 border-b-[#FFD600] bg-[#111111]">
          <div className="flex w-[400px] shrink-0 items-center border-r border-r-[#2D2D2D] px-[32px]">
            <span className="font-grotesk text-[11px] font-bold tracking-[2px] text-[#888888]">CAPABILITY</span>
          </div>
          <div className="flex flex-1 items-center border-r border-r-[#2D2D2D] bg-[#1A1A1A] px-[32px]">
            <span className="font-grotesk text-[11px] font-bold tracking-[2px] text-[#FFD600]">CYBERSPACEWEB</span>
          </div>
          {["TEMPLATE", "FREELANCE", "AD HOC"].map((tool, index) => (
            <div key={tool} className={`flex flex-1 items-center px-[32px] ${index < 2 ? "border-r border-r-[#2D2D2D]" : ""}`}>
              <span className="font-grotesk text-[11px] font-bold tracking-[2px] text-[#888888]">{tool}</span>
            </div>
          ))}
        </div>

        {rows.map((row, index) => (
          <MotionCard
            key={row.feature}
            index={index}
            hoverVariant="row"
            as="div"
            className={`flex h-[56px] w-full bg-[#0A0A0A] ${index < rows.length - 1 ? "border-b border-b-[#1D1D1D]" : ""}`}
          >
            <div className="flex w-[400px] shrink-0 items-center border-r border-r-[#2D2D2D] px-[32px]">
              <span className="font-ibm-mono text-[12px] tracking-[1px] text-[#CCCCCC]">{row.feature}</span>
            </div>
            <div className="flex flex-1 items-center border-r border-r-[#2D2D2D] bg-[#0D0D0D] px-[32px] transition-colors group-hover:bg-[#111111]">
              <span className="font-ibm-mono text-[14px] font-bold tracking-[1px] text-[#FFD600]">{row.csw}</span>
            </div>
            {[row.template, row.freelance, row.adhoc].map((value, valueIndex) => (
              <div
                key={`${row.feature}-${valueIndex}`}
                className={`flex flex-1 items-center px-[32px] ${valueIndex < 2 ? "border-r border-r-[#2D2D2D]" : ""}`}
              >
                <span className={`font-ibm-mono tracking-[1px] ${cellStyle(value)} ${cellColor(value)}`}>{value}</span>
              </div>
            ))}
          </MotionCard>
        ))}
      </div>

      <div className="flex w-full flex-col gap-[2px] md:hidden">
        <div className="grid grid-cols-5 border border-[#FFD600] border-b-2 bg-[#111111]">
          <div className="col-span-2 px-3 py-3">
            <span className="font-grotesk text-[9px] font-bold tracking-[1px] text-[#888888]">CAPABILITY</span>
          </div>
          <div className="bg-[#1A1A1A] px-2 py-3">
            <span className="font-grotesk text-[9px] font-bold tracking-[1px] text-[#FFD600]">CSW</span>
          </div>
          <div className="px-2 py-3">
            <span className="font-grotesk text-[9px] font-bold tracking-[1px] text-[#888888]">TMP</span>
          </div>
          <div className="px-2 py-3">
            <span className="font-grotesk text-[9px] font-bold tracking-[1px] text-[#888888]">FRCL</span>
          </div>
        </div>
        {rows.map((row, index) => (
          <MotionCard
            key={row.feature}
            index={index}
            hoverVariant="row"
            className={`grid grid-cols-5 border border-[#1D1D1D] ${index % 2 === 0 ? "bg-[#0A0A0A]" : "bg-[#0D0D0D]"}`}
          >
            <div className="col-span-2 flex items-center px-3 py-4">
              <span className="font-ibm-mono text-[9px] leading-[1.4] tracking-[1px] text-[#CCCCCC]">{row.feature}</span>
            </div>
            <div className="flex items-center bg-[#0D0D0D] px-2 py-4">
              <span className="font-ibm-mono text-[12px] font-bold text-[#FFD600]">{row.csw}</span>
            </div>
            <div className="flex items-center px-2 py-4">
              <span className={`font-ibm-mono text-[10px] ${cellColor(row.template)}`}>{row.template}</span>
            </div>
            <div className="flex items-center px-2 py-4">
              <span className={`font-ibm-mono text-[10px] ${cellColor(row.freelance)}`}>{row.freelance}</span>
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
