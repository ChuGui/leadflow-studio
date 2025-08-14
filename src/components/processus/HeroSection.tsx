import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="gradient-text">
            Notre Processus
          </span>
          <br />
          <span className="text-white">
            Complet
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
          Du premier clic à l'avis 5 étoiles : découvrez comment nous transformons 
          vos visiteurs en clients fidèles.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-8 sm:mb-16">
          <Link href="/demo" className="inline-block">
            <button className="gradient-bg glow-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300">
              Commencer maintenant
            </button>
          </Link>
        </div>

        {/* Process Flow Visual */}
        <div className="relative max-w-5xl mx-auto px-2">
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 via-orange-600/10 to-yellow-600/10 rounded-xl sm:rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <span className="text-gray-300 text-sm">Attirer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <span className="text-gray-300 text-sm">Intéresser</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <span className="text-gray-300 text-sm">Convertir</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <span className="text-gray-300 text-sm">Fidéliser</span>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-xl sm:rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
