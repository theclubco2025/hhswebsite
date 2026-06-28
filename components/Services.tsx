"use client";

import { motion } from "framer-motion";
import { Scissors, Trees, Sparkles, Leaf, CalendarClock, Wrench } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    desc: "Consistent, precise mowing and edging that keeps your property looking sharp all season long.",
    tone: "from-[#3c1f78] to-[#5B21B6]"
  },
  {
    icon: Leaf,
    title: "Weed Whacking",
    desc: "Detailed trimming along fences, beds, and tight edges for a clean, finished look.",
    tone: "from-[#4a2491] to-[#7C3AED]"
  },
  {
    icon: Trees,
    title: "Tree Trimming",
    desc: "Safe, professional trimming that protects your property and keeps trees healthy.",
    tone: "from-[#2d1660] to-[#5B21B6]"
  },
  {
    icon: Sparkles,
    title: "Property Cleanup",
    desc: "Debris removal and tidy-up service that restores your property's curb appeal.",
    tone: "from-[#5B21B6] to-[#8B5CF6]"
  },
  {
    icon: CalendarClock,
    title: "Seasonal Maintenance",
    desc: "Spring and fall property prep so your home is ready for every season.",
    tone: "from-[#371c6e] to-[#6D28D9]"
  },
  {
    icon: Wrench,
    title: "General Property Services",
    desc: "Tailored property work outside the standard list. Ask Blake what he can take care of.",
    tone: "from-[#4a2491] to-[#5B21B6]"
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              href="#quote"
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl shadow-glass transition-shadow duration-300 hover:shadow-premium"
            >
              {/* Photo placeholder layer — swap for real jobsite photography */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.tone} transition-transform duration-500 ease-out group-hover:scale-105`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.18),transparent_45%)]" />
                <s.icon className="absolute right-5 top-5 h-9 w-9 text-white/15" strokeWidth={1.25} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

              <div className="relative z-10 p-6">
                <h3 className="font-heading text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/0 transition-colors duration-300 group-hover:text-white/90">
                  Request This Service &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
