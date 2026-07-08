"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/constants/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border border-white/10 rounded-xl overflow-hidden bg-surface">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-cream text-sm md:text-base font-display">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  <Plus className="w-4 h-4 text-gold" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted leading-relaxed font-body">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
