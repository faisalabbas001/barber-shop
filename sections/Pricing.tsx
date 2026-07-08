"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING } from "@/constants/data";
import type { PricingPlan } from "@/types";

function PricingCard({ tier, price, period, features, highlight, i }: PricingPlan & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-8 flex flex-col ${
        highlight ? "bg-gradient-to-b from-gold/15 to-[#0d0c0a] border-2 border-gold" : "bg-surface border border-white/10"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs uppercase tracking-wider px-4 py-1 rounded-full font-medium">
          Recommended
        </span>
      )}
      <h3 className="text-2xl uppercase text-cream mb-2 font-display">{tier}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl text-gold font-display">{price}</span>
        <span className="text-muted text-sm">{period}</span>
      </div>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-cream/80 font-body">
            <Check className="w-4 h-4 text-gold shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <a
        href="#booking"
        className={`text-center py-3 rounded-full uppercase text-sm tracking-wider font-medium transition-all ${
          highlight
            ? "bg-gold text-black hover:bg-gold-bright hover:shadow-[0_0_25px_rgba(201,161,90,0.5)]"
            : "border border-gold/40 text-cream hover:bg-white/5"
        }`}
      >
        Choose Plan
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Investment" title="Membership & Pricing" sub="Transparent pricing, no surprises — just tell us the level of ritual you want." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((p, i) => (
            <PricingCard key={p.tier} {...p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
