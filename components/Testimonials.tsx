import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  bgColor?: string;
  accentColor: string;
  index: number;
}

function TestimonialCard({
  quote,
  name,
  role,
  bgColor = "#111111",
  accentColor,
  index,
}: TestimonialCardProps) {
  return (
    <MotionCard
      index={index}
      className="flex w-full flex-col gap-6 border-l-4 p-8 md:flex-1 md:p-[40px]"
      style={{ backgroundColor: bgColor, borderLeftColor: accentColor }}
    >
      <p className="font-ibm-mono text-[13px] leading-[1.6] tracking-[1px] text-[#CCCCCC]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-[12px]">
        <div className="h-[36px] w-[36px] shrink-0 rounded-full bg-[#333333]" />
        <div className="flex flex-col gap-[2px]">
          <span className="font-grotesk text-[13px] font-bold tracking-[1px] text-[#F5F5F0]">
            {name}
          </span>
          <span className="font-ibm-mono text-[11px] tracking-[1px] text-[#888888]">
            {role}
          </span>
        </div>
      </div>
    </MotionCard>
  );
}

export default function Testimonials() {
  return (
    <section className="flex w-full flex-col gap-12 bg-[#0A0A0A] px-6 py-16 md:gap-[64px] md:px-[120px] md:py-[100px]">
      <SectionHeader
        label="[04] // CLIENT FEEDBACK"
        title={"PRACTICAL SOFTWARE.\nVISIBLE OUTCOMES."}
      />

      <div className="flex w-full flex-col gap-[2px] md:flex-row">
        <TestimonialCard
          index={0}
          quote="THE TEAM FIRST UNDERSTOOD OUR WORKFLOW, THEN BUILT THE SYSTEM AROUND HOW OUR PEOPLE ACTUALLY WORK."
          name="ROHAN MEHTA"
          role="OPERATIONS HEAD"
          accentColor="#FFD600"
        />
        <TestimonialCard
          index={1}
          quote="THE NEW WEBSITE IS FASTER, CLEARER, AND GIVES OUR SALES TEAM BETTER QUALITY INQUIRIES."
          name="NISHA PATEL"
          role="MARKETING MANAGER"
          bgColor="#0D0D0D"
          accentColor="#FF6B35"
        />
        <TestimonialCard
          index={2}
          quote="THE PHASED ROADMAP HELPED US LAUNCH THE IMPORTANT MODULES FIRST WITHOUT LOSING THE BIGGER PLAN."
          name="AMIT SHAH"
          role="FOUNDER"
          accentColor="#F5F5F0"
        />
      </div>
    </section>
  );
}
