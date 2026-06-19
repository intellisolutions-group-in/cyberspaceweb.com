import type { Metadata } from "next";
import { company, getOgImagePath, getPhone, getPrimaryOffice } from "@/data/company";

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${company.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultKeywords = [
  "software development company India",
  "IT company India",
  "web development",
  "mobile app development",
  "custom software development",
  company.brandName,
] as const;

export function getOgImage() {
  const path = getOgImagePath();
  return {
    url: absoluteAssetUrl(path),
    width: 1200,
    height: 630,
    alt: `${company.brandName} | IT and Software Development Company in India`,
  };
}

export const ogImage = getOgImage();

export function pageUrl(path = "/"): string {
  if (!path || path === "/") return `${company.url}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${company.url}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

export type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Partial<NonNullable<Metadata["twitter"]>>;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
  robots,
  openGraph,
  twitter,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const url = pageUrl(path);
  const ogTitle = openGraph?.title ?? title;
  const ogDescription = openGraph?.description ?? description;

  return {
    title,
    description,
    keywords: keywords ?? [...defaultKeywords],
    alternates: {
      canonical: url,
    },
    robots:
      robots ?? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: company.brandName,
      type,
      locale: "en_IN",
      images: [getOgImage()],
      ...(publishedTime ? { publishedTime } : {}),
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: twitter?.title ?? ogTitle,
      description: twitter?.description ?? ogDescription,
      images: [getOgImage().url],
      ...twitter,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.brandName} | IT and Software Development Company in India`,
    template: "%s",
  },
  description:
    "India-focused IT and software development for websites, mobile apps, desktop applications, APIs, databases, cloud applications, testing, and support.",
  keywords: [...defaultKeywords],
  authors: [{ name: company.brandName, url: company.url }],
  creator: company.brandName,
  publisher: company.brandName,
  category: "technology",
  formatDetection: {
    email: true,
    address: !!getPrimaryOffice(),
    telephone: !!getPhone(),
  },
  openGraph: {
    title: `${company.brandName} | IT and Software Development Company in India`,
    description:
      "Modern software development, web platforms, custom applications, API integration, database development, and support.",
    url: company.url,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
    images: [getOgImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brandName} | IT and Software Development Company in India`,
    description:
      "Modern software development, web platforms, custom applications, API integration, database development, and support.",
    images: [getOgImage().url],
  },
};
