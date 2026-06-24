import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  company,
  footerColumns,
  formatOfficeAddress,
  getLogoPath,
  getPhone,
  getPrimaryOffice,
  getSocialLinks,
} from "@/data/company";

export default function Footer() {
  const phone = getPhone();
  const office = getPrimaryOffice();
  const socialLinks = getSocialLinks();
  const logo = getLogoPath();

  return (
    <footer className="flex w-full flex-col bg-[#050505]">
      <div className="flex flex-col gap-12 px-6 py-12 md:flex-row md:gap-[80px] md:px-[120px] md:py-[64px]">
        <div className="flex flex-col gap-6 md:w-[320px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            {logo ? (
              <BrandLogo variant="full" size="md" />
            ) : (
              <>
                <BrandLogo size="md" />
                <span className="font-grotesk text-[16px] font-bold tracking-[2px] text-[#FFD600]">
                  {company.brandName}
                </span>
              </>
            )}
          </div>
          <p className="max-w-[300px] font-ibm-mono text-[11px] leading-[1.7] tracking-[1px] text-[#888888]">
            INDIA-FOCUSED IT AND SOFTWARE DEVELOPMENT FOR WEBSITES, APPS, API INTEGRATIONS, DATABASES, AND CUSTOM BUSINESS SYSTEMS.
          </p>
          <div className="flex flex-col gap-2">
            <a href={`mailto:${company.email}`} className="font-ibm-mono text-[11px] tracking-[1px] text-[#FFD600] hover:text-[#F5F5F0]">
              {company.email}
            </a>
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-ibm-mono text-[11px] tracking-[1px] text-[#888888] hover:text-[#F5F5F0]">
                {phone}
              </a>
            )}
            {office && (
              <address className="not-italic font-ibm-mono text-[11px] leading-[1.7] tracking-[1px] text-[#666666]">
                {office.label}: {formatOfficeAddress(office)}
              </address>
            )}
            <span className="font-ibm-mono text-[11px] tracking-[1px] text-[#666666]">
              EST. {company.establishedYear} // {company.country.toUpperCase()}
            </span>
          </div>
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#888888] transition-colors hover:text-[#FFD600]"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8 md:flex md:flex-1 md:gap-[80px]">
          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold tracking-[2px] text-[#F5F5F0]">
                {column.heading}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-ibm-mono text-[12px] tracking-[1px] text-[#888888] transition-colors hover:text-[#CCCCCC]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-3 border-t border-t-[#1D1D1D] px-6 py-4 sm:flex-row sm:items-center md:h-[56px] md:px-[120px]">
        <span className="font-ibm-mono text-[11px] tracking-[1px] text-[#666666]">
          &copy; 2026 {company.brandName}. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center gap-6 md:gap-[32px]">
          <Link href="/privacy/" className="font-ibm-mono text-[11px] tracking-[1px] text-[#666666] transition-colors hover:text-[#AAAAAA]">
            PRIVACY
          </Link>
          <Link href="/terms/" className="font-ibm-mono text-[11px] tracking-[1px] text-[#666666] transition-colors hover:text-[#AAAAAA]">
            TERMS
          </Link>
          <span className="font-ibm-mono text-[11px] font-bold tracking-[1px] text-[#FFD600]">
            INDIA
          </span>
        </div>
      </div>
    </footer>
  );
}
