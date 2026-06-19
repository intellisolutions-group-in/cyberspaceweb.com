import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import MotionCard from "@/components/motion/MotionCard";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const description = `Terms of Service for ${company.domain} covering website usage, service inquiries, content, and general limitations.`;

export const metadata: Metadata = createPageMetadata({
  title: `Terms of Service | ${company.brandName}`,
  description,
  path: "/terms/",
  keywords: ["terms of service", company.brandName, "software company terms"],
  openGraph: {
    title: `Terms of Service | ${company.brandName}`,
    description: `General website terms for ${company.domain} visitors and inquiry submissions.`,
  },
});

const sections = [
  {
    title: "Use of Website",
    text: "This website provides information about IT and software development services. Visitors should use the website lawfully and should not attempt to disrupt, misuse, copy, scrape, or interfere with the website or its forms.",
  },
  {
    title: "Service Information",
    text: "Service descriptions are provided for general understanding. Actual project scope, timelines, deliverables, pricing, and responsibilities must be discussed and agreed separately before any work begins.",
  },
  {
    title: "No Unsupported Claims",
    text: "The website does not display real client names or client logos unless they are provided and approved. Generic portfolio examples are illustrative project patterns.",
  },
  {
    title: "Inquiries and Applications",
    text: "Submitting an inquiry or career application does not create a service agreement, employment offer, or guarantee of response within a fixed time. Information submitted should be accurate and relevant.",
  },
  {
    title: "Intellectual Property",
    text: "Website text, layout, structure, and visual presentation belong to the website owner unless otherwise stated. Visitors may not reuse website material in a misleading or unauthorised manner.",
  },
  {
    title: "Contact",
    text: `For questions about these terms, contact ${company.email}.`,
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Service", path: "/terms/" },
          ]),
          webPageSchema({
            title: `Terms of Service | ${company.brandName}`,
            description,
            path: "/terms/",
          }),
        ]}
      />
      <PageHero
        label="[LEGAL] // TERMS"
        title={"TERMS\nOF SERVICE."}
        description={`These terms describe general conditions for using the ${company.domain} website and submitting inquiries.`}
        meta={[company.email, "WEBSITE TERMS", "SERVICE INQUIRIES"]}
      />
      <ContentSection label="[01] // TERMS" title="GENERAL WEBSITE TERMS.">
        <div className="grid gap-[2px]">
          {sections.map((section, index) => (
            <MotionCard as="article" key={section.title} index={index} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
              <h2 className="font-grotesk text-[24px] font-bold text-[#F5F5F0]">{section.title}</h2>
              <p className="mt-4 font-ibm-mono text-[12px] leading-[1.8] tracking-[1px] text-[#888888]">{section.text}</p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
    </SiteShell>
  );
}
