"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/data";

const WHATSAPP_NUMBER = CONTACT_INFO.whatsapp[0].replace(/[\s+]/g, "");

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 relative" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.912 6.478L4 29l7.72-1.867A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.362l-.357-.212-4.583 1.108 1.128-4.47-.233-.366A9.77 9.77 0 0 1 6.182 15c0-5.415 4.404-9.818 9.819-9.818 5.414 0 9.818 4.403 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818Zm5.383-7.352c-.294-.147-1.74-.859-2.01-.957-.27-.098-.467-.147-.663.147-.196.294-.76.957-.932 1.153-.171.196-.343.221-.637.074-.294-.147-1.242-.458-2.366-1.464-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.44-.514.148-.172.197-.294.295-.49.098-.196.049-.368-.025-.515-.074-.147-.663-1.6-.909-2.19-.239-.575-.482-.497-.663-.506-.171-.008-.368-.01-.564-.01-.196 0-.514.073-.784.368-.27.294-1.03 1.006-1.03 2.454 0 1.447 1.055 2.846 1.202 3.043.147.196 2.076 3.17 5.032 4.444.703.303 1.251.484 1.679.62.705.224 1.347.192 1.854.117.566-.085 1.74-.712 1.986-1.4.245-.687.245-1.276.171-1.4-.073-.123-.269-.196-.563-.343Z" />
      </svg>
    </motion.a>
  );
}
