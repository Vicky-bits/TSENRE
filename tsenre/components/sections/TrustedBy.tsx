"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="relative py-14 bg-surface border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="coord-label text-center justify-center flex before:hidden mb-8"
        >
          Trusted By
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-16 w-32 sm:h-20 sm:w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
