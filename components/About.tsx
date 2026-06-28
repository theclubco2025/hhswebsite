"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            About The Owner
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
            Meet Blake Winn
          </h2>
          <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-neutral p-6 text-sm leading-relaxed text-ink/60">
            <p className="font-semibold text-ink/80">Blake — replace this placeholder with your story:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Who you are</li>
              <li>Why you started Harmony Home Services</li>
              <li>Your experience</li>
              <li>Your standards</li>
              <li>Your values</li>
              <li>Why customers should trust you</li>
              <li>Your vision for the business</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-premium">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm uppercase tracking-[0.25em] text-primary/40">
                BLAKE PHOTO PLACEHOLDER
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
