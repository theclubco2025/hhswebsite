"use client";

import { Phone, FileText } from "lucide-react";
import { business } from "@/config/site";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-primary/10 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
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
