import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `Page Not Found | ${company.brandName}`,
  description: `The page you requested on ${company.domain} could not be found. Browse services, blog articles, or contact ${company.brandName}.`,
  path: "/404/",
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0A0A0A] px-6 py-24 text-center">
      <p className="font-ibm-mono text-[11px] font-bold tracking-[3px] text-[#FFD600]">[404] // PAGE NOT FOUND</p>
      <h1 className="mt-6 font-grotesk text-[clamp(40px,8vw,72px)] font-bold tracking-[-2px] text-[#F5F5F0]">
        PAGE NOT FOUND.
      </h1>
      <p className="mt-6 max-w-[560px] font-ibm-mono text-[13px] leading-[1.8] tracking-[1px] text-[#888888]">
        The URL may be outdated or mistyped. Use the links below to continue browsing {company.brandName}.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex h-[52px] min-w-[180px] items-center justify-center bg-[#FFD600] font-grotesk text-[12px] font-bold tracking-[2px] text-[#0A0A0A] transition-colors hover:bg-[#e6c200]"
        >
          GO HOME
        </Link>
        <Link
          href="/contact/"
          className="flex h-[52px] min-w-[180px] items-center justify-center border-2 border-[#3D3D3D] font-ibm-mono text-[12px] tracking-[2px] text-[#888888] transition-colors hover:border-[#888888] hover:text-[#F5F5F0]"
        >
          CONTACT US
        </Link>
      </div>
    </main>
  );
}
