import React from 'react';

export default function PrivacyHero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">
            Politique de confidentialité
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Protection et traitement de vos données personnelles chez LeadFlow Studio
        </p>

        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
