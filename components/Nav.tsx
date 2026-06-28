"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/config/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "text-ink/70 hover:text-primary" : "text-white/85 hover:text-white";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all ${
        scrolled
          ? "glass border-primary/10 shadow-glass"
          : "border-white/10 bg-ink/45 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 md:py-3">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
            <Image src="/logo.jpeg" alt="Harmony Home Services" width={40} height={40} className="h-full w-full object-cover" priority />
          </span>
          <span
            className={`hidden font-heading text-lg font-semibold tracking-tight sm:inline ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Harmony Home Services
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${linkColor}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full bg-purple-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call Blake
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={scrolled ? "text-ink md:hidden" : "text-white md:hidden"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="glass border-t border-primary/10 px-5 pb-6 md:hidden"
        >
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-purple-gradient px-5 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Call {business.phoneDisplay}
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
