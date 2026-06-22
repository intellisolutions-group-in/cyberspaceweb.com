import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.brandName} | IT and Software Development Company in India`,
    short_name: company.brandName,
    description:
      "India-focused IT and software development for websites, mobile apps, desktop applications, APIs, databases, cloud applications, testing, and support.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#FFD600",
    lang: "en-IN",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
