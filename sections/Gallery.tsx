"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY } from "@/constants/data";
import { placeholderImg } from "@/lib/utils";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Inside The Shop" title="Gallery" sub="A look at the space, the tools, and the craft." />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setActive(i)}
            >
              <Image
                src={placeholderImg(g, 500, 400 + (i % 3) * 120)}
                alt="Barbershop gallery"
                width={500}
                height={400 + (i % 3) * 120}
                className="w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 group-hover:blur-[1px] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-full"
            >
              <Image
                src={placeholderImg(GALLERY[active] ?? GALLERY[0]!, 900, 700)}
                alt="Expanded gallery image"
                width={900}
                height={700}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
            <button className="absolute top-6 right-6 text-cream" onClick={() => setActive(null)} aria-label="Close">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
