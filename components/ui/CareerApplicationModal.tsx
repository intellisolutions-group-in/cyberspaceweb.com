"use client";

import { FormEvent, useState } from "react";
import type { Job } from "@/data/careers";
import ThankYouModal from "./ThankYouModal";

type CareerApplicationModalProps = {
  job: Job | null;
  onClose: () => void;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "location" | "resume", string>>;

const successMessage = "Thank you! Our team will review your application and reach you soon.";

function isEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="#F5F5F0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function CareerApplicationModal({ job, onClose }: CareerApplicationModalProps) {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!job) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const resume = formData.get("resume");
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Full name is required.";
    if (!email || !isEmail(email)) nextErrors.email = "Valid email is required.";
    if (!phone) nextErrors.phone = "Phone number is required.";
    if (!location) nextErrors.location = "Current location is required.";

    if (!(resume instanceof File) || resume.size === 0) {
      nextErrors.resume = "Resume file is required.";
    } else {
      const extension = resume.name.split(".").pop()?.toLowerCase();
      const allowed = ["pdf", "doc", "docx"];
      if (!extension || !allowed.includes(extension)) {
        nextErrors.resume = "Upload PDF, DOC, or DOCX only.";
      }
      if (resume.size > 5 * 1024 * 1024) {
        nextErrors.resume = "Resume must be 5MB or smaller.";
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      form.reset();
      onClose();
      setSuccessOpen(true);
    }, 1000);
  };

  const inputClass =
    "w-full border border-[#2D2D2D] bg-[#0A0A0A] px-4 py-4 font-ibm-mono text-[12px] tracking-[1px] text-[#F5F5F0] outline-none placeholder:text-[#444444] focus:border-[#FFD600]";
  const labelClass = "font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]";

  return (
    <>
      {job && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="relative max-h-[92vh] w-full max-w-[720px] overflow-y-auto border-2 border-[#FFD600] bg-[#0A0A0A] p-6 md:p-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-[#2D2D2D] bg-[#111111]"
              aria-label="Close application form"
            >
              <XIcon />
            </button>
            <span className="font-ibm-mono text-[11px] font-bold tracking-[2px] text-[#FFD600]">
              APPLY FOR
            </span>
            <h2 className="mt-3 pr-12 font-grotesk text-[32px] font-bold leading-[1.05] tracking-[-1px] text-[#F5F5F0]">
              {job.title}
            </h2>
            <p className="mt-3 font-ibm-mono text-[12px] leading-[1.6] tracking-[1px] text-[#888888]">
              {job.department} // {job.location}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>FULL NAME</span>
                  <input className={inputClass} name="name" />
                  {errors.name && <span className="font-ibm-mono text-[10px] text-[#FF6B35]">{errors.name}</span>}
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>EMAIL</span>
                  <input className={inputClass} name="email" />
                  {errors.email && <span className="font-ibm-mono text-[10px] text-[#FF6B35]">{errors.email}</span>}
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>PHONE</span>
                  <input className={inputClass} name="phone" />
                  {errors.phone && <span className="font-ibm-mono text-[10px] text-[#FF6B35]">{errors.phone}</span>}
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>CURRENT LOCATION</span>
                  <input className={inputClass} name="location" />
                  {errors.location && <span className="font-ibm-mono text-[10px] text-[#FF6B35]">{errors.location}</span>}
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>RESUME UPLOAD</span>
                <input
                  className={`${inputClass} file:mr-4 file:border-0 file:bg-[#FFD600] file:px-4 file:py-2 file:font-grotesk file:text-[11px] file:font-bold file:tracking-[1px] file:text-[#0A0A0A]`}
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
                {errors.resume && <span className="font-ibm-mono text-[10px] text-[#FF6B35]">{errors.resume}</span>}
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>COVER LETTER</span>
                <textarea className={`${inputClass} min-h-[120px] resize-y`} name="coverLetter" />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="flex h-[54px] w-full items-center justify-center gap-3 bg-[#FFD600] transition-colors hover:bg-[#F5F5F0] disabled:cursor-wait disabled:opacity-70"
              >
                {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A0A] border-t-transparent" />}
                <span className="font-grotesk text-[12px] font-bold tracking-[2px] text-[#0A0A0A]">
                  {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
      <ThankYouModal open={successOpen} message={successMessage} onClose={() => setSuccessOpen(false)} />
    </>
  );
}
