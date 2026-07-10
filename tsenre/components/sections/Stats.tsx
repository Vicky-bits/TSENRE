"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  return (
    <section className="relative py-20 bg-ocean-gradient overflow-hidden">
      <div className="absolute inset-0 blueprint-dark opacity-30" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:border-r lg:last:border-none border-white/15"
            >
              <p className="text-4xl sm:text-5xl font-heading font-bold text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-ocean-100/80 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
