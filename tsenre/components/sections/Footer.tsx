import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, SERVICES, CONTACT_INFO, COMPANY_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-ocean-900 text-ocean-100 blueprint-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-11 w-11">
                <Image src="/images/logo.png" alt="TSENRE Technologies Limited" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <p className="font-heading font-bold text-white text-sm">TSENRE</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ocean-100/60">Technologies Ltd</p>
              </div>
            </div>
            <p className="text-sm text-ocean-100/70 leading-relaxed">
              Engineering excellence for the energy &amp; industrial sector across Nigeria.
            </p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp[0].replace(/[\s+]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm text-ocean-100/80 hover:bg-accent-400 hover:text-white transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ocean-100/70 hover:text-accent-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-ocean-100/70 hover:text-accent-300 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ocean-100/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent-400" />
                {CONTACT_INFO.address}
              </li>
              {CONTACT_INFO.phones.map((num) => (
                <li key={num} className="flex items-center gap-3 text-sm text-ocean-100/70">
                  <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                  <a href={`tel:${num.replace(/\s+/g, "")}`} className="hover:text-accent-300 transition-colors">
                    {num}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-ocean-100/70">
                <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent-300 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ocean-100/50">
            &copy; {new Date().getFullYear()} TSENRE Technologies Limited. All rights reserved.
          </p>
          <p className="text-xs text-ocean-100/50">RC {COMPANY_INFO.rcNumber} &middot; Port Harcourt, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
