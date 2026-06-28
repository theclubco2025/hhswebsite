"use client";

import { Phone, FileText } from "lucide-react";
import { business } from "@/config/site";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex gap-2 border-b border-primary/10 bg-white/95 p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
      style={{ paddingTop: "max(0.625rem, env(safe-area-inset-top))" }}
    >
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 py-3.5 text-sm font-semibold text-primary"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-purple-gradient py-3.5 text-sm font-semibold text-white"
      >
        <FileText className="h-4 w-4" />
        Get Quote
      </a>
    </div>
  );
}
