import Image from "next/image";
import { company, getLogoPath } from "@/data/company";

type BrandLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export default function BrandLogo({ size = "sm", className = "" }: BrandLogoProps) {
  const logo = getLogoPath();

  if (logo) {
    const dimensions = size === "sm" ? 28 : 32;
    return (
      <Image
        src={logo}
        alt={`${company.brandName} logo`}
        width={dimensions}
        height={dimensions}
        className={`shrink-0 object-contain ${className}`}
        priority={size === "sm"}
      />
    );
  }

  if (size === "sm") {
    return (
      <span
        className={`h-[10px] w-[10px] shrink-0 bg-[#FFD600] transition-transform group-hover:scale-110 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`h-[32px] w-[32px] shrink-0 bg-[#FFD600] ${className}`}
      aria-hidden="true"
    />
  );
}
