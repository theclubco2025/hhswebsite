"use client";

import { motion } from "framer-motion";
import { Scissors, Trees, Sparkles, Leaf, CalendarClock, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    desc: "Consistent, precise mowing and edging that keeps your property looking sharp all season long."
  },
  {
    icon: Leaf,
    title: "Weed Whacking",
    desc: "Detailed trimming along fences, beds, and tight edges for a clean, finished look."
  },
  {
    icon: Trees,
    title: "Tree Trimming",
    desc: "Safe, professional trimming that protects your property and keeps trees healthy."
  },
  {
    icon: Sparkles,
    title: "Property Cleanup",
    desc: "Debris removal and tidy-up service that restores your property's curb appeal."
  },
  {
    icon: CalendarClock,
    title: "Seasonal Maintenance",
    desc: "Spring and fall property prep so your home is ready for every season."
  },
  {
    icon: Wrench,
    title: "Additional Services",
    desc: "General property services tailored to your home's specific needs. Ask Blake for details."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            What We Offer
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
            Property Care, Done Right
          </h2>
          <p className="mt-4 text-ink/60">
            From routine maintenance to seasonal projects, we treat every property like our own.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white p-7 shadow-glass transition-shadow hover:shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-gradient text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.desc}</p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Get Quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
