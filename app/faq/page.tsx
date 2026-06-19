import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { faqs } from "@/data/faq";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const description = `Answers to common questions about software projects, process, technology, support, and business inquiries at ${company.brandName}.`;

export const metadata: Metadata = createPageMetadata({
  title: `FAQ | ${company.brandName}`,
  description,
  path: "/faq/",
  keywords: ["software development FAQ", "IT services questions", company.brandName],
  openGraph: {
    title: `FAQ | ${company.brandName}`,
    description: "Common questions about projects, technology, support, and business engagement.",
  },
});

export default function FAQPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq/" },
          ]),
          faqPageSchema(faqs),
          webPageSchema({
            title: `FAQ | ${company.brandName}`,
            description,
            path: "/faq/",
          }),
        ]}
      />
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
