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
  careerLocation: "India / Remote",
  // phone: "+91 XXXXX XXXXX",
  // offices: ["Office address to be added"],
  // logo: "/images/logo.svg",
  // socialLinks: {
  //   instagram: "https://instagram.com/your-handle",
  //   facebook: "https://facebook.com/your-page",
  // },
} as const;

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
