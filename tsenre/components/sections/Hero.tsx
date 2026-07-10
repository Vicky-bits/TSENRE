"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Crosshair } from "lucide-react";

function ParticleField() {
  const particles = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((_, i) => {
        const size = 2 + ((i * 7) % 4);
        const left = (i * 37) % 100;
        const delay = (i % 8) * 0.6;
        const duration = 8 + (i % 6);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-ocean-300/40"
            style={{ width: size, height: size, left: `${left}%`, bottom: "-5%" }}
            animate={{ y: ["0%", "-120vh"], opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ocean-900">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero-industrial.jpg"
          alt="TSENRE Technologies industrial engineering site with heavy lifting cranes"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/85 via-ocean-900/75 to-ocean-900/95" />
      <div className="absolute inset-0 bg-ocean-radial" />
      <div className="absolute inset-0 blueprint-dark opacity-40" />
      <ParticleField />

      {/* Signature scanning line, echoes instrumentation calibration sweep */}
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent"
          animate={{ y: ["0%", "100vh"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        />
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full pt-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow text-ocean-200"
            >
              Nigeria &middot; Oil &amp; Gas &middot; Industrial
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-2xl"
            >
              Engineering Excellence for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                Energy &amp; Industrial
              </span>{" "}
              Sector
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-ocean-100/85 max-w-xl leading-relaxed"
            >
              Delivering world-class inspection, calibration, engineering, procurement, instrumentation and
              industrial solutions across Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 sm:mt-14 flex items-center gap-8"
            >
              {[
                ["20+", "Years"],
                ["3000+", "Projects"],
                ["100%", "Satisfaction"],
              ].map(([num, label]) => (
                <div key={label} className="border-l border-white/20 pl-4">
                  <p className="text-2xl font-heading font-bold text-white">{num}</p>
                  <p className="text-xs text-ocean-100/70 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating engineering illustration — crosshair/derrick motif echoing the brand mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative items-center justify-center h-[420px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-white/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[260px] w-[260px] rounded-full border border-white/10"
            />
            <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="glass rounded-full p-10 shadow-glow">
                <Crosshair className="h-24 w-24 text-accent-400" strokeWidth={1.2} />
              </div>
            </motion.div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-accent-400"
                style={{
                  top: `${20 + i * 25}%`,
                  left: i % 2 === 0 ? "10%" : "85%",
                }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors"
      >
        <span className="coord-label text-white/60">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
