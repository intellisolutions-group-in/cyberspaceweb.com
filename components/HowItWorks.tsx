import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  index: number;
}

function StepCard({
  number,
  title,
  description,
  bgColor = "#0A0A0A",
  borderColor = "#2D2D2D",
  borderWidth = 1,
  index,
}: StepCardProps) {
  return (
    <MotionCard
      index={index}
      className={`flex w-full flex-col gap-4 border p-8 md:h-[260px] md:flex-1 md:p-[40px] ${
        borderColor === "#FFD600" ? "border-[#FFD600]" : "border-[#2D2D2D]"
      } ${borderWidth === 2 ? "border-2" : "border"}`}
      style={{ backgroundColor: bgColor }}
    >
      <span className="font-grotesk text-[48px] font-bold tracking-[-2px] text-[#FFD600]">
        {number}
      </span>
      <h3 className="font-grotesk text-[20px] font-bold leading-[1.2] tracking-[1px] whitespace-pre-line text-[#F5F5F0]">
        {title}
      </h3>
      <p className="font-ibm-mono text-[11px] leading-[1.5] tracking-[1px] text-[#888888]">
        {description}
      </p>
    </MotionCard>
  );
}

export default function HowItWorks() {
  return (
    <section className="flex w-full flex-col gap-12 bg-[#0D0D0D] px-6 py-16 md:gap-[64px] md:px-[120px] md:py-[100px]">
      <SectionHeader
        label="[02] // HOW IT WORKS"
        title={"DISCOVER.\nBUILD. SUPPORT."}
      />

      <div className="flex w-full flex-col gap-[2px] md:flex-row">
        <StepCard
          index={0}
          number="01"
          title={"MAP THE\nWORKFLOW"}
          description="UNDERSTAND USERS, SYSTEMS, DATA, RISKS, AND THE FIRST VALUABLE RELEASE."
        />
        <StepCard
          index={1}
          number="02"
          title={"ENGINEER\nTHE PRODUCT"}
          description="DESIGN, DEVELOP, INTEGRATE, AND REVIEW IN FOCUSED DELIVERY MILESTONES."
          bgColor="#111111"
          borderColor="#FFD600"
          borderWidth={1}
        />
        <StepCard
          index={2}
          number="03"
          title={"LAUNCH AND\nIMPROVE"}
          description="VALIDATE, DEPLOY, DOCUMENT, SUPPORT, AND PLAN THE NEXT PRACTICAL MODULE."
        />
      </div>
    </section>
  );
}
