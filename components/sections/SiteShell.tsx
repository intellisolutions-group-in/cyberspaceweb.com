import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0A0A0A]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
