"use client";

import { useEffect } from "react";

type ThankYouModalProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ThankYouModal({ open, message, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[420px] rounded-[16px] bg-white p-8 text-center shadow-2xl animate-[modal-in_160ms_ease-out]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#DDDDDD] bg-white"
          aria-label="Close success message"
        >
          <XIcon />
        </button>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7]">
          <CheckIcon />
        </div>
        <h2 className="mt-5 font-grotesk text-[24px] font-bold tracking-[-0.5px] text-[#111111]">
          Request Received
        </h2>
        <p className="mt-3 font-ibm-mono text-[13px] leading-[1.7] tracking-[0.5px] text-[#444444]">
          {message}
        </p>
      </div>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
