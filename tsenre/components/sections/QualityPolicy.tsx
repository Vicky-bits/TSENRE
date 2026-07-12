"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { QUALITY_POINTS, QUALITY_BADGES, QUALITY_POLICY_STATEMENT, CERTIFICATIONS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function QualityPolicy() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 blueprint opacity-50" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Quality Policy"
              title="Committed to Quality in Every Deliverable"
              description="TSENRE Technologies Limited is an inspection company committed to providing reliable, non-defect service that meets and exceeds the expectations of our clients."
            />

            <ul className="mt-8 space-y-4">
              {QUALITY_POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                  <span className="text-ink-soft leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-surface p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-ocean-50" aria-hidden="true" />
              <div className="relative">
                <p className="coord-label mb-3">Standards & Registration</p>
                <div className="grid grid-cols-2 gap-4">
                  {QUALITY_BADGES.map((badge) => (
                    <div key={badge.tag} className="rounded-xl border border-ocean-500/15 bg-ocean-50/50 px-4 py-5 text-center">
                      <p className="font-heading font-bold text-ocean-600">{badge.tag}</p>
                      <p className="mt-1 text-[11px] text-ink-soft uppercase tracking-wide">{badge.label}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-8 border-l-2 border-accent-400 pl-5 space-y-3">
                  {QUALITY_POLICY_STATEMENT.paragraphs.map((p) => (
                    <p key={p} className="text-sm text-ink-soft leading-relaxed italic">
                      {p}
                    </p>
                  ))}
                </blockquote>
                <p className="mt-4 text-sm font-heading font-semibold text-ink">
                  — {QUALITY_POLICY_STATEMENT.signatory}, {QUALITY_POLICY_STATEMENT.signatoryTitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
         {/* Certifications & memberships — regulatory bodies and associations, distinct from clients */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-14 border-t border-ink/10"
        >
          <p className="coord-label text-center justify-center flex before:hidden mb-9">
            Certifications &amp; Memberships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative h-16 w-24 sm:h-20 sm:w-28"
              >
                <Image src={cert.logo} alt={cert.name} fill className="object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
