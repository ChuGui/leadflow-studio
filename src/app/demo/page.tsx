import React from 'react';
import DemoForm from '../../components/DemoForm';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <ScrollReveal delay={200}>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="gradient-text">Demander une démo</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Découvrez comment LeadFlow Studio peut transformer votre acquisition client. 
                Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement.
              </p>
            </div>
          </ScrollReveal>

          {/* Demo Form */}
          <ScrollReveal delay={400}>
            <DemoForm />
          </ScrollReveal>
        </div>
      </main>
      
      <ScrollReveal delay={600}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
