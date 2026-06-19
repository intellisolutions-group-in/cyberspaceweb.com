import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import ProcessGrid from "@/components/sections/ProcessGrid";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { values } from "@/data/process";

export const metadata: Metadata = {
  title: `About ${company.brandName} | Software Development Company in India`,
  description:
    `Learn about ${company.brandName}, an India-focused IT and software development company established from its 2004 domain foundation.`,
  keywords: [`about ${company.brandName}`, "software development company India", "IT company India"],
  openGraph: {
    title: `About ${company.brandName}`,
    description:
      "Company overview, mission, values, software development expertise, and India-focused business presence.",
    url: `${company.url}/about/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        label="[ABOUT] // COMPANY PROFILE"
        title={`${company.brandName}\nBUILT ON A 2004 DIGITAL FOUNDATION.`}
        description={`${company.brandName} is positioned as an India-focused IT and software development company for websites, applications, integrations, databases, and custom business systems.`}
        meta={[`EST. ${company.establishedYear}`, `DOMAIN ${company.domainRegisteredDate}`, company.country.toUpperCase()]}
      />

      <ContentSection
        label="[01] // COMPANY OVERVIEW"
        title={"SOFTWARE THAT FITS\nTHE BUSINESS."}
        description="The company profile is intentionally practical: understand the workflow, design the right digital system, build maintainable software, and support the product after launch."
      >
        <div className="grid gap-[2px] lg:grid-cols-[1.1fr_0.9fr]">
          <MotionCard as="article" index={0} className="flex flex-col gap-6 border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#CCCCCC]">
              {company.brandName} serves businesses that need dependable software rather than generic templates. The work can include a public website, a custom application, an internal portal, a mobile app, a database-backed workflow, an API integration, or a modernisation plan for older systems.
            </p>
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              The domain was registered on {company.domainRegisteredDate}, and the establishment year is set as {company.establishedYear} based on that foundation. This gives the brand a long digital presence while keeping the current website fresh, modern, and ready for software service growth in India.
            </p>
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              The aim is to help teams replace scattered manual work with clear digital systems, improve customer-facing experiences, and create software that can be maintained over time. We avoid false claims, invented awards, and unnecessary complexity; the focus is useful engineering with clean communication.
            </p>
          </MotionCard>
          <div className="grid gap-[2px]">
            {[
              ["MISSION", "Build practical software systems that improve business clarity, speed, and customer experience."],
              ["VISION", "Become a trusted India-focused technology partner for maintainable digital products and business applications."],
              ["PRESENCE", "Remote-ready delivery for Indian businesses, with office address details reserved for future update."],
            ].map(([label, text], index) => (
              <MotionCard key={label} index={index + 1} className="border border-[#2D2D2D] bg-[#0F0F0F] p-7 transition-colors hover:border-[#FFD600]">
                <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">{label}</span>
                <p className="mt-4 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#AAAAAA]">{text}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection label="[02] // VALUES" title="HOW WE WORK." className="bg-[#0D0D0D]">
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => (
            <MotionCard key={value} index={index} className="min-h-[150px] border border-[#2D2D2D] bg-[#101010] p-6 transition-colors hover:border-[#FFD600]">
              <span className="mb-5 block h-[8px] w-[8px] bg-[#FFD600]" />
              <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#CCCCCC]">{value}</p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection label="[03] // DELIVERY RHYTHM" title="A CLEAR PROCESS.">
        <ProcessGrid />
      </ContentSection>

      <CTASection />
    </SiteShell>
  );
}
