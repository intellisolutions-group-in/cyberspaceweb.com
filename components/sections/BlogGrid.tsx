import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatBlogDate } from "@/data/blog";
import MotionCard from "@/components/motion/MotionCard";

type BlogGridProps = {
  posts: BlogPost[];
  compact?: boolean;
};

export default function BlogGrid({ posts, compact = false }: BlogGridProps) {
  return (
    <div className="grid w-full gap-[2px] md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <MotionCard
          key={post.slug}
          href={`/blog/${post.slug}/`}
          index={index}
          className="group flex min-h-[320px] flex-col justify-between border border-[#2D2D2D] bg-[#101010] p-7 md:p-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">
                {post.category.toUpperCase()}
              </span>
              <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">
                {formatBlogDate(post.publishedDate).toUpperCase()}
              </span>
            </div>
            <h2 className="font-grotesk text-[22px] font-bold leading-[1.15] tracking-[-0.5px] text-[#F5F5F0] md:text-[24px]">
              {post.title}
            </h2>
            <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
              {compact ? `${post.excerpt.slice(0, 140)}…` : post.excerpt}
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">
              {post.readMinutes} MIN READ
            </span>
            <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600] group-hover:text-[#F5F5F0]">
              READ ARTICLE &gt;
            </span>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
