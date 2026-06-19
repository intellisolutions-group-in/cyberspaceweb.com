import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

interface FeatureCardProps {
  iconColor: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  bgColor?: string;
  borderColor?: string;
  index: number;
}

function FeatureCard({
  iconColor,
  title,
  description,
  tag,
  tagColor,
  bgColor = "#111111",
  borderColor = "#2D2D2D",
  index,
}: FeatureCardProps) {
  return (
    <MotionCard
      index={index}
      className={`flex w-full flex-col gap-5 border p-8 md:h-[320px] md:flex-1 md:p-[32px] ${borderColor === "#FFD600" ? "border-[#FFD600]" : borderColor === "#FF6B35" ? "border-[#FF6B35]" : "border-[#555555]"}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="h-[40px] w-[40px] shrink-0" style={{ backgroundColor: iconColor }} />
      <h3 className="font-grotesk text-[18px] font-bold leading-[1.2] tracking-[1px] whitespace-pre-line text-[#F5F5F0]">
        {title}
      </h3>
      <p className="font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#666666]">
        {description}
      </p>
      <div
        className="flex h-[28px] w-fit items-center justify-center border bg-[#1A1A1A] px-[12px]"
        style={{ borderColor: tagColor }}
      >
        <span className="font-ibm-mono text-[11px] tracking-[2px]" style={{ color: tagColor }}>
          {tag}
        </span>
      </div>
    </MotionCard>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="flex w-full flex-col gap-12 bg-[#0A0A0A] px-6 py-16 md:gap-[64px] md:px-[120px] md:py-[100px]"
    >
      <SectionHeader
        label="[01] // CORE SERVICES"
        title={"SOFTWARE BUILT\nAROUND YOUR WORKFLOW."}
        subtitle="WEBSITES, APPLICATIONS, API INTEGRATIONS, DATABASES, AND SUPPORT FOR INDIAN BUSINESSES."
      />

      <div className="flex w-full flex-col gap-[2px] overflow-visible md:flex-row md:items-stretch">
        <FeatureCard
          index={0}
          iconColor="#FFD600"
          title={"WEB AND APP\nDEVELOPMENT"}
          description="RESPONSIVE WEBSITES, WEB APPLICATIONS, MOBILE APPS, PWAS, AND CUSTOMER-FACING PLATFORMS."
          tag="BUILD"
          tagColor="#FFD600"
          borderColor="#FFD600"
        />
        <FeatureCard
          index={1}
          iconColor="#FF6B35"
          title={"CUSTOM BUSINESS\nSOFTWARE"}
          description="WORKFLOW AUTOMATION, INTERNAL PORTALS, ENTERPRISE MODULES, AND REPORTING SYSTEMS."
          tag="SYSTEMS"
          tagColor="#FF6B35"
          bgColor="#0F0F0F"
          borderColor="#FF6B35"
        />
        <FeatureCard
          index={2}
          iconColor="#F5F5F0"
          title={"MODERNIZATION\nAND SUPPORT"}
          description="LEGACY IMPROVEMENTS, API INTEGRATIONS, TESTING, CLOUD READINESS, AND MAINTENANCE."
          tag="SUPPORT"
          tagColor="#888888"
          borderColor="#555555"
        />
      </div>
    </section>
  );
}
