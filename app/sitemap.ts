import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/careers", priority: 0.75, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/why-choose-us", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/our-process", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

const siteUpdated = new Date("2026-06-19");

function latestBlogDate(): Date {
  const timestamps = blogPosts.map((post) => new Date(post.publishedDate).getTime());
  return new Date(Math.max(...timestamps));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUpdated = latestBlogDate();

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.url}${route.path}/`,
      lastModified:
        route.path === "/blog" || route.path === ""
          ? blogUpdated
          : route.path === "/careers"
            ? siteUpdated
            : siteUpdated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${company.url}/services/${service.slug}/`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      url: `${company.url}/blog/${post.slug}/`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
