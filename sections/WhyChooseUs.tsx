"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/constants/data";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="The Difference" title="Why Choose Us" sub="Six reasons our clients trust us with more than just a haircut." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] transition-all"
            >
              <div className="shrink-0 w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-cream text-lg mb-1 font-display">{f.title}</h4>
                <p className="text-sm text-muted font-body">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
