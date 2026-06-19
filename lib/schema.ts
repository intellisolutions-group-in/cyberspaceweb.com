import { company, getLogoPath, getPhone, getPrimaryOffice, getSocialLinks, isConfigured } from "@/data/company";
import { absoluteAssetUrl, pageUrl } from "@/lib/seo";

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
    name: company.brandName,
    url: company.url,
    email: company.email,
    foundingDate: company.establishedYear,
    areaServed: {
      "@type": "Country",
      name: company.country,
    },
    industry: company.industry,
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
    name: company.brandName,
    url: company.url,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
      ...(logo
        ? {
            logo: {
              "@type": "ImageObject",
              url: absoluteAssetUrl(logo),
            },
          }
        : {}),
    },
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
  tags: string[];
  category: string;
}) {
  const logo = getLogoPath();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.excerpt,
    datePublished: input.publishedDate,
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
    mainEntityOfPage: pageUrl(`/blog/${input.slug}/`),
    keywords: input.tags.join(", "),
    articleSection: input.category,
    inLanguage: "en-IN",
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

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} Requirements: ${job.requirements.join(" ")}`,
    identifier: {
      "@type": "PropertyValue",
      name: company.brandName,
      value: job.slug,
    },
    datePosted: "2026-06-01",
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
          },
        },
    applicantLocationRequirements: {
      "@type": "Country",
      name: company.country,
    },
    jobLocationType: "TELECOMMUTE",
    url: pageUrl("/careers/"),
    ...(phone ? { contactPoint: { "@type": "ContactPoint", telephone: phone, email: company.email } } : {}),
  };
}

export function webPageSchema(input: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: pageUrl(input.path),
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: company.brandName,
      url: company.url,
    },
    publisher: providerOrganization(),
  };
}
