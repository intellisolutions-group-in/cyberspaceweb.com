import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

const bentoCells = [
  {
    className: "flex w-full flex-col gap-5 bg-[#FFD600] p-8 md:h-[320px] md:flex-1 md:p-[40px]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#1A1A1A]">[01]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#0A0A0A] md:text-[28px]">
          {"WEB\nPLATFORMS"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#1A1A1A]">
          CORPORATE WEBSITES, PORTALS, DASHBOARDS, AND STATIC-EXPORT READY WEB EXPERIENCES.
        </p>
        <div className="flex h-[28px] w-fit items-center justify-center bg-[#0A0A0A] px-[12px]">
          <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">[WEB]</span>
        </div>
      </>
    ),
  },
  {
    className: "flex w-full flex-col gap-5 border border-[#2D2D2D] bg-[#111111] p-8 md:h-[320px] md:flex-1 md:p-[40px] transition-colors hover:border-[#FFD600]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">[02]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#F5F5F0] md:text-[28px]">
          {"MOBILE\nAPPLICATIONS"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
          ANDROID, IOS, CROSS-PLATFORM, AND PWA EXPERIENCES CONNECTED TO REAL BUSINESS DATA.
        </p>
      </>
    ),
  },
  {
    className: "flex w-full flex-col gap-5 border border-[#2D2D2D] bg-[#0A0A0A] p-8 md:h-[320px] md:flex-1 md:p-[40px] transition-colors hover:border-[#FFD600]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">[03]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#F5F5F0] md:text-[28px]">
          {"CUSTOM\nSOFTWARE"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
          INTERNAL TOOLS, WORKFLOW AUTOMATION, ROLE-BASED PORTALS, AND REPORTING MODULES.
        </p>
        <div className="flex h-[28px] w-fit items-center justify-center border border-[#FF6B35] bg-[#1A1A1A] px-[12px]">
          <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FF6B35]">[B2B]</span>
        </div>
      </>
    ),
  },
  {
    className: "flex w-full flex-col gap-5 border border-[#2D2D2D] bg-[#111111] p-8 md:h-[260px] md:flex-1 md:p-[40px] transition-colors hover:border-[#FFD600]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">[04]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#F5F5F0] md:text-[28px]">
          {"API\nINTEGRATION"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
          REST APIS, WEBHOOKS, THIRD-PARTY SYSTEMS, AND DATA SYNCHRONISATION.
        </p>
      </>
    ),
  },
  {
    className: "flex w-full flex-col gap-5 border-2 border-[#FF6B35] bg-[#0F0F0F] p-8 md:h-[260px] md:flex-1 md:p-[40px] transition-colors hover:border-[#FFD600]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FF6B35]">[05]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#F5F5F0] md:text-[28px]">
          {"DATABASE\nENGINEERING"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
          SCHEMA DESIGN, MIGRATION PLANNING, QUERY PERFORMANCE, AND REPORTING FOUNDATIONS.
        </p>
        <div className="flex h-[28px] w-fit items-center justify-center border border-[#FF6B35] bg-[#1A1A1A] px-[12px]">
          <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FF6B35]">[DATA]</span>
        </div>
      </>
    ),
  },
  {
    className: "flex w-full flex-col gap-5 border border-[#2D2D2D] bg-[#0A0A0A] p-8 md:h-[260px] md:flex-1 md:p-[40px] transition-colors hover:border-[#FFD600]",
    content: (
      <>
        <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">[06]</span>
        <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-1px] whitespace-pre-line text-[#F5F5F0] md:text-[28px]">
          {"MAINTENANCE\nSUPPORT"}
        </h3>
        <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
          BUG FIXES, SECURITY UPDATES, QA CHECKS, PERFORMANCE TUNING, AND RELEASE PLANNING.
        </p>
      </>
    ),
  },
];

export default function Bento() {
  return (
    <section className="flex w-full flex-col gap-10 bg-[#0D0D0D] px-6 py-16 md:gap-[48px] md:px-[120px] md:py-[100px]">
      <SectionHeader
        label="[05] // CAPABILITIES"
        title={"THE DELIVERY STACK.\nFROM IDEA TO SUPPORT."}
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex w-full flex-col gap-[2px]">
        <div className="flex w-full flex-col gap-[2px] md:flex-row">
          {bentoCells.slice(0, 3).map((cell, index) => (
            <MotionCard key={index} index={index} className={cell.className}>
              {cell.content}
            </MotionCard>
          ))}
        </div>
        <div className="flex w-full flex-col gap-[2px] md:flex-row">
          {bentoCells.slice(3).map((cell, index) => (
            <MotionCard key={index + 3} index={index + 3} className={cell.className}>
              {cell.content}
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
