import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: `Testimonials | ${company.brandName}`,
  description:
    "Read realistic testimonials for software development, UI/UX, API, QA, and custom application work without real company logos or client names.",
  keywords: ["software development testimonials", "IT project feedback", company.brandName],
  openGraph: {
    title: `Testimonials | ${company.brandName}`,
    description: "Human testimonial examples for software projects, without displaying real client company names or logos.",
    url: `${company.url}/testimonials/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        label="[TESTIMONIALS] // PROJECT FEEDBACK"
        title={"WHAT CLIENTS\nMIGHT VALUE."}
        description="Testimonials use human names and designations only. No real client company names, logos, or unsupported claims are displayed."
        meta={[`${testimonials.length} TESTIMONIALS`, "NO LOGOS", "NO REAL COMPANY NAMES"]}
      />
      <ContentSection label="[01] // FEEDBACK" title="PRACTICAL OUTCOMES.">
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionCard as="article" key={`${testimonial.name}-${testimonial.projectType}`} index={index} className="flex min-h-[280px] flex-col gap-6 border-l-4 border-l-[#FFD600] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <p className="font-ibm-mono text-[13px] leading-[1.7] tracking-[1px] text-[#CCCCCC]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <h2 className="font-grotesk text-[16px] font-bold tracking-[1px] text-[#F5F5F0]">
                  {testimonial.name}
                </h2>
                <p className="mt-1 font-ibm-mono text-[11px] tracking-[1px] text-[#666666]">
                  {testimonial.designation} // {testimonial.projectType}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
