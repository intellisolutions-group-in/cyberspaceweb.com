import Link from "next/link";
import SectionHeader from "./SectionHeader";
import MotionCard from "./motion/MotionCard";

const engagementModels = [
  {
    tier: "DISCOVERY",
    name: "PLAN",
    price: "SCOPE",
    description: "Clarify requirements, users, workflows, risks, data, and delivery priorities before development begins.",
    features: ["REQUIREMENT WORKSHOPS", "TECHNICAL ROADMAP", "MILESTONE PLAN", "RISK REVIEW"],
    accentColor: "#555555",
  },
  {
    tier: "MOST COMMON",
    name: "BUILD",
    price: "PROJECT",
    description: "Design, engineer, test, and launch a website, application, API, database workflow, or custom platform.",
    features: ["UI / UX DESIGN", "FULL-STACK DEVELOPMENT", "QA VALIDATION", "DEPLOYMENT HANDOVER"],
    accentColor: "#FFD600",
    featured: true,
  },
  {
    tier: "ONGOING",
    name: "SUPPORT",
    price: "CARE",
    description: "Maintain, improve, modernise, test, and support existing software after launch or takeover.",
    features: ["BUG FIXES", "SECURITY UPDATES", "PERFORMANCE TUNING", "RELEASE PLANNING"],
    accentColor: "#FF6B35",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="flex w-full flex-col gap-12 bg-[#080808] px-6 py-16 md:gap-[64px] md:px-[120px] md:py-[100px]">
      <SectionHeader
        label="[09] // ENGAGEMENT MODELS"
        title={"SCOPED.\nNO SURPRISES."}
        subtitle="SOFTWARE PRICING DEPENDS ON SCOPE, COMPLEXITY, INTEGRATIONS, TIMELINE, AND SUPPORT EXPECTATIONS."
      />

      <div className="flex w-full flex-col gap-[2px] md:flex-row">
        {engagementModels.map((model, index) => (
          <MotionCard
            key={model.name}
            index={index}
            className={`flex w-full flex-col gap-8 p-8 md:flex-1 md:p-[40px] ${
              model.featured ? "border-2 border-[#FFD600] bg-[#111111]" : "border border-[#2D2D2D] bg-[#0F0F0F]"
            }`}
          >
            <div
              className="flex h-[28px] w-fit items-center justify-center px-[12px]"
              style={{
                backgroundColor: model.featured ? "#FFD600" : "#1A1A1A",
                border: `1px solid ${model.accentColor}`,
              }}
            >
              <span
                className="font-ibm-mono text-[11px] tracking-[2px]"
                style={{ color: model.featured ? "#0A0A0A" : model.accentColor }}
              >
                {model.tier}
              </span>
            </div>
            <span className="font-grotesk text-[28px] font-bold tracking-[1px] text-[#F5F5F0]">
              {model.name}
            </span>
            <span className="font-grotesk text-[48px] font-bold leading-none tracking-[-2px]" style={{ color: model.accentColor }}>
              {model.price}
            </span>
            <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
              {model.description}
            </p>
            <div className="flex flex-col gap-[10px] border-t border-[#2D2D2D] pt-6">
              {model.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="font-ibm-mono text-[14px] leading-none" style={{ color: model.accentColor }}>
                    +
                  </span>
                  <span className="font-ibm-mono text-[11px] tracking-[1px] text-[#A0A09A]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/contact/"
              className="mt-auto flex h-[48px] w-full items-center justify-center transition-colors hover:opacity-90"
              style={{
                backgroundColor: model.featured ? "#FFD600" : "#1A1A1A",
                border: `2px solid ${model.featured ? "transparent" : model.accentColor}`,
              }}
            >
              <span
                className="font-ibm-mono text-[12px] tracking-[2px]"
                style={{ color: model.featured ? "#0A0A0A" : model.accentColor }}
              >
                REQUEST SCOPE
              </span>
            </Link>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
