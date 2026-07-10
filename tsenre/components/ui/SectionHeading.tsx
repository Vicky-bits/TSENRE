"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}
    >
      <span
        className={`section-eyebrow ${
          align === "center" ? "justify-center before:hidden" : ""
        } ${light ? "text-ocean-200/80" : ""}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-ocean-100/80" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
