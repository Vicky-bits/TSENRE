"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO, MISSION_VISION_VALUES } from "@/lib/data";

const PILLARS = [
  {
    icon: Eye,
    title: "Our Vision",
    description: MISSION_VISION_VALUES.vision,
  },
  {
    icon: Target,
    title: "Our Mission",
    description: MISSION_VISION_VALUES.mission,
  },
  {
    icon: Gem,
    title: "Our Core Values",
    description: MISSION_VISION_VALUES.coreValues.join(" · "),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full blueprint opacity-60" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative corner-marks"
          >
            <div className="relative rounded-xl2 overflow-hidden shadow-soft h-[420px] lg:h-[520px]">
              <Image
                src="/images/hero-industrial.jpg"
                alt="TSENRE Technologies engineering team on an industrial lifting operation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-6 sm:-right-10 card-surface p-6 max-w-[220px] hidden sm:block"
            >
              <p className="coord-label mb-1">Registered Company</p>
              <p className="text-2xl font-heading font-bold text-ocean-500">RC {COMPANY_INFO.rcNumber}</p>
              <p className="text-sm text-ink-soft mt-1">Federal Republic of Nigeria</p>
            </motion.div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="An Indigenous Engineering Partner Built on Precision"
            />
            <p className="mt-6 text-ink-soft leading-relaxed">{COMPANY_INFO.corporateBrief}</p>
            <p className="mt-4 text-ink-soft leading-relaxed">{COMPANY_INFO.corporateBriefSecondary}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-surface p-8 hover:shadow-card-hover"
            >
              <div className="h-12 w-12 rounded-xl bg-ocean-50 flex items-center justify-center mb-5">
                <pillar.icon className="h-6 w-6 text-ocean-500" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{pillar.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl2 overflow-hidden shadow-soft corner-marks"
          >
            <div className="relative h-[320px] sm:h-[380px]">
              <Image
                src="/images/our-team.jpg"
                alt="The TSENRE Technologies field and engineering team"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/85 via-ocean-900/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="section-eyebrow text-ocean-200 mb-1">Our Team</span>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-white leading-snug">
                The Engineers and Field Specialists Behind Every Delivery
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-xl2 overflow-hidden shadow-soft corner-marks"
          >
            <div className="relative h-[320px] sm:h-[380px]">
              <Image
                src="/images/our-partners.jpg"
                alt="TSENRE Technologies working alongside industry partners"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/85 via-ocean-900/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="section-eyebrow text-ocean-200 mb-1">Our Partners</span>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-white leading-snug">
                Working Alongside Trusted Industry Partners
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
