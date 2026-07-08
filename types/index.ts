import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  price: string;
  desc: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  exp: string;
  seed: string;
}

export interface PricingPlan {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  seed: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  message: string;
}
