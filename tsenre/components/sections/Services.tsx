"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Engineering & Industrial Services"
          description="From non-destructive testing to full-scale engineering construction, our service portfolio covers the complete lifecycle of industrial assets."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-xl2 p-[1.5px] bg-gradient-to-br from-ocean-500/0 via-ocean-500/0 to-ocean-500/0 hover:from-ocean-500/40 hover:via-accent-400/30 hover:to-ocean-500/40 transition-all duration-500"
            >
              <div className="relative h-full rounded-[calc(1.25rem-1.5px)] bg-white p-8 shadow-card group-hover:shadow-card-hover transition-all duration-500 group-hover:-translate-y-1.5">
                <div className="flex items-start justify-between">
                  <div className="h-[52px] w-[52px] rounded-xl bg-ocean-50 flex items-center justify-center group-hover:bg-ocean-500 transition-colors duration-500">
                    <service.icon className="h-6 w-6 text-ocean-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-faint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <h3 className="mt-6 text-lg font-heading font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
