import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { company } from "@/data/company";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: `FAQ | ${company.brandName}`,
  description:
    `Answers to common questions about software projects, process, technology, support, and business inquiries at ${company.brandName}.`,
  keywords: ["software development FAQ", "IT services questions", company.brandName],
  openGraph: {
    title: `FAQ | ${company.brandName}`,
    description: "Common questions about projects, technology, support, and business engagement.",
    url: `${company.url}/faq/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

export default function FAQPage() {
  return (
    <SiteShell>
      <PageHero
        label="[FAQ] // COMMON QUESTIONS"
        title={"ANSWERS BEFORE\nTHE FIRST CALL."}
        description="Review common questions about software project scope, process, technologies, support, and business engagement."
        meta={[`${faqs.length} QUESTIONS`, "CATEGORISED", "INDIA-FOCUSED"]}
      />
      <ContentSection label="[01] // FAQ" title="PROJECT CLARITY.">
        <FAQAccordion items={faqs} grouped />
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
