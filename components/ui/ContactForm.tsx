"use client";

import { FormEvent, useState } from "react";
import ThankYouModal from "./ThankYouModal";

type ContactFormProps = {
  compact?: boolean;
  source?: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const successMessage = "Thank you! We will reach you soon.";

function isEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

export default function ContactForm({ compact = false, source = "Website inquiry" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Name is required.";
    if (!email || !isEmail(email)) nextErrors.email = "Valid email is required.";
    if (!message) nextErrors.message = "Project details are required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      form.reset();
      setModalOpen(true);
    }, 1000);
  };

  const inputClass =
    "w-full border border-[#2D2D2D] bg-[#0A0A0A] px-4 py-4 font-ibm-mono text-[12px] tracking-[1px] text-[#F5F5F0] outline-none transition-colors placeholder:text-[#444444] focus:border-[#FFD600]";
  const labelClass = "font-ibm-mono text-[10px] font-bold tracking-[2px] text-[#FFD600]";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full flex-col gap-4 border border-[#2D2D2D] bg-[#101010] ${compact ? "p-6" : "p-6 md:p-8"}`}
        noValidate
      >
        <input type="hidden" name="source" value={source} />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>FULL NAME</span>
            <input className={inputClass} name="name" placeholder="Your name" autoComplete="name" />
            {errors.name && <span className="font-ibm-mono text-[10px] tracking-[1px] text-[#FF6B35]">{errors.name}</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>EMAIL</span>
            <input className={inputClass} name="email" placeholder="you@example.com" autoComplete="email" type="email" />
            {errors.email && <span className="font-ibm-mono text-[10px] tracking-[1px] text-[#FF6B35]">{errors.email}</span>}
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>PHONE</span>
            <input className={inputClass} name="phone" placeholder="Optional" autoComplete="tel" type="tel" />
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>SERVICE</span>
            <select className={inputClass} name="service" defaultValue="">
              <option value="" disabled>
                Select requirement
              </option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>Custom Software Development</option>
              <option>Software Modernization</option>
              <option>API Development and Integration</option>
              <option>Other Software Requirement</option>
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>PROJECT DETAILS</span>
          <textarea
            className={`${inputClass} min-h-[140px] resize-y`}
            name="message"
            placeholder="Tell us what you want to build, improve, or modernise."
          />
          {errors.message && <span className="font-ibm-mono text-[10px] tracking-[1px] text-[#FF6B35]">{errors.message}</span>}
        </label>
        <button
          type="submit"
          disabled={loading}
          className="flex h-[52px] w-full items-center justify-center gap-3 bg-[#FFD600] transition-colors hover:bg-[#F5F5F0] disabled:cursor-wait disabled:opacity-70"
        >
          {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A0A] border-t-transparent" />}
          <span className="font-grotesk text-[12px] font-bold tracking-[2px] text-[#0A0A0A]">
            {loading ? "SENDING..." : "SEND INQUIRY"}
          </span>
        </button>
      </form>
      <ThankYouModal open={modalOpen} message={successMessage} onClose={() => setModalOpen(false)} />
    </>
  );
}
