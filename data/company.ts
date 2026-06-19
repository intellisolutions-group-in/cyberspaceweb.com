export type Office = {
  label: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry?: string;
};

export type SocialLinks = {
  linkedin: string;
  instagram: string;
  facebook: string;
  x: string;
  youtube: string;
};

export const company = {
  brandName: "cyberspaceweb",
  domain: "cyberspaceweb.com",
  url: "https://cyberspaceweb.com",
  country: "India",
  industry: "IT / Software Development",
  domainRegisteredDate: "2004-04-26",
  establishedYear: "2004",
  email: "info@cyberspaceweb.com",
  businessHours: "Monday to Saturday, 10:00 AM to 7:00 PM IST",
  defaultLocation: "India",
  careerLocation: "Remote",

  // ── Fill in when ready. Leave empty to stay hidden from UI and structured data. ──
  logo: "",
  phone: "",
  ogImage: "",
  offices: [] as Office[],
  socialLinks: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
    youtube: "",
  } satisfies SocialLinks,
};

export function isConfigured(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function getLogoPath(): string | null {
  return isConfigured(company.logo) ? company.logo : null;
}

export function getPhone(): string | null {
  return isConfigured(company.phone) ? company.phone : null;
}

export function getOgImagePath(): string {
  if (isConfigured(company.ogImage)) return company.ogImage;
  if (isConfigured(company.logo)) return company.logo;
  return "/og-default.svg";
}

export function getPrimaryOffice(): Office | null {
  return company.offices.length > 0 ? company.offices[0] : null;
}

export function formatOfficeAddress(office: Office): string {
  return [
    office.streetAddress,
    office.addressLocality,
    office.addressRegion,
    office.postalCode,
    office.addressCountry ?? company.country,
  ]
    .filter(isConfigured)
    .join(", ");
}

const socialLabels: Record<keyof SocialLinks, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
};

export function getSocialLinks(): { key: keyof SocialLinks; label: string; url: string }[] {
  return (Object.entries(company.socialLinks) as [keyof SocialLinks, string][])
    .filter(([, url]) => isConfigured(url))
    .map(([key, url]) => ({ key, label: socialLabels[key], url }));
}

export const navLinks = [
  { label: "SERVICES", href: "/services/" },
  { label: "ABOUT", href: "/about/" },
  { label: "PROCESS", href: "/our-process/" },
  { label: "PORTFOLIO", href: "/portfolio/" },
  { label: "CAREERS", href: "/careers/" },
  { label: "CONTACT", href: "/contact/" },
] as const;

export const footerColumns = [
  {
    heading: "COMPANY",
    links: [
      { label: "ABOUT", href: "/about/" },
      { label: "WHY CHOOSE US", href: "/why-choose-us/" },
      { label: "PROCESS", href: "/our-process/" },
      { label: "CAREERS", href: "/careers/" },
    ],
  },
  {
    heading: "SERVICES",
    links: [
      { label: "WEB DEVELOPMENT", href: "/services/web-development/" },
      { label: "MOBILE APPS", href: "/services/mobile-app-development/" },
      { label: "CUSTOM SOFTWARE", href: "/services/custom-software-development/" },
      { label: "CLOUD APPS", href: "/services/cloud-applications/" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "BLOG", href: "/blog/" },
      { label: "PORTFOLIO", href: "/portfolio/" },
      { label: "TESTIMONIALS", href: "/testimonials/" },
      { label: "FAQ", href: "/faq/" },
      { label: "CONTACT", href: "/contact/" },
    ],
  },
] as const;
