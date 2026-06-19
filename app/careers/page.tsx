import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CareersList from "@/components/ui/CareersList";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { jobs } from "@/data/careers";

export const metadata: Metadata = {
  title: `Careers at ${company.brandName} | Software Jobs`,
  description:
    `Explore software development, frontend, backend, full stack, UI/UX, QA, and business analyst roles at ${company.brandName}. Location: ${company.careerLocation}.`,
  keywords: ["software careers India remote", "developer jobs", company.brandName],
  openGraph: {
    title: `Careers at ${company.brandName}`,
    description: "Open roles for software delivery, design, quality, and product analysis.",
    url: `${company.url}/careers/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

export default function CareersPage() {
  return (
    <SiteShell>
      <PageHero
        label="[CAREERS] // BUILD WITH US"
        title={"WORK ON\nREAL SOFTWARE."}
        description="Explore roles for people who care about clear interfaces, maintainable systems, practical business workflows, and disciplined delivery."
        meta={[company.careerLocation.toUpperCase(), `${jobs.length} OPEN ROLES`, "NO SALARY DETAILS SHOWN"]}
      />
      <ContentSection
        label="[01] // OPENINGS"
        title={"CURRENT\nOPPORTUNITIES."}
        description={`Each role is listed with location as ${company.careerLocation}. Applications are collected through a local form modal with resume validation.`}
      >
        <CareersList jobs={jobs} />
      </ContentSection>
      <ContentSection
        label="[02] // WORK STYLE"
        title="WHAT WE VALUE."
        className="bg-[#050505]"
      >
        <div className="grid gap-[2px] md:grid-cols-3">
          {[
            ["OWNERSHIP", "Take responsibility for clarity, quality, communication, and follow-through."],
            ["PRACTICAL THINKING", "Choose solutions that fit the business problem, not just the latest trend."],
            ["DOCUMENTATION", "Write down decisions, assumptions, and handover notes so work remains maintainable."],
          ].map(([title, text], index) => (
            <MotionCard key={title} index={index} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <h2 className="font-grotesk text-[24px] font-bold text-[#F5F5F0]">{title}</h2>
              <p className="mt-5 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">{text}</p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <CTASection
        title="DO NOT SEE THE RIGHT ROLE?"
        description={`Send your profile to ${company.email}. If there is a fit for upcoming work, the team can reach out.`}
      />
    </SiteShell>
  );
}
