"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { HSE_PILLARS, HSE_FEATURES, HSE_QUOTE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HSE() {
  return (
    <section id="hse" className="relative py-24 lg:py-32 bg-ocean-gradient overflow-hidden">
      <div className="absolute inset-0 blueprint-dark opacity-25" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="Health, Safety & Environment"
          title="A Zero-Compromise Safety Culture"
          description="HSE is not a department at TSENRE — it is a discipline embedded in every site, every crew and every decision we make."
          align="center"
          light
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {HSE_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-xl2 p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <pillar.icon className="h-6 w-6 text-accent-400" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{pillar.title}</h3>
              <ul className="space-y-2.5">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ocean-100/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {HSE_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="h-6 w-6 text-white" strokeWidth={1.6} />
              <span className="text-xs font-medium text-ocean-100/90 leading-tight">{feature.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
        >
          <Quote className="h-8 w-8 text-accent-400/70" strokeWidth={1.5} />
          <p className="text-xl sm:text-2xl font-heading font-semibold text-white leading-snug">
            &ldquo;{HSE_QUOTE}&rdquo;
          </p>
          <span className="coord-label text-ocean-200/70">TSENRE Technologies Limited &middot; HSE Policy</span>
        </motion.div>
      </div>
    </section>
  );
}
