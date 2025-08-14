import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="gradient-text">
            Générez plus de clients.
          </span>
          <br />
          <span className="text-white">
            Automatiquement.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
          LeadFlow Studio vous offre un système complet : landing page optimisée, 
          prise de rendez-vous en ligne, gestion des avis clients et automatisations de suivi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16">
          <a href="/demo" className="gradient-bg glow-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] inline-block text-center">
            Demander une démo
          </a>
          <Link href="/offres" className="inline-block w-full sm:w-auto">
            <button className="border-2 border-gray-600 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]">
              Voir nos offres
            </button>
          </Link>
        </div>

        {/* LeadFlow Image */}
        <div className="relative max-w-5xl mx-auto px-2">
          <div className="relative">
            <img 
              src="/images/Leadflow.png" 
              alt="LeadFlow Studio - Système complet de génération de leads"
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-xl sm:rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
