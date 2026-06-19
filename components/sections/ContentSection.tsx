import GlitchText from "@/components/GlitchText";

type ContentSectionProps = {
  label?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function ContentSection({
  label,
  title,
  description,
  children,
  className = "bg-[#0A0A0A]",
}: ContentSectionProps) {
  return (
    <section className={`flex w-full flex-col gap-10 px-6 py-16 md:px-[120px] md:py-[100px] ${className}`}>
      {(label || title || description) && (
        <div className="flex max-w-[820px] flex-col gap-4">
          {label && (
            <span className="font-ibm-mono text-[11px] font-bold tracking-[3px] text-[#FFD600]">
              <GlitchText text={label} speed={30} />
            </span>
          )}
          {title && (
            <h2 className="font-grotesk text-[36px] font-bold leading-[1.05] tracking-[-1px] text-[#F5F5F0] md:text-[56px] whitespace-pre-line">
              <GlitchText text={title} speed={40} delay={150} />
            </h2>
          )}
          {description && (
            <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777] md:text-[13px]">
              <GlitchText text={description} speed={20} delay={350} />
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
