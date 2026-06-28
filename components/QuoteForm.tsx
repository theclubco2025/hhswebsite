"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, CheckCircle2 } from "lucide-react";
import { business } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Sorry, submission failed. Please call us directly.");
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            Ready To Get Started?
          </h2>
          <p className="mt-4 text-white/60">Get your free estimate today.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl bg-white p-6 shadow-premium md:p-10"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-secondary" />
              <p className="font-heading text-2xl font-semibold text-ink">Request Sent</p>
              <p className="text-ink/60">
                Thanks &mdash; Blake will reach out shortly. For urgent requests, call{" "}
                {business.phoneDisplay}.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="fullName" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Service Address" name="address" required className="md:col-span-2" />
              <Field label="Email Address" name="email" type="email" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink/70">
                  Requested Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-ink/10 bg-neutral px-4 py-3 text-sm text-ink outline-none focus:border-primary"
                >
                  <option value="">Select a service</option>
                  {business.services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink/70">Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-xl border border-ink/10 bg-neutral px-4 py-3 text-sm text-ink outline-none focus:border-primary"
                  placeholder="Tell us more about your project..."
                />
              </div>

              {status === "error" && (
                <p className="md:col-span-2 text-sm font-medium text-red-600">{errorMsg}</p>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-gradient px-8 py-4 text-base font-semibold text-white shadow-premium transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "submitting" ? "Sending..." : "Get Free Quote"}
                </button>
                <a
                  href={business.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-ink/50"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Or call Blake directly &mdash; {business.phoneDisplay}
                </a>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink/10 bg-neutral px-4 py-3 text-sm text-ink outline-none focus:border-primary"
      />
    </div>
  );
}
