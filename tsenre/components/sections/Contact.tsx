"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO, gmailComposeUrl } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    content: <p className="text-sm text-ink leading-relaxed">{CONTACT_INFO.address}</p>,
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <p className="text-sm text-ink leading-relaxed">
        {CONTACT_INFO.phones.map((num, i) => (
          <span key={num}>
            <a href={`tel:${num.replace(/\s+/g, "")}`} className="hover:text-ocean-500 transition-colors">
              {num}
            </a>
            {i < CONTACT_INFO.phones.length - 1 && <span className="text-ink-faint"> &middot; </span>}
          </span>
        ))}
      </p>
    ),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    content: (
      <p className="text-sm text-ink leading-relaxed">
        {CONTACT_INFO.whatsapp.map((num, i) => (
          <span key={num}>
            <a
              href={`https://wa.me/${num.replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ocean-500 transition-colors"
            >
              {num}
            </a>
            {i < CONTACT_INFO.whatsapp.length - 1 && <span className="text-ink-faint"> &middot; </span>}
          </span>
        ))}
      </p>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a
        href={gmailComposeUrl(CONTACT_INFO.email, "Website Inquiry")}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-ink leading-relaxed hover:text-ocean-500 transition-colors"
      >
        {CONTACT_INFO.email}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Office Hours",
    content: <p className="text-sm text-ink leading-relaxed">{CONTACT_INFO.hours}</p>,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full blueprint opacity-40" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Discuss Your Next Project"
          description="Reach out for inspection, calibration or engineering support — our team responds within one business day."
        />

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className="card-surface p-6 flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-ocean-50 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-ocean-500" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="coord-label mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="card-surface p-8 lg:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="h-14 w-14 text-ocean-500 mb-4" />
                <h3 className="text-xl font-heading font-semibold">Message Sent</h3>
                <p className="text-ink-soft mt-2 max-w-sm">
                  Thank you for reaching out. A member of the TSENRE team will respond to your request shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-ocean mt-6">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                {/* Honeypot field — hidden from real visitors, catches simple bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500/40 focus:border-ocean-500 transition-all"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500/40 focus:border-ocean-500 transition-all"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500/40 focus:border-ocean-500 transition-all"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500/40 focus:border-ocean-500 transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500/40 focus:border-ocean-500 transition-all resize-none"
                  />
                </div>
                {error && (
                  <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <div className="sm:col-span-2">
                  <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:opacity-70">
                    {submitting ? "Sending..." : "Send Message"}
                    {!submitting && <Send className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
