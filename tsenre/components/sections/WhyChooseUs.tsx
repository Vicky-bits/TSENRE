"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Precision, Safety and Delivery You Can Rely On"
              description="Every engagement is backed by a proven team, disciplined process and unwavering commitment to safety."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative rounded-xl2 border border-ink/5 p-6 hover:border-ocean-500/30 hover:shadow-card transition-all duration-300"
              >
                <span className="coord-label text-ocean-500/50">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-11 w-11 rounded-lg bg-ocean-50 flex items-center justify-center mt-4 mb-4">
                  <item.icon className="h-5 w-5 text-ocean-500" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
