"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Link from "next/link";
import Image from "next/image";

// will be used to flip the whatsapp icon
import { useI18n } from "@/lib/i18n/context";

export default function Home() {
  const { t, isRTL } = useI18n();

  return (
    <main className="bg-dark min-h-screen relative">
      {/* Whatsapp Floating icon */}
      <div className={`fixed bottom-5 ${isRTL ? "left-6" : "right-6"} z-50`}>
        <Link
          href={`https://wa.me/${201155527261}?text=${encodeURIComponent("I would like to work together")}`}
          target="_blank"
          className="whatsapp-glow block rounded-full"
        >
          {
            <Image
              src={"/WhatsApp.svg"}
              alt="whatsapp"
              width={60}
              height={60}
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            />
          }
        </Link>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
