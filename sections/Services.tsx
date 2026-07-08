"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/data";
import type { Service } from "@/types";

function ServiceCard({ icon: Icon, title, price, desc, i }: Service & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl p-7 bg-gradient-to-b from-charcoal to-[#0d0c0a] border border-white/5 hover:border-gold/50 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-xl text-cream mb-2 font-display">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5 font-body">{desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-gold text-lg font-display">{price}</span>
        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Offer"
          title="Grooming Services"
          sub="Every service is performed by a certified master barber, using imported tools and premium finishing products."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
