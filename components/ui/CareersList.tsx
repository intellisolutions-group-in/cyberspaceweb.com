"use client";

import { useState } from "react";
import type { Job } from "@/data/careers";
import CareerApplicationModal from "./CareerApplicationModal";
import MotionCard from "@/components/motion/MotionCard";

type CareersListProps = {
  jobs: Job[];
};

export default function CareersList({ jobs }: CareersListProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <div className="grid w-full gap-[2px] md:grid-cols-2">
        {jobs.map((job, index) => (
          <MotionCard
            key={job.slug}
            as="article"
            index={index}
            className="flex flex-col gap-6 border border-[#2D2D2D] bg-[#101010] p-7 transition-colors hover:border-[#FFD600] md:p-8"
          >
            <div className="flex flex-col gap-3">
              <span className="font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]">
                {job.department.toUpperCase()} // {job.location.toUpperCase()}
              </span>
              <h2 className="font-grotesk text-[26px] font-bold tracking-[-0.5px] text-[#F5F5F0]">
                {job.title}
              </h2>
              <p className="font-ibm-mono text-[12px] leading-[1.7] tracking-[1px] text-[#777777]">
                {job.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {job.requirements.map((requirement) => (
                <div key={requirement} className="flex gap-3">
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-[#FFD600]" />
                  <span className="font-ibm-mono text-[11px] leading-[1.7] tracking-[1px] text-[#AAAAAA]">
                    {requirement}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedJob(job)}
              className="group mt-auto flex h-[48px] w-full items-center justify-center border-2 border-[#FFD600] bg-[#0A0A0A] transition-colors hover:bg-[#FFD600]"
            >
              <span className="font-grotesk text-[12px] font-bold tracking-[2px] text-[#FFD600] transition-colors group-hover:text-[#0A0A0A]">
                APPLY NOW
              </span>
            </button>
          </MotionCard>
        ))}
      </div>
      <CareerApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
}
