import Image from "next/image";
import {
  company,
  getLogoIconPath,
  getLogoPath,
  LOGO_ASPECT_RATIO,
} from "@/data/company";

type BrandLogoProps = {
  variant?: "full" | "icon";
  size?: "sm" | "md";
  className?: string;
};

export default function BrandLogo({
  variant = "icon",
  size = "sm",
  className = "",
}: BrandLogoProps) {
  const logo = getLogoPath();

  if (variant === "full" && logo) {
    const height = size === "sm" ? 28 : 36;
    const width = Math.round(height * LOGO_ASPECT_RATIO);

    return (
      <Image
        src={logo}
        alt={`${company.brandName} logo`}
        width={width}
        height={height}
        className={`shrink-0 object-contain object-left ${className}`}
        priority={size === "sm"}
      />
    );
  }

  if (logo) {
    const dimensions = size === "sm" ? 28 : 32;

    return (
      <Image
        src={getLogoIconPath()}
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
