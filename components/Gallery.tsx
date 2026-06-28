"use client";

import { motion } from "framer-motion";

const items = [1, 2, 3];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            Real Results
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
            Before &amp; After
          </h2>
          <p className="mt-4 text-ink/60">
            A glimpse at the transformation we bring to every property.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-glass"
            >
              <div className="grid grid-cols-2">
                <div className="flex aspect-square items-center justify-center bg-ink/90 text-xs font-medium uppercase tracking-widest text-white/40">
                  Before Image
                </div>
                <div className="flex aspect-square items-center justify-center bg-purple-gradient text-xs font-medium uppercase tracking-widest text-white/70">
                  After Image
                </div>
              </div>
              <div className="p-4 text-center text-sm font-medium text-ink/60">
                Property Transformation #{i}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
