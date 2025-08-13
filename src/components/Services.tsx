import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Landing Page Optimisée",
      description: "Un site sur mesure, pensé pour convertir vos visiteurs en prospects qualifiés.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-600/20 to-pink-600/20",
      border: "border-purple-500/30"
    },
    {
      title: "Système de Prise de Rendez-vous",
      description: "Calendrier intelligent avec rappels automatiques pour éviter les absences.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-pink-600/20 to-orange-600/20",
      border: "border-pink-500/30"
    },
    {
      title: "Gestion des Avis Clients",
      description: "Demande et suivi des avis Google et Facebook pour booster votre réputation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      gradient: "from-orange-600/20 to-yellow-600/20",
      border: "border-orange-500/30"
    },
    {
      title: "Automatisations de Suivi",
      description: "Relances automatiques par SMS et email pour transformer vos prospects en clients.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      gradient: "from-yellow-600/20 to-purple-600/20",
      border: "border-yellow-500/30"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Nos 4 Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un écosystème complet pour transformer votre activité en machine à générer des clients
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 border ${service.border} hover:scale-105 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-transparent bg-clip-text gradient-text font-semibold hover:underline transition-all duration-300">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white mb-4">
              Tout est inclus dans votre pack
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Pas de frais cachés, pas de surprises. Un seul abonnement pour tous vos besoins d'acquisition client.
            </p>
            <button className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
              Voir les tarifs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
