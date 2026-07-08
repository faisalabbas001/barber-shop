"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RazorStroke from "@/components/ui/RazorStroke";
import Counter from "@/components/ui/Counter";
import { placeholderImg } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden h-[480px]">
            <Image
              src={placeholderImg("aboutbarber", 800, 950)}
              alt="Barbershop interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale-[25%] sepia-[10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-black px-6 py-4 rounded-xl shadow-2xl hidden sm:block">
            <div className="text-2xl font-semibold font-display">12+ Yrs</div>
            <div className="text-xs uppercase tracking-wider">Of Craftsmanship</div>
          </div>
        </motion.div>

        <div>
          <span className="uppercase tracking-[0.35em] text-xs md:text-sm text-gold mb-3 block font-body">Our Story</span>
          <h2 className="text-4xl md:text-5xl text-cream uppercase leading-tight mb-4 font-display font-semibold">
            A Chair Worth <span className="text-gold">Waiting For</span>
          </h2>
          <RazorStroke className="mb-6" />
          <p className="text-muted leading-relaxed mb-4 font-body">
            Noir & Blade opened its doors in 2012 with a single idea: a haircut should feel like an occasion. What began
            as a two-chair studio has grown into the city&apos;s most trusted grooming house, without ever trading craft
            for convenience.
          </p>
          <p className="text-muted leading-relaxed mb-10 font-body">
            Today, our barbers train under a strict apprenticeship model, our tools are imported and hand-maintained, and
            every client leaves through the same door they walked in — just sharper.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Counter to={12} suffix="+" label="Years Open" />
            <Counter to={18} suffix="" label="Master Barbers" />
            <Counter to={24} suffix="k+" label="Happy Clients" />
          </div>
        </div>
      </div>
    </section>
  );
}
