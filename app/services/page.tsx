import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import ServiceGrid from "@/components/sections/ServiceGrid";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: `Software Development Services in India | ${company.brandName}`,
  description:
    "Explore web development, mobile apps, custom software, APIs, databases, cloud applications, testing, and software consulting services for Indian businesses.",
  keywords: ["software development services India", "web development India", "custom software development", company.brandName],
  openGraph: {
    title: `Software Development Services | ${company.brandName}`,
    description:
      "A complete IT and software development service catalogue for business websites, apps, platforms, APIs, databases, and support.",
    url: `${company.url}/services/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

const categories = Array.from(new Set(services.map((service) => service.category)));

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        label="[SERVICES] // IT AND SOFTWARE DEVELOPMENT"
        title={"SOFTWARE SERVICES\nFOR PRACTICAL GROWTH."}
        description={`From websites and mobile apps to enterprise systems, APIs, databases, and software modernisation, ${company.brandName} helps Indian businesses plan and build dependable digital systems.`}
        meta={["18 SERVICE AREAS", "INDIA-FOCUSED", "STATIC-READY WEB"]}
      />
      <ContentSection
        label="[01] // SERVICE CATEGORIES"
        title="THE BUILD MAP."
        description="Services are grouped around the software lifecycle: plan, design, build, integrate, test, launch, and maintain."
      >
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <MotionCard key={category} index={index} className="border border-[#2D2D2D] bg-[#101010] p-6 transition-colors hover:border-[#FFD600]">
              <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">CATEGORY</span>
              <h2 className="mt-4 font-grotesk text-[24px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
                {category}
              </h2>
              <p className="mt-4 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
                {services.filter((service) => service.category === category).length} connected service areas.
              </p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        label="[02] // ALL SERVICES"
        title={"CHOOSE THE RIGHT\nDELIVERY TRACK."}
        className="bg-[#050505]"
      >
        <ServiceGrid services={services} />
      </ContentSection>
      <CTASection />
    </SiteShell>
  );
}
