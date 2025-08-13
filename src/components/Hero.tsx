import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">
            Générez plus de clients.
          </span>
          <br />
          <span className="text-white">
            Automatiquement.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          LeadFlow Studio vous offre un système complet : landing page optimisée, 
          prise de rendez-vous en ligne, gestion des avis clients et automatisations de suivi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 min-w-[200px]">
            Demander une démo
          </button>
          <button className="border-2 border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 min-w-[200px]">
            Voir nos offres
          </button>
        </div>

        {/* Mockup Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                <div className="flex gap-2 mt-6">
                  <div className="h-10 gradient-bg rounded w-32"></div>
                  <div className="h-10 bg-gray-600 rounded w-32"></div>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm">
              Aperçu de votre futur système LeadFlow
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
