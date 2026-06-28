import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white">
            <Image src="/logo.jpeg" alt="Harmony Home Services" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="font-heading text-2xl font-semibold text-white">{business.officialName}</p>
            <p className="mt-1 text-sm">Owned &amp; operated by {business.ownerName}</p>
          </div>
        </div>
        <a
          href={business.phoneHref}
          className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white"
        >
          <Phone className="h-4 w-4" />
          {business.phoneDisplay}
        </a>
      </div>
      <p className="mt-8 text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} {business.officialName}. All rights reserved.
      </p>
    </footer>
  );
}
