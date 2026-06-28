"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 24, suffix: "hr", label: "Average Response Time" },
  { value: 0, suffix: "", label: "Free, No-Obligation Estimates", isText: true, display: "Free" },
  { value: 0, suffix: "", label: "Owned & Operated by Blake Winn", isText: true, display: "Local" },
  { value: 0, suffix: "", label: "Satisfaction Guaranteed", isText: true, display: "100%" }
];

export default function TrustSection() {
  return (
    <section className="border-b border-neutral bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl font-semibold text-primary md:text-5xl">
                {s.isText ? s.display : <AnimatedCounter value={s.value} suffix={s.suffix} />}
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-ink/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
