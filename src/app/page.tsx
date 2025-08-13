import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      <Hero />
      <Offer />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
