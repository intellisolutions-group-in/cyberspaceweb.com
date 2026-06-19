import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Portfolio and Case Studies | ${company.brandName}`,
  description:
    `View generic software project examples from ${company.brandName}, including web applications, mobile tools, modernisation, e-commerce, PWAs, reporting, and APIs.`,
  keywords: ["software portfolio", "case studies software development", company.brandName],
  openGraph: {
    title: `Portfolio | ${company.brandName}`,
    description: "Generic project examples for software development, modernisation, reporting, APIs, and websites.",
    url: `${company.url}/portfolio/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero
        label="[PORTFOLIO] // GENERIC CASE STUDIES"
        title={"PROJECT PATTERNS\nWITHOUT FALSE CLAIMS."}
        description="These examples describe realistic project types, challenges, solutions, stacks, and outcomes without using real client names or logos."
        meta={[`${portfolioItems.length} EXAMPLES`, "NO REAL CLIENT NAMES", "B2B SOFTWARE"]}
      />
      <ContentSection label="[01] // CASE STUDIES" title="SOFTWARE WORK PATTERNS.">
        <div className="grid gap-[2px] lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <MotionCard as="article" key={item.slug} index={index} className="flex flex-col gap-6 border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">{item.type.toUpperCase()}</span>
              </div>
              <h2 className="font-grotesk text-[28px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
                {item.title}
              </h2>
              <div className="grid gap-5">
                <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#888888]">
                  <span className="text-[#FFD600]">CHALLENGE:</span> {item.challenge}
                </p>
                <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#888888]">
                  <span className="text-[#FFD600]">SOLUTION:</span> {item.solution}
                </p>
                <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#CCCCCC]">
                  <span className="text-[#FFD600]">OUTCOME:</span> {item.outcome}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="border border-[#3D3D3D] bg-[#151515] px-3 py-2 font-ibm-mono text-[10px] tracking-[1px] text-[#AAAAAA]">
                    {tech}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
