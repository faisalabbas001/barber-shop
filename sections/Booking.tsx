"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES, TEAM } from "@/constants/data";
import type { BookingFormState } from "@/types";

const initialState: BookingFormState = {
  name: "", phone: "", email: "", service: "", barber: "", date: "", time: "", message: "",
};

export default function Booking() {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your booking API / server action.
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const inputCls =
    "w-full bg-black/40 border border-white/10 focus:border-gold rounded-lg px-4 py-3 text-sm text-cream placeholder:text-white/30 outline-none transition-colors";

  return (
    <section id="booking" className="relative py-28 px-6 bg-ink">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Reserve Your Chair" title="Book An Appointment" sub="Fill in your details and we'll confirm your slot within the hour." />
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-gradient-to-b from-charcoal to-[#0d0c0a] border border-white/10 rounded-2xl p-8 font-body"
        >
          <input required name="name" value={form.name} onChange={handle} placeholder="Full Name" className={inputCls} />
          <input required name="phone" value={form.phone} onChange={handle} placeholder="Phone Number" className={inputCls} />
          <input required type="email" name="email" value={form.email} onChange={handle} placeholder="Email Address" className={`${inputCls} md:col-span-2`} />

          <select required name="service" value={form.service} onChange={handle} className={inputCls}>
            <option value="">Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
          </select>
          <select required name="barber" value={form.barber} onChange={handle} className={inputCls}>
            <option value="">Select Barber</option>
            {TEAM.map((t) => (
              <option key={t.name} value={t.name}>{t.name}</option>
            ))}
          </select>

          <input required type="date" name="date" value={form.date} onChange={handle} className={inputCls} />
          <input required type="time" name="time" value={form.time} onChange={handle} className={inputCls} />

          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Anything we should know? (optional)"
            rows={3}
            className={`${inputCls} md:col-span-2 resize-none`}
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="md:col-span-2 relative mt-2 inline-flex items-center justify-center gap-2 bg-gold text-black py-4 rounded-full uppercase text-sm tracking-widest font-medium overflow-hidden group"
          >
            <span className="relative z-10">{submitted ? "Request Sent" : "Confirm Booking"}</span>
            {!submitted && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
            {submitted && <Check className="w-4 h-4 relative z-10" />}
            <span className="absolute inset-0 bg-gold-bright scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:col-span-2 text-center text-sm text-gold"
              >
                Thank you — we&apos;ll confirm your appointment by email shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
