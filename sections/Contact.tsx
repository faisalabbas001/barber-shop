"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const ITEMS = [
  { icon: MapPin, label: "Address", value: "128 Foundry Lane, Downtown District" },
  { icon: Phone, label: "Phone", value: "+1 (555) 019-2847" },
  { icon: Mail, label: "Email", value: "hello@noirandblade.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9AM – 8PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Find Us" title="Visit The Shop" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-surface"
              >
                <it.icon className="w-5 h-5 text-gold mb-3" />
                <div className="text-xs uppercase tracking-wider text-muted mb-1">{it.label}</div>
                <div className="text-cream text-sm">{it.value}</div>
              </motion.div>
            ))}
            <div className="sm:col-span-2 flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[300px] flex items-center justify-center bg-surface"
          >
            {/* Swap for a real embed, e.g. <iframe src="https://www.google.com/maps/embed?..." /> */}
            <div className="text-center text-muted">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-sm">Interactive map placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
