import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { company } from "@/data/company";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.brandName} | IT and Software Development Company in India`,
    template: "%s",
  },
  description:
    "India-focused IT and software development for websites, mobile apps, desktop applications, APIs, databases, cloud applications, testing, and support.",
  keywords: [
    "software development company India",
    "IT company India",
    "web development",
    "mobile app development",
    "custom software development",
    company.brandName,
  ],
  openGraph: {
    title: `${company.brandName} | IT and Software Development Company in India`,
    description:
      "Modern software development, web platforms, custom applications, API integration, database development, and support.",
    url: company.url,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: company.url,
  },
};

function OrganizationSchema() {
  const schema = {
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
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="h-full">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full bg-[#0A0A0A] overflow-x-hidden`}>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
