"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-gold/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Scissors className="w-6 h-6 text-gold group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-xl tracking-[0.2em] text-cream uppercase font-display">
            Noir&nbsp;<span className="text-gold">&amp;</span>&nbsp;Blade
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActive(link)}
              className="relative text-sm uppercase tracking-wider text-cream/80 hover:text-cream transition-colors py-2 font-body"
            >
              {link}
              {active === link && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-black text-sm uppercase tracking-wider font-medium px-5 py-2.5 rounded-full hover:bg-gold-bright transition-all hover:shadow-[0_0_25px_rgba(201,161,90,0.5)] font-body"
          >
            Book Appointment
          </a>
          <button className="lg:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-gold/20 mt-4"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => {
                    setActive(link);
                    setOpen(false);
                  }}
                  className="text-cream uppercase tracking-wider text-sm font-body"
                >
                  {link}
                </a>
              ))}
              <a href="#booking" className="bg-gold text-black text-center py-2.5 rounded-full uppercase text-sm tracking-wider font-medium">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
