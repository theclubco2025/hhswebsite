"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [1, 2, 3];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Trusted Locally
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
            What Homeowners Say
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-primary/10 bg-neutral p-7 shadow-glass"
            >
              <div className="flex gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-secondary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                &ldquo;REVIEW PLACEHOLDER &mdash; replace with a real customer testimonial once
                collected.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">CUSTOMER NAME</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
