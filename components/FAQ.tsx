import Link from "next/link";
import SectionHeader from "./SectionHeader";
import FAQAccordion from "./ui/FAQAccordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="flex flex-col w-full bg-[#060606] py-16 px-6 md:py-[100px] md:px-[120px]">
      <div className="w-full max-w-[560px]">
        <SectionHeader
          label="[08] // FAQ"
          title={"PROJECT\nQUESTIONS?"}
          subtitle="EVERYTHING YOU NEED TO KNOW BEFORE DISCUSSING YOUR FIRST SOFTWARE REQUIREMENT."
          titleWidth="w-full"
          subtitleWidth="w-full"
        />
      </div>

      <div className="h-10 md:h-[64px]" />
      <FAQAccordion items={faqs.slice(0, 5)} />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[16px] pt-10 md:pt-[48px]">
        <span className="font-ibm-mono text-[13px] text-[#555555] tracking-[1px]">
          NEED MORE DETAIL?
        </span>
        <Link href="/faq/" className="font-ibm-mono text-[13px] font-bold text-[#FFD600] tracking-[1px] hover:underline">
          VIEW ALL FAQS &gt;
        </Link>
      </div>
    </section>
  );
}
