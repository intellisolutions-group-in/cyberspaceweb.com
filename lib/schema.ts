import { company, getLogoPath, getPhone, getPrimaryOffice, getSocialLinks, isConfigured } from "@/data/company";
import { absoluteAssetUrl, pageUrl } from "@/lib/seo";

const organizationId = `${company.url}/#organization`;
const websiteId = `${company.url}/#website`;

function organizationExtras() {
  const logo = getLogoPath();
  const phone = getPhone();
  const social = getSocialLinks().map((item) => item.url);

  return {
    ...(logo
      ? {
          logo: {
            "@type": "ImageObject",
            url: absoluteAssetUrl(logo),
          },
        }
      : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(social.length > 0 ? { sameAs: social } : {}),
  };
}

function contactPointExtras() {
  const phone = getPhone();
  return phone ? { telephone: phone } : {};
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.brandName,
    url: company.url,
    email: company.email,
    foundingDate: company.establishedYear,
    areaServed: {
      "@type": "Country",
      name: company.country,
    },
    industry: company.industry,
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "API Development",
      "Database Development",
      "Cloud Applications",
      "Software Testing",
      "UI/UX Design",
      "Software Modernization",
      "IT Consulting",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: company.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      ...contactPointExtras(),
    },
    ...organizationExtras(),
  };
}

export function localBusinessSchema() {
  const office = getPrimaryOffice();
  if (!office || !isConfigured(office.streetAddress)) return null;

  const logo = getLogoPath();
  const phone = getPhone();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.brandName,
    url: company.url,
    email: company.email,
    description: "IT and software development company in India.",
    areaServed: {
      "@type": "Country",
      name: company.country,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: office.addressCountry ?? "IN",
    },
    ...(phone ? { telephone: phone } : {}),
    ...(logo ? { image: absoluteAssetUrl(logo) } : {}),
    ...organizationExtras(),
  };
}

export function globalSchemas(): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [organizationSchema(), websiteSchema()];
  const local = localBusinessSchema();
  if (local) schemas.push(local);
  return schemas;
}

export function websiteSchema() {
  const logo = getLogoPath();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: company.brandName,
    url: company.url,
    inLanguage: "en-IN",
    publisher: {
      "@id": organizationId,
    },
    copyrightHolder: {
      "@id": organizationId,
    },
    ...(logo
      ? {
          image: {
            "@type": "ImageObject",
            url: absoluteAssetUrl(logo),
          },
        }
      : {}),
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqPageSchema(items: import("@/data/faq").FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function providerOrganization() {
  const logo = getLogoPath();
  const phone = getPhone();

  return {
    "@type": "Organization",
    "@id": organizationId,
    name: company.brandName,
    url: company.url,
    email: company.email,
    ...(phone ? { telephone: phone } : {}),
    ...(logo
      ? {
          logo: {
            "@type": "ImageObject",
            url: absoluteAssetUrl(logo),
          },
        }
      : {}),
  };
}

export function serviceSchema(input: {
  title: string;
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.title,
    serviceType: input.title,
    provider: providerOrganization(),
    areaServed: {
      "@type": "Country",
      name: company.country,
    },
    description: input.summary,
    url: pageUrl(`/services/${input.slug}/`),
  };
}

export function articleSchema(input: {
  title: string;
  excerpt: string;
  slug: string;
  publishedDate: string;
  readMinutes: number;
  tags: string[];
  category: string;
}) {
  const logo = getLogoPath();
  const url = pageUrl(`/blog/${input.slug}/`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: input.title,
    description: input.excerpt,
    datePublished: input.publishedDate,
    dateModified: input.publishedDate,
    author: providerOrganization(),
    publisher: {
      ...providerOrganization(),
      ...(logo
        ? {
            logo: {
              "@type": "ImageObject",
              url: absoluteAssetUrl(logo),
            },
          }
        : {}),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    image: absoluteAssetUrl(getLogoPath() ?? "/og-default.png"),
    keywords: input.tags.join(", "),
    articleSection: input.category,
    inLanguage: "en-IN",
    timeRequired: `PT${input.readMinutes}M`,
    isPartOf: {
      "@id": websiteId,
    },
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function contactPageSchema() {
  const phone = getPhone();
  const office = getPrimaryOffice();

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${company.brandName}`,
    url: pageUrl("/contact/"),
    description: `Contact ${company.brandName} for software development inquiries in India.`,
    mainEntity: {
      ...providerOrganization(),
      areaServed: company.country,
      ...(phone ? { telephone: phone } : {}),
      ...(office && isConfigured(office.streetAddress)
        ? {
            address: {
              "@type": "PostalAddress",
              streetAddress: office.streetAddress,
              addressLocality: office.addressLocality,
              addressRegion: office.addressRegion,
              postalCode: office.postalCode,
              addressCountry: office.addressCountry ?? "IN",
            },
          }
        : {}),
    },
  };
}

export function jobPostingSchema(job: import("@/data/careers").Job) {
  const phone = getPhone();
  const office = getPrimaryOffice();
  const url = pageUrl("/careers/");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${url}#${job.slug}`,
    title: job.title,
    description: `${job.summary} Requirements: ${job.requirements.join(" ")}`,
    identifier: {
      "@type": "PropertyValue",
      name: company.brandName,
      value: job.slug,
    },
    datePosted: "2026-06-01",
    validThrough: "2026-12-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      ...providerOrganization(),
      sameAs: company.url,
    },
    jobLocation: office && isConfigured(office.streetAddress)
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: office.streetAddress,
            addressLocality: office.addressLocality,
            addressRegion: office.addressRegion,
            postalCode: office.postalCode,
            addressCountry: office.addressCountry ?? "IN",
          },
        }
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: company.defaultLocation,
            addressLocality: company.careerLocation,
          },
        },
    applicantLocationRequirements: {
      "@type": "Country",
      name: company.country,
    },
    directApply: true,
    url,
    ...(phone ? { contactPoint: { "@type": "ContactPoint", telephone: phone, email: company.email } } : {}),
  };
}

export function webPageSchema(input: { title: string; description: string; path: string }) {
  const url = pageUrl(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    name: input.title,
    description: input.description,
    url,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": websiteId,
    },
    publisher: {
      "@id": organizationId,
    },
  };
}
