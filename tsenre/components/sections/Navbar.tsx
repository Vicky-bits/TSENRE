"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="relative h-11 w-11">
            <Image src="/images/logo.png" alt="TSENRE Technologies Limited" fill className="object-contain" priority />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className={`font-heading font-bold text-[15px] tracking-tight ${scrolled ? "text-ocean-800" : "text-white"}`}>
              TSENRE
            </p>
            <p className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-ink-soft" : "text-white/70"}`}>
              Technologies Ltd
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                scrolled ? "text-ink hover:text-ocean-500" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-ocean-800" : "text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white shadow-soft"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-ink border-b border-ink/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
