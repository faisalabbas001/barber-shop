import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import About from "@/sections/About";
import Team from "@/sections/Team";
import Pricing from "@/sections/Pricing";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Booking from "@/sections/Booking";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Team />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
