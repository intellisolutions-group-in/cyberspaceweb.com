import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PixelDivider from "@/components/PixelDivider";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Bento from "@/components/Bento";
import Comparison from "@/components/Comparison";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContentSection from "@/components/sections/ContentSection";
import ContactForm from "@/components/ui/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${company.brandName} | IT and Software Development Company in India`,
  description:
    "India-focused IT and software development for websites, mobile apps, desktop applications, APIs, databases, cloud applications, testing, and support.",
  path: "/",
});

const homeDescription =
  "India-focused IT and software development for websites, mobile apps, desktop applications, APIs, databases, cloud applications, testing, and support.";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#0A0A0A] pt-[60px]">
      <JsonLd
        data={webPageSchema({
          title: `${company.brandName} | IT and Software Development Company in India`,
          description: homeDescription,
          path: "/",
        })}
      />
      <Navbar />
      <Hero />
      <PixelDivider />
      <Logos />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Bento />
      <Comparison />
      <Showcase />
      <FAQ />
      <FinalCTA />
      <ContentSection
        label="[10] // QUICK INQUIRY"
        title={"SHARE THE\nREQUIREMENT."}
        description="Use the form to send a website, app, API, database, support, or software modernisation inquiry."
        className="bg-[#050505]"
      >
        <ContactForm compact source="Home quick inquiry" />
      </ContentSection>
      <Footer />
    </main>
  );
}
