import type { Service } from "@/data/services";
import MotionCard from "@/components/motion/MotionCard";

type ServiceGridProps = {
  services: Service[];
  compact?: boolean;
};

export default function ServiceGrid({ services, compact = false }: ServiceGridProps) {
  return (
    <div className="grid w-full gap-[2px] md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <MotionCard
          key={service.slug}
          href={`/services/${service.slug}/`}
          index={index}
          className="group flex min-h-[280px] flex-col justify-between border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <span className="font-ibm-mono text-[10px] tracking-[2px] text-[#555555]">
                {service.category.toUpperCase()}
              </span>
            </div>
            <h3 className="font-grotesk text-[24px] font-bold leading-[1.1] tracking-[-0.5px] text-[#F5F5F0]">
              {service.title}
            </h3>
            <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
              {compact ? service.summary.slice(0, 128) : service.summary}
            </p>
          </div>
          <span className="mt-8 font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600] group-hover:text-[#F5F5F0]">
            VIEW SERVICE &gt;
          </span>
        </MotionCard>
      ))}
    </div>
  );
}
