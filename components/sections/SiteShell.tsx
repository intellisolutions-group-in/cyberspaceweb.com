import SkipToContent from "@/components/seo/SkipToContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex min-h-screen w-full flex-col bg-[#0A0A0A]">
        {children}
      </main>
      <Footer />
    </>
  );
}
