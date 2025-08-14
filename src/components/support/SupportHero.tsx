import React from 'react';

export default function SupportHero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">
            Support client
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Besoin d'aide ? Notre équipe est là pour vous accompagner.
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToForm}
          className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
        >
          Envoyer un message
        </button>

        {/* Decorative elements */}
        <div className="relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
