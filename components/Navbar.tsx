"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/data/company";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid #1E1E1E" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6 md:px-[48px]">
        <Link href="/" className="group flex shrink-0 items-center gap-[10px]">
          {/* Logo placeholder: replace this square with /images/logo.svg when a logo is available. */}
          <span className="h-[10px] w-[10px] bg-[#FFD600] transition-transform group-hover:scale-110" />
          <span className="font-grotesk text-[13px] font-bold tracking-[2px] text-[#F5F5F0]">
            {company.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-[28px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative bg-transparent font-ibm-mono text-[10px] tracking-[1.5px] transition-colors duration-150"
              style={{ color: isActive(link.href) ? "#FFD600" : "#555555" }}
            >
              {link.label}
              <span
                className="absolute -bottom-[3px] left-0 h-[1.5px] bg-[#FFD600] transition-all duration-300"
                style={{ width: isActive(link.href) ? "100%" : "0%" }}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-[14px] lg:flex">
          <Link
            href="/faq/"
            className="font-ibm-mono text-[10px] tracking-[1.5px] text-[#555555] transition-colors hover:text-[#F5F5F0]"
          >
            FAQ
          </Link>
          <Link
            href="/contact/"
            className="bg-[#FFD600] px-[18px] py-[9px] font-grotesk text-[11px] font-bold tracking-[1.5px] text-[#0A0A0A] transition-colors hover:bg-[#F5F5F0]"
          >
            REQUEST CONSULT
          </Link>
        </div>

        <button
          className="flex flex-col gap-[5px] p-2 -mr-2 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          type="button"
        >
          <span
            className="block h-[1.5px] w-[20px] origin-center bg-[#F5F5F0] transition-transform duration-200"
            style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-[1.5px] w-[20px] bg-[#F5F5F0] transition-opacity duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[1.5px] w-[20px] origin-center bg-[#F5F5F0] transition-transform duration-200"
            style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 lg:hidden"
        style={{
          maxHeight: menuOpen ? "560px" : "0px",
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(14px)",
          borderBottom: menuOpen ? "1px solid #1E1E1E" : "none",
        }}
      >
        <nav className="flex flex-col gap-0 px-6 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center gap-2 border-b border-[#141414] py-[14px] font-ibm-mono text-[12px] tracking-[2px] transition-colors"
              style={{ color: isActive(link.href) ? "#FFD600" : "#666666" }}
            >
              <span
                className="h-[4px] w-[4px] shrink-0 rounded-full transition-colors"
                style={{ background: isActive(link.href) ? "#FFD600" : "#2D2D2D" }}
              />
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            onClick={() => setMenuOpen(false)}
            className="mt-5 bg-[#FFD600] px-[18px] py-[12px] text-center font-grotesk text-[11px] font-bold tracking-[1.5px] text-[#0A0A0A] transition-colors hover:bg-[#F5F5F0]"
          >
            REQUEST CONSULT
          </Link>
        </nav>
      </div>
    </header>
  );
}
