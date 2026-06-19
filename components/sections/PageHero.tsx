import GlitchText from "@/components/GlitchText";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  meta?: string[];
};

export default function PageHero({ label, title, description, meta = [] }: PageHeroProps) {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#0A0A0A] px-6 py-16 pt-[120px] md:px-[120px] md:py-[120px] md:pt-[150px]">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(90deg,#FFD600_1px,transparent_1px),linear-gradient(0deg,#FFD600_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative z-10 flex max-w-[1060px] flex-col gap-6">
        <span className="font-ibm-mono text-[11px] font-bold tracking-[3px] text-[#FFD600]">
          <GlitchText text={label} speed={30} />
        </span>
        <h1 className="font-grotesk text-[clamp(40px,9vw,96px)] font-bold leading-none tracking-[-2px] text-[#F5F5F0] whitespace-pre-line">
          <GlitchText text={title} speed={40} delay={150} />
        </h1>
        <p className="max-w-[780px] font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888] md:text-[15px]">
          <GlitchText text={description} speed={20} delay={350} />
        </p>
        {meta.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {meta.map((item) => (
              <span
                key={item}
                className="border border-[#2D2D2D] bg-[#111111] px-3 py-2 font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
