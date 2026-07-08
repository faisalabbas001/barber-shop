import {
  Scissors, Sparkles, Droplet, Sun, Gem, Crown, Baby, ShieldCheck, Award, Calendar,
} from "lucide-react";
import type { Service, Feature, TeamMember, PricingPlan, Testimonial, FAQItem } from "@/types";

export const NAV_LINKS = ["Home", "Services", "About", "Gallery", "Pricing", "Reviews", "Contact"];

export const SERVICES: Service[] = [
  { icon: Scissors, title: "Signature Haircut", price: "$45", desc: "Precision cut tailored to your face shape, finished with a hot-towel neck shave." },
  { icon: Sparkles, title: "Beard Sculpting", price: "$30", desc: "Shape, trim and line-up with straight razor detailing and beard oil finish." },
  { icon: Droplet, title: "Hair Styling", price: "$25", desc: "Wash, blow-dry and styling with premium pomades and matte clays." },
  { icon: Sun, title: "Hot Towel Shave", price: "$35", desc: "Traditional straight-razor shave with layered hot towels and aloe balm." },
  { icon: Gem, title: "Executive Facial", price: "$55", desc: "Deep-cleanse facial with steam, extraction and cooling gold-infused mask." },
  { icon: Crown, title: "VIP Grooming", price: "$120", desc: "Full grooming ritual — cut, shave, facial and scalp massage in a private suite." },
  { icon: Baby, title: "Kids Haircut", price: "$25", desc: "Patient, precise cuts for the next generation, in a relaxed chair setup." },
  { icon: ShieldCheck, title: "Head Shave", price: "$28", desc: "Clean, razor-smooth head shave with conditioning scalp treatment." },
];

export const FEATURES: Feature[] = [
  { icon: Award, title: "Master Barbers", desc: "Every stylist is certified with 8+ years behind the chair." },
  { icon: Gem, title: "Premium Products", desc: "Imported pomades, oils and blades sourced from top grooming houses." },
  { icon: Crown, title: "Luxury Experience", desc: "Private suites, curated playlists, and single-malt on request." },
  { icon: ShieldCheck, title: "Modern Equipment", desc: "Precision Japanese steel and hospital-grade sterilization." },
  { icon: Sparkles, title: "Immaculate Space", desc: "Every station reset and sanitized between every single client." },
  { icon: Calendar, title: "Effortless Booking", desc: "Reserve your chair and barber in under sixty seconds, online." },
];

export const TEAM: TeamMember[] = [
  { name: "Marcus Reyes", role: "Master Barber & Founder", exp: "14 yrs experience", seed: "barber1" },
  { name: "Elijah Cross", role: "Senior Style Consultant", exp: "10 yrs experience", seed: "barber2" },
  { name: "Damian Voss", role: "Beard & Shave Specialist", exp: "9 yrs experience", seed: "barber3" },
  { name: "Theo Lang", role: "Junior Barber", exp: "5 yrs experience", seed: "barber4" },
];

export const PRICING: PricingPlan[] = [
  {
    tier: "Basic", price: "$35", period: "/ visit",
    features: ["Signature Haircut", "Hot Towel Finish", "Style Consultation", "Complimentary Drink"],
    highlight: false,
  },
  {
    tier: "Standard", price: "$65", period: "/ visit",
    features: ["Haircut + Beard Sculpt", "Hot Towel Shave", "Scalp Massage", "Premium Product Finish", "Priority Booking"],
    highlight: true,
  },
  {
    tier: "VIP", price: "$120", period: "/ visit",
    features: ["Full Grooming Ritual", "Executive Facial", "Private Suite", "Complimentary Whisky", "Dedicated Barber"],
    highlight: false,
  },
];

export const GALLERY: string[] = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"];

export const TESTIMONIALS: Testimonial[] = [
  { name: "James Whitfield", quote: "The best grooming experience I've had — the attention to detail is unmatched, from the shave to the scalp massage.", rating: 5, seed: "t1" },
  { name: "Andre Colton", quote: "Walked in for a trim, left feeling like a completely different man. The VIP suite alone is worth it.", rating: 5, seed: "t2" },
  { name: "Rui Nakamura", quote: "Every barber here treats the craft like an art form. Consistent, precise, and genuinely relaxing.", rating: 5, seed: "t3" },
];

export const FAQS: FAQItem[] = [
  { q: "Do I need to book an appointment in advance?", a: "Walk-ins are welcome, but we recommend booking at least 24 hours ahead to guarantee your preferred barber and time slot." },
  { q: "What grooming products do you use?", a: "We use a curated selection of imported pomades, oils and balms from premium grooming houses, all tested on our own team first." },
  { q: "Can I request a specific barber?", a: "Absolutely — our booking form lets you choose your barber directly, or we'll match you based on your style preferences." },
  { q: "Do you offer packages for groups or events?", a: "Yes, we offer private suite bookings for groomsmen parties, corporate events and photoshoots. Contact us for custom packages." },
];
