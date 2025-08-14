import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';
import HeroSection from '../../components/processus/HeroSection';
import StepVisiteur from '../../components/processus/StepVisiteur';
import StepProspect from '../../components/processus/StepProspect';
import StepRendezVous from '../../components/processus/StepRendezVous';
import StepClientSatisfait from '../../components/processus/StepClientSatisfait';
import CTASection from '../../components/processus/CTASection';

export default function ProcessusCompletPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navigation />

      {/* Main Content */}
      <main className="pt-20">
        <ScrollReveal delay={100}>
          <HeroSection />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <StepVisiteur />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <StepProspect />
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <StepRendezVous />
        </ScrollReveal>
        
        <ScrollReveal delay={500}>
          <StepClientSatisfait />
        </ScrollReveal>
        
        <ScrollReveal delay={600}>
          <CTASection />
        </ScrollReveal>
        
        <ScrollReveal delay={700}>
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}
