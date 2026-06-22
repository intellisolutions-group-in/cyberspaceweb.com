import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

/** Matches static routes listed in app/sitemap.ts */
const CORE_ROUTE_COUNT = 13;

export function getServiceAreaCount(): number {
  return services.length;
}

export function getSitePageCount(): number {
  return CORE_ROUTE_COUNT + services.length + blogPosts.length;
}
