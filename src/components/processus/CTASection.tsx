import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="gradient-bg rounded-2xl p-12 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à transformer vos visiteurs en clients ?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment notre processus complet peut révolutionner votre acquisition client 
              et booster vos conversions dès maintenant.
            </p>

            <Link href="/demo" className="inline-block">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Réserver un appel stratégique
              </button>
            </Link>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="absolute top-8 right-12 w-3 h-3 bg-white/30 rounded-full"></div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-50 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
