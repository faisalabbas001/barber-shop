import { Scissors } from "lucide-react";
import { SERVICES } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scissors className="w-5 h-5 text-gold" />
            <span className="text-lg tracking-[0.2em] text-cream uppercase font-display">Noir &amp; Blade</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            A premium barbershop for men who take their grooming as seriously as their craft.
          </p>
        </div>
        <div>
          <h5 className="text-cream uppercase text-sm tracking-wider mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-muted">
            {["Home", "About", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-cream uppercase text-sm tracking-wider mb-4">Services</h5>
          <ul className="space-y-2 text-sm text-muted">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-cream uppercase text-sm tracking-wider mb-4">Newsletter</h5>
          <p className="text-sm text-muted mb-4">Grooming tips and offers, once a month.</p>
          <div className="flex gap-2">
            <input
              placeholder="Your email"
              className="flex-1 bg-surface border border-white/10 rounded-full px-4 py-2 text-sm text-cream outline-none focus:border-gold"
            />
            <button className="bg-gold text-black px-4 rounded-full text-sm hover:bg-gold-bright transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} Noir & Blade Barbershop. All rights reserved.
      </div>
    </footer>
  );
}
