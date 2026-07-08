"use client";

import { motion } from "framer-motion";

/**
 * Signature motif: a gold line that draws itself like a single
 * straight-razor pass. Used under every section heading in place
 * of a generic underline/divider.
 */
export default function RazorStroke({
  width = 120,
  className = "",
  delay = 0,
}: {
  width?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <svg width={width} height="14" viewBox="0 0 120 14" fill="none" className={className}>
      <motion.path
        d="M2 10 C 20 2, 40 12, 60 6 C 80 1, 100 11, 118 4"
        stroke="url(#razorGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="razorGrad" x1="0" y1="0" x2="120" y2="0">
          <stop offset="0%" stopColor="#8a6a2e" />
          <stop offset="50%" stopColor="#e8c77e" />
          <stop offset="100%" stopColor="#8a6a2e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
