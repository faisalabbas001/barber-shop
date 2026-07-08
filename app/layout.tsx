import type { Metadata } from "next";
import { Oswald, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noir & Blade | Premium Barbershop",
  description:
    "A modern luxury barbershop — master craftsmanship, private grooming suites, and rituals worth returning for.",
  openGraph: {
    title: "Noir & Blade | Premium Barbershop",
    description:
      "Master barbers, premium products, and a cinematic grooming experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-ink text-cream">{children}</body>
    </html>
  );
}
