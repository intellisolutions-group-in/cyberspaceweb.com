import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.brandName}`,
  description:
    `Privacy Policy for ${company.domain} covering inquiry forms, career applications, contact details, and website usage information.`,
  keywords: ["privacy policy", company.brandName, "software company privacy"],
  openGraph: {
    title: `Privacy Policy | ${company.brandName}`,
    description: "Privacy information for website visitors, inquiries, and career applications.",
    url: `${company.url}/privacy/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

const sections = [
  {
    title: "Information We Collect",
    text: "When you use the inquiry, contact, or career application forms, we may collect information such as name, email address, phone number, project details, current location, resume file, and optional cover letter. We only request information needed to respond to the inquiry or review the application.",
  },
  {
    title: "How We Use Information",
    text: "Information submitted through this website may be used to respond to business inquiries, understand project requirements, communicate about services, review career applications, improve website content, and maintain basic operational records.",
  },
  {
    title: "Form Behaviour",
    text: "Normal inquiry forms on this static website use local validation and show a success message without making a real API call. The career application form is designed to make a fake submission request to the company domain endpoint described in the project brief.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell personal information. Information may be shared internally with authorised people who need it to respond to inquiries, evaluate applications, or support website operations.",
  },
  {
    title: "Security",
    text: "Reasonable safeguards should be used when handling submitted information. No website transmission can be guaranteed to be completely secure, so users should avoid submitting sensitive information that is not required for the inquiry.",
  },
  {
    title: "Contact",
    text: `For privacy-related questions, contact ${company.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        label="[LEGAL] // PRIVACY"
        title={"PRIVACY\nPOLICY."}
        description={`This policy explains how information submitted through ${company.domain} may be collected, used, and handled.`}
        meta={[company.email, "INDIA", "WEBSITE FORMS"]}
      />
      <ContentSection label="[01] // POLICY" title="HOW INFORMATION IS HANDLED.">
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
