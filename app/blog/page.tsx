import type { Metadata } from "next";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import BlogGrid from "@/components/sections/BlogGrid";
import MotionCard from "@/components/motion/MotionCard";
import { company } from "@/data/company";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: `Software Development Blog | ${company.brandName}`,
  description:
    `Articles from ${company.brandName} on custom software, web development, mobile apps, APIs, databases, delivery process, and maintenance for Indian businesses.`,
  keywords: [
    "software development blog India",
    "IT articles",
    "custom software planning",
    company.brandName,
  ],
  openGraph: {
    title: `Blog | ${company.brandName}`,
    description:
      "Practical software development insights for Indian businesses—planning, delivery, integrations, and support.",
    url: `${company.url}/blog/`,
    siteName: company.brandName,
    type: "website",
    locale: "en_IN",
  },
};

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        label="[BLOG] // SOFTWARE INSIGHTS"
        title={"PRACTICAL NOTES\nON BUILDING SOFTWARE."}
        description={`${company.brandName} publishes practical articles on software planning, delivery, integrations, web and mobile systems, and post-launch support for businesses in ${company.country}.`}
        meta={[`${blogPosts.length} ARTICLES`, company.country.toUpperCase(), "NO HYPE"]}
      />

      <ContentSection
        label="[01] // TOPICS"
        title="WHAT WE WRITE ABOUT."
        description="Articles focus on decisions Indian businesses face when planning websites, applications, APIs, databases, and long-term software support."
      >
        <div className="grid gap-[2px] md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <MotionCard
              key={category}
              index={index}
              className="border border-[#2D2D2D] bg-[#101010] p-6"
            >
              <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">TOPIC</span>
              <h2 className="mt-4 font-grotesk text-[22px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
                {category}
              </h2>
              <p className="mt-4 font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
                {blogPosts.filter((post) => post.category === category).length} published articles.
              </p>
            </MotionCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        label="[02] // ALL ARTICLES"
        title={"LATEST\nFROM THE BLOG."}
        className="bg-[#050505]"
      >
        <BlogGrid posts={blogPosts} />
      </ContentSection>

      <CTASection
        title="NEED HELP WITH YOUR SOFTWARE PLAN?"
        description={`Send your requirement to ${company.email}. We can review goals, scope, integrations, and a practical first milestone.`}
      />
    </SiteShell>
  );
}
