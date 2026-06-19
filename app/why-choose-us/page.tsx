import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Why Choose ${company.brandName} | IT and Software Development India`,
  description:
    `Reasons to choose ${company.brandName} for practical, maintainable software development, modern web platforms, and business applications in India.`,
  keywords: ["why choose software development company", "IT services India", company.brandName],
  openGraph: {
    title: `Why Choose ${company.brandName}`,
    description: "A practical software development partner for Indian businesses that need clarity, maintainability, and dependable delivery.",
    url: `${company.url}/why-choose-us/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

const reasons = [
  ["BUSINESS-FIRST DISCOVERY", "We begin with the workflow, user groups, constraints, and measurable goals before recommending screens, stacks, or timelines."],
  ["MAINTAINABLE ARCHITECTURE", "The codebase, data model, and integrations are planned so future enhancements do not become expensive rewrites."],
  ["INDIA-FOCUSED COMMUNICATION", "Content, delivery assumptions, support expectations, and business tone are shaped for Indian companies and users."],
  ["PHASED DELIVERY", "Projects can be split into practical milestones so teams launch essentials first and improve based on real feedback."],
  ["NO FALSE CLAIMS", "The website and project approach avoid invented awards, partnerships, client names, or certifications that were not provided."],
  ["SUPPORT AFTER LAUNCH", "Maintenance, improvements, testing, and modernisation can continue after the first version goes live."],
];

export default function WhyChooseUsPage() {
  return (
    <SiteShell>
      <PageHero
        label="[WHY CHOOSE US] // PRACTICAL DIFFERENCE"
        title={"CLEAR SOFTWARE.\nLESS NOISE."}
        description={`Choose ${company.brandName} when you need a technology partner focused on business workflows, maintainable code, strong interfaces, and realistic delivery planning.`}
        meta={["BUSINESS-FIRST", "MAINTAINABLE", "INDIA-FOCUSED"]}
      />
      <ContentSection
        label="[01] // REASONS"
        title={"BUILT FOR TEAMS\nTHAT NEED SOFTWARE TO WORK."}
      >
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
          {reasons.map(([title, description], index) => (
            <MotionCard key={title} index={index} className="flex min-h-[260px] flex-col gap-5 border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <span className="font-grotesk text-[42px] font-bold tracking-[-2px] text-[#FFD600]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-grotesk text-[22px] font-bold tracking-[1px] text-[#F5F5F0]">{title}</h2>
              <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">{description}</p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        label="[02] // FIT"
        title="WHEN WE ARE A GOOD MATCH."
        className="bg-[#050505]"
      >
        <div className="grid gap-[2px] lg:grid-cols-2">
          <MotionCard index={0} className="border-2 border-[#FFD600] bg-[#0A0A0A] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <h2 className="font-grotesk text-[30px] font-bold text-[#FFD600]">GOOD FIT</h2>
            <p className="mt-5 font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#CCCCCC]">
              You need a business website, web application, mobile app, internal portal, API integration, database-backed workflow, or modernisation plan. You value clean communication, reviewable milestones, realistic scope, and maintainable code.
            </p>
          </MotionCard>
          <MotionCard index={1} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <h2 className="font-grotesk text-[30px] font-bold text-[#F5F5F0]">NOT THE RIGHT FIT</h2>
            <p className="mt-5 font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              You need instant estimates without discovery, cloned designs, unrealistic launch promises, fabricated portfolio claims, or unsupported technology decisions. We keep the project grounded in the actual business case.
            </p>
          </MotionCard>
        </div>
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
