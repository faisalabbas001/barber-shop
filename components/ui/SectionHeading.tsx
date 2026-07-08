"use client";

import { motion } from "framer-motion";
import RazorStroke from "./RazorStroke";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignCls} mb-14`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="uppercase tracking-[0.35em] text-xs md:text-sm text-gold mb-3 font-body"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-4xl md:text-6xl text-cream uppercase leading-[1.05] font-display font-semibold"
      >
        {title}
      </motion.h2>
      <RazorStroke className="my-4" />
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl text-muted text-sm md:text-base leading-relaxed font-body"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
