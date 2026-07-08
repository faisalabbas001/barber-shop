"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants/data";
import { placeholderImg } from "@/lib/utils";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[idx] ?? TESTIMONIALS[0]!;

  return (
    <section id="reviews" className="relative py-28 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="Client Words" title="Testimonials" />
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <Quote className="w-8 h-8 text-gold mb-4" />
              <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-6 italic font-accent">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(current.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={placeholderImg(current.seed, 100, 100)}
                  alt={current.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <span className="text-cream text-sm uppercase tracking-wider">{current.name}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
