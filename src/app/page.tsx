import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <Navigation />
      <div className="pt-20">
        <ScrollReveal delay={100}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Offer />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Services />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <CTA />
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  );
}
