import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import ProcessGrid from "@/components/sections/ProcessGrid";
import CTASection from "@/components/sections/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { processSteps } from "@/data/process";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const description = `See the ${company.brandName} software development process from discovery and architecture to design, build, validation, launch, and support.`;

export const metadata: Metadata = createPageMetadata({
  title: `Our Development Process | ${company.brandName}`,
  description,
  path: "/our-process/",
  keywords: ["software development process", "development methodology India", company.brandName],
  openGraph: {
    title: `Our Development Process | ${company.brandName}`,
    description: "A clear software delivery process for websites, apps, APIs, databases, and custom business systems.",
  },
});

export default function OurProcessPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Process", path: "/our-process/" },
          ]),
          webPageSchema({
            title: `Our Development Process | ${company.brandName}`,
            description,
            path: "/our-process/",
          }),
        ]}
      />
      <PageHero
        label="[PROCESS] // DEVELOPMENT METHODOLOGY"
        title={"FROM DISCOVERY\nTO LAUNCH."}
        description="The process keeps decisions visible, scope controlled, and delivery connected to the business outcome from the first conversation to post-launch support."
        meta={["DISCOVER", "DESIGN", "BUILD", "VALIDATE", "LAUNCH"]}
      />
      <ContentSection
        label="[01] // DELIVERY STAGES"
        title="THE SIX-STAGE TRACK."
        description="Every project can be scaled up or down, but the rhythm stays the same: understand the problem, shape the system, build in iterations, validate carefully, and hand over clearly."
      >
        <ProcessGrid steps={processSteps} />
      </ContentSection>
      <ContentSection
        label="[02] // OPERATING PRINCIPLES"
        title="HOW DECISIONS STAY CLEAR."
        className="bg-[#050505]"
      >
        <div className="grid gap-[2px] md:grid-cols-3">
          {[
            ["DOCUMENTED SCOPE", "Requirements, assumptions, exclusions, and priorities are written down so the project does not drift silently."],
            ["REVIEWABLE MILESTONES", "Stakeholders review working sections and structured deliverables instead of waiting until the end."],
            ["QUALITY BUILT IN", "Testing, responsive checks, accessibility, security basics, and performance review are part of the delivery rhythm."],
          ].map(([title, text], index) => (
            <MotionCard key={title} index={index} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <h2 className="font-grotesk text-[24px] font-bold text-[#F5F5F0]">{title}</h2>
              <p className="mt-5 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">{text}</p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
