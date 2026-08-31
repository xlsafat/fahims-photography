import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FeaturedProject } from "@/components/FeaturedProject";
import { TheEdit } from "@/components/TheEdit";
import { Personality } from "@/components/Personality";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Marquee />
        <FeaturedWork />
        <FeaturedProject />
        <TheEdit />
        <Personality />
        <Testimonials />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
