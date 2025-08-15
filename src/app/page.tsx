import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import TrustedCompanies from "@/components/sections/TrustedCompanies"; // added

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <IndustriesServed />
      <Features />
      {/* <Testimonials /> section removed as requested */}
      {/* <Pricing /> section removed as requested */}
      <CTA />

      {/* Trusted logos placed at the bottom, before the footer */}
      <TrustedCompanies />

      <Footer />
    </main>
  );
}
