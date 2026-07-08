"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEAM } from "@/constants/data";
import { placeholderImg } from "@/lib/utils";
import type { TeamMember } from "@/types";

function TeamCard({ name, role, exp, seed, i }: TeamMember & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-2xl overflow-hidden border border-white/5"
    >
      <div className="relative h-96 overflow-hidden">
        <Image
          src={placeholderImg(seed, 500, 650)}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(201,161,90,0)] group-hover:shadow-[inset_0_0_60px_rgba(201,161,90,0.25)] transition-shadow duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h4 className="text-xl text-cream font-display">{name}</h4>
        <p className="text-gold text-sm mb-1">{role}</p>
        <p className="text-muted text-xs mb-3">{exp}</p>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Instagram className="w-4 h-4 text-cream hover:text-gold cursor-pointer" />
          <Facebook className="w-4 h-4 text-cream hover:text-gold cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="relative py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Meet The Team" title="Our Master Barbers" sub="Handpicked talent, each with a distinct style and years behind the chair." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((t, i) => (
            <TeamCard key={t.name} {...t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
