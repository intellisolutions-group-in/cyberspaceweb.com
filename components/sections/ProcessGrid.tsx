import { processSteps } from "@/data/process";
import MotionCard from "@/components/motion/MotionCard";

type ProcessGridProps = {
  steps?: typeof processSteps;
};

export default function ProcessGrid({ steps = processSteps }: ProcessGridProps) {
  return (
    <div className="grid w-full gap-[2px] md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <MotionCard
          key={step.number}
          index={index}
          className="flex min-h-[240px] flex-col gap-5 border border-[#2D2D2D] bg-[#0F0F0F] p-8 transition-colors hover:border-[#FFD600]"
        >
          <span className="font-grotesk text-[48px] font-bold leading-none tracking-[-2px] text-[#FFD600]">
            {step.number}
          </span>
          <h3 className="font-grotesk text-[22px] font-bold tracking-[1px] text-[#F5F5F0]">
            {step.title}
          </h3>
          <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#666666]">
            {step.description}
          </p>
        </MotionCard>
      ))}
    </div>
  );
}
