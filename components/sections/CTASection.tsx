import GlitchText from "@/components/GlitchText";
import { company } from "@/data/company";

type CTASectionProps = {
  label?: string;
  title?: string;
  description?: string;
};

export default function CTASection({
  label = "[NEXT STEP]",
  title = "READY TO SHAPE THE SOFTWARE ROADMAP?",
  description = "Share your requirement and we will help you identify the right delivery path, scope, and first practical milestone.",
}: CTASectionProps) {
  return (
    <section className="flex w-full flex-col items-start gap-8 border-t-2 border-[#FFD600] bg-[#0A0A0A] px-6 py-16 md:flex-row md:items-center md:justify-between md:px-[120px] md:py-[90px]">
      <div className="flex max-w-[760px] flex-col gap-4">
        <span className="font-ibm-mono text-[11px] font-bold tracking-[3px] text-[#FFD600]">
          <GlitchText text={label} speed={30} />
        </span>
        <h2 className="font-grotesk text-[34px] font-bold leading-[1.05] tracking-[-1px] text-[#F5F5F0] md:text-[56px]">
          <GlitchText text={title} speed={40} delay={150} />
        </h2>
        <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#888888] md:text-[13px]">
          <GlitchText text={description} speed={20} delay={350} />
        </p>
      </div>
      <a
        href={`mailto:${company.email}`}
        className="flex h-[56px] w-full items-center justify-center bg-[#FFD600] px-8 font-grotesk text-[12px] font-bold tracking-[2px] text-[#0A0A0A] transition-colors hover:bg-[#F5F5F0] sm:w-auto"
      >
        EMAIL {company.email}
      </a>
    </section>
  );
}
