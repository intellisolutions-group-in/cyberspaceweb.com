import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import ContactForm from "@/components/ui/ContactForm";
import MotionCard from "@/components/motion/MotionCard";
import JsonLd from "@/components/seo/JsonLd";
import {
  company,
  formatOfficeAddress,
  getPhone,
  getPrimaryOffice,
} from "@/data/company";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const description = `Contact ${company.brandName} for website development, custom software, mobile app development, APIs, databases, and IT consulting inquiries in India.`;

export const metadata: Metadata = createPageMetadata({
  title: `Contact ${company.brandName} | Software Development Inquiry`,
  description,
  path: "/contact/",
  keywords: ["contact software development company India", company.email, company.brandName],
  openGraph: {
    title: `Contact ${company.brandName}`,
    description: "Send an inquiry for software development, web development, mobile apps, APIs, and support.",
  },
});

export default function ContactPage() {
  const phone = getPhone();
  const office = getPrimaryOffice();
  const heroMeta = [
    company.email,
    ...(phone ? [phone] : []),
    company.country.toUpperCase(),
    "BUSINESS HOURS IST",
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
          contactPageSchema(),
        ]}
      />
      <PageHero
        label="[CONTACT] // START A CONVERSATION"
        title={"TELL US WHAT\nYOU WANT TO BUILD."}
        description="Share your software requirement, current challenge, or modernisation goal. We will review the details and respond through the primary contact channel."
        meta={heroMeta}
      />
      <ContentSection label="[01] // INQUIRY FORM" title="SEND PROJECT DETAILS.">
        <div className="grid gap-[2px] lg:grid-cols-[1fr_0.8fr]">
          <ContactForm source="Contact page" />
          <aside className="flex flex-col gap-[2px]">
            <MotionCard index={0} className="border-2 border-[#FFD600] bg-[#0A0A0A] p-7 md:p-8">
              <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">PRIMARY EMAIL</span>
              <a href={`mailto:${company.email}`} className="mt-4 block break-all font-grotesk text-[28px] font-bold text-[#F5F5F0]">
                {company.email}
              </a>
            </MotionCard>
            {phone && (
              <MotionCard index={1} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
                <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">PHONE</span>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-4 block font-grotesk text-[24px] font-bold text-[#F5F5F0]">
                  {phone}
                </a>
              </MotionCard>
            )}
            {office ? (
              <MotionCard index={phone ? 2 : 1} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
                <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">OFFICE</span>
                <p className="mt-4 font-grotesk text-[20px] font-bold text-[#F5F5F0]">{office.label}</p>
                <address className="mt-3 not-italic font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
                  {formatOfficeAddress(office)}
                </address>
              </MotionCard>
            ) : (
              <MotionCard index={phone ? 2 : 1} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
                <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">COUNTRY FOCUS</span>
                <p className="mt-4 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
                  Software development inquiries for businesses in {company.country}, with remote-ready communication and delivery.
                </p>
              </MotionCard>
            )}
            <MotionCard index={phone && office ? 3 : phone || office ? 2 : 1} hover={false} className="flex min-h-[180px] items-center justify-center border border-[#2D2D2D] bg-[#0F0F0F] p-7">
              <span className="font-ibm-mono text-[11px] tracking-[2px] text-[#444444]">SERVICE COVERAGE // INDIA</span>
            </MotionCard>
          </aside>
        </div>
      </ContentSection>
      <ContentSection
        label="[02] // BUSINESS HOURS"
        title="RESPONSE WINDOW."
        className="bg-[#050505]"
      >
        <MotionCard index={0} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
          <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#CCCCCC]">
            {company.businessHours}. For detailed software requirements, include the business goal, expected users, preferred timeline, existing systems, and any reference material so the first response can be more useful.
          </p>
        </MotionCard>
      </ContentSection>
    </SiteShell>
  );
}
