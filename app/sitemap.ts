import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/contact",
  "/careers",
  "/portfolio",
  "/blog",
  "/why-choose-us",
  "/our-process",
  "/faq",
  "/testimonials",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-19");
  const routes = [
    ...staticRoutes.map((route) => `${company.url}${route}/`),
    ...services.map((service) => `${company.url}/services/${service.slug}/`),
    ...blogPosts.map((post) => `${company.url}/blog/${post.slug}/`),
  ];

  return routes.map((url) => ({
    url,
    lastModified: now,
    changeFrequency: url.endsWith("/privacy/") || url.endsWith("/terms/") ? "yearly" : "monthly",
    priority: url === `${company.url}/` ? 1 : url.includes("/services/") ? 0.85 : url.includes("/blog/") ? 0.8 : 0.75,
  }));
}
