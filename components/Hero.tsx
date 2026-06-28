"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Check } from "lucide-react";
import { business } from "@/config/site";

const checklist = ["Lawn Maintenance", "Weed Whacking", "Tree Trimming", "Property Cleanup"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* Swap this layer for a real property photo (object-cover) when available */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1024] via-ink to-[#150c1f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(124,58,237,0.32),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(91,33,182,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      {/* Smooth blend into the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-24 text-center md:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-block rounded-full border border-secondary/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary"
        >
          Locally Owned &amp; Operated
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl"
        >
          Professional Property Care
          <br />
          <span className="text-gradient">You Can Trust</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          Reliable local service for homeowners who expect quality work and exceptional care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {checklist.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-white/80">
              <Check className="h-4 w-4 text-secondary" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#quote"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-purple-gradient px-8 py-4 text-base font-semibold text-white shadow-premium transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl sm:w-auto"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={business.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 ease-out hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call Blake &mdash; {business.phoneDisplay}
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40"
      >
        <div className="h-9 w-5 rounded-full border border-white/30 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
