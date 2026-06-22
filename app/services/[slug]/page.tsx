import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import ServiceGrid from "@/components/sections/ServiceGrid";
import MotionCard from "@/components/motion/MotionCard";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { getRelatedServices, getService, services } from "@/data/services";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} in India | ${company.brandName}`;
  const description = `${service.summary} Work with ${company.brandName} for ${service.title.toLowerCase()} planned around business goals, maintainability, and reliable delivery.`;

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}/`,
    keywords: [
      service.title,
      `${service.title} India`,
      "software development company India",
      company.brandName,
      service.category,
    ],
    openGraph: {
      title,
      description,
    },
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.related);
  const pageDescription = `${service.summary} Work with ${company.brandName} for ${service.title.toLowerCase()} planned around business goals, maintainability, and reliable delivery.`;

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.title, path: `/services/${service.slug}/` },
          ]),
          serviceSchema({
            title: service.title,
            summary: service.summary,
            slug: service.slug,
          }),
          webPageSchema({
            title: `${service.title} in India | ${company.brandName}`,
            description: pageDescription,
            path: `/services/${service.slug}/`,
          }),
        ]}
      />
      <PageHero
        label={`[SERVICE] // ${service.category.toUpperCase()}`}
        title={service.title.toUpperCase()}
        description={service.summary}
        meta={[company.country.toUpperCase(), "STATIC-READY", "BUSINESS SOFTWARE"]}
      />

      <ContentSection
        label="[01] // OVERVIEW"
        title={`WHAT ${service.shortTitle.toUpperCase()} SHOULD DELIVER`}
        description={service.overview}
      >
        <div className="grid gap-[2px] lg:grid-cols-[1.4fr_0.8fr]">
          <MotionCard as="article" index={0} className="flex flex-col gap-6 border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#CCCCCC]">
              {service.idealFor}
            </p>
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              A strong {service.title.toLowerCase()} engagement starts with the business case. Before screens or code, we map the people who will use the system, the information they need, the actions they must complete, and the systems that must exchange data. This helps avoid a common problem in software projects: building a technically impressive product that does not match the way the organisation actually works.
            </p>
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              For Indian businesses, practical delivery matters. Budgets, timelines, internal approvals, legacy tools, network quality, and support expectations all influence the right solution. We shape the architecture so the first release can create value quickly, while still leaving enough structure for future modules, integrations, reporting, and maintenance.
            </p>
            <p className="font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              The result is a software experience that is easier for customers or teams to understand, easier for managers to track, and easier for developers to extend. Every project is treated as a long-term business asset, not just a one-time delivery.
            </p>
          </MotionCard>

          <MotionCard as="aside" index={1} className="flex flex-col border-2 border-[#FFD600] bg-[#0A0A0A] p-7 md:p-8">
            <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">
              SERVICE SNAPSHOT
            </span>
            <div className="mt-7 flex flex-col gap-5">
              <div>
                <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">CATEGORY</span>
                <p className="mt-2 font-grotesk text-[22px] font-bold text-[#F5F5F0]">{service.category}</p>
              </div>
              <div>
                <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">COUNTRY FOCUS</span>
                <p className="mt-2 font-grotesk text-[22px] font-bold text-[#F5F5F0]">{company.country}</p>
              </div>
              <div>
                <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">CONTACT</span>
                <p className="mt-2 font-grotesk text-[18px] font-bold text-[#FFD600]">{company.email}</p>
              </div>
            </div>
          </MotionCard>
        </div>
      </ContentSection>

      <ContentSection
        label="[02] // KEY BENEFITS"
        title="WHAT THE ENGAGEMENT INCLUDES"
        className="bg-[#0D0D0D]"
      >
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
          {service.outcomes.map((outcome, index) => (
            <MotionCard key={outcome} index={index} className="min-h-[150px] border border-[#2D2D2D] bg-[#101010] p-6 transition-colors hover:border-[#FFD600]">
              <span className="mb-5 block h-[8px] w-[8px] bg-[#FFD600]" />
              <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#CCCCCC]">
                {outcome}
              </p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection label="[03] // FEATURES" title="PRACTICAL CAPABILITIES">
        <div className="grid gap-[2px] lg:grid-cols-2">
          <MotionCard index={0} className="border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <h2 className="font-grotesk text-[28px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
              Feature Scope
            </h2>
            <div className="mt-7 grid gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] shrink-0 bg-[#FFD600]" />
                  <span className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#AAAAAA]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </MotionCard>
          <MotionCard index={1} className="border border-[#2D2D2D] bg-[#0F0F0F] p-7 transition-colors hover:border-[#FFD600] md:p-8">
            <h2 className="font-grotesk text-[28px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
              Technologies
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span key={technology} className="border border-[#3D3D3D] bg-[#151515] px-3 py-2 font-ibm-mono text-[11px] tracking-[1px] text-[#CCCCCC]">
                  {technology}
                </span>
              ))}
            </div>
            <p className="mt-7 font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
              Technology is selected after the product context is clear. We prefer stable, widely understood tools that support maintainable delivery, strong performance, and future hiring or handover. If an existing stack is already in place, we evaluate whether to extend it, wrap it with APIs, or modernise it in phases.
            </p>
          </MotionCard>
        </div>
      </ContentSection>

      <ContentSection
        label="[04] // METHODOLOGY"
        title="FROM REQUIREMENT TO RELEASE"
        description="Each service follows a disciplined delivery rhythm so decisions are visible and the product improves through reviewable milestones."
        className="bg-[#050505]"
      >
        <div className="grid gap-[2px] md:grid-cols-5">
          {service.process.map((step, index) => (
            <MotionCard key={step} index={index} className="min-h-[220px] border border-[#2D2D2D] bg-[#101010] p-6 transition-colors hover:border-[#FFD600]">
              <span className="font-grotesk text-[40px] font-bold tracking-[-2px] text-[#FFD600]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 font-ibm-mono text-[11px] leading-[1.7] tracking-[1px] text-[#888888]">
                {step}
              </p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection label="[05] // RELATED SERVICES" title="CONNECTED DELIVERY AREAS">
        <ServiceGrid services={related} compact />
        <Link href="/services/" className="w-fit font-ibm-mono text-[12px] font-bold tracking-[2px] text-[#FFD600] hover:text-[#F5F5F0]">
          VIEW ALL SERVICES &gt;
        </Link>
      </ContentSection>

      <CTASection
        title={`PLAN YOUR ${service.title.toUpperCase()} PROJECT`}
        description={`Send the requirement to ${company.email}. We will review the goal, scope, and best first milestone for your ${service.title.toLowerCase()} work.`}
      />
    </SiteShell>
  );
}
