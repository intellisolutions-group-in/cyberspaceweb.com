import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/sections/SiteShell";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import BlogGrid from "@/components/sections/BlogGrid";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import {
  blogPosts,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
} from "@/data/blog";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} | ${company.brandName} Blog`;

  return createPageMetadata({
    title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    keywords: [...post.tags, post.category, company.brandName, "software development India"],
    type: "article",
    publishedTime: post.publishedDate,
    openGraph: {
      title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
    },
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
          articleSchema({
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            publishedDate: post.publishedDate,
            readMinutes: post.readMinutes,
            tags: post.tags,
            category: post.category,
          }),
          webPageSchema({
            title: `${post.title} | ${company.brandName} Blog`,
            description: post.excerpt,
            path: `/blog/${post.slug}/`,
          }),
        ]}
      />
      <PageHero
        label={`[BLOG] // ${post.category.toUpperCase()}`}
        title={post.title.toUpperCase()}
        description={post.excerpt}
        meta={[
          formatBlogDate(post.publishedDate).toUpperCase(),
          `${post.readMinutes} MIN READ`,
          company.country.toUpperCase(),
        ]}
      />

      <ContentSection label="[01] // ARTICLE" title="OVERVIEW.">
        <article className="flex max-w-[920px] flex-col gap-8 border border-[#2D2D2D] bg-[#101010] p-7 md:p-10">
          <div className="flex flex-wrap items-center gap-3 font-ibm-mono text-[11px] tracking-[2px] text-[#666666]">
            <time dateTime={post.publishedDate}>{formatBlogDate(post.publishedDate)}</time>
            <span aria-hidden="true">//</span>
            <span>{post.readMinutes} min read</span>
            <span aria-hidden="true">//</span>
            <span>{post.category}</span>
          </div>
          <p className="font-ibm-mono text-[14px] leading-[1.9] tracking-[1px] text-[#CCCCCC] md:text-[15px]">
            {post.intro}
          </p>
          {post.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4 border-t border-[#1D1D1D] pt-8">
              <h2 className="font-grotesk text-[26px] font-bold tracking-[-0.5px] text-[#F5F5F0] md:text-[30px]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-ibm-mono text-[13px] leading-[1.85] tracking-[1px] text-[#888888] md:text-[14px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-2 border-t border-[#1D1D1D] pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#3D3D3D] bg-[#151515] px-3 py-2 font-ibm-mono text-[10px] tracking-[1px] text-[#AAAAAA]"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </article>
      </ContentSection>

      <ContentSection
        label="[02] // RELATED"
        title="CONTINUE READING."
        className="bg-[#050505]"
      >
        <BlogGrid posts={related} compact />
        <Link
          href="/blog/"
          className="mt-8 inline-block font-ibm-mono text-[12px] font-bold tracking-[2px] text-[#FFD600] hover:text-[#F5F5F0]"
        >
          VIEW ALL ARTICLES &gt;
        </Link>
      </ContentSection>

      <CTASection
        title="DISCUSS THIS TOPIC FOR YOUR PROJECT"
        description={`If this article matches a challenge you are facing, email ${company.email} with your workflow, systems, and timeline.`}
      />
    </SiteShell>
  );
}
