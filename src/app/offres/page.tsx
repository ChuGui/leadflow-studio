import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/ScrollReveal';

export default function OffresPage() {
  const offers = [
    {
      name: "Starter",
      icon: "💡",
      description: "Pour tester la solution et générer ses premiers leads",
      price: "97",
      setup: "500",
      features: [
        "Landing page optimisée conversion (1 section CTA + présentation offre)",
        "Formulaire de prise de rendez-vous intégré",
        "Système d'avis clients basique",
        "Automatisation de confirmation RDV (email + SMS)",
        "Hébergement et maintenance inclus"
      ],
      popular: false
    },
    {
      name: "Growth",
      icon: "🚀",
      description: "Pour accélérer l'acquisition et optimiser le suivi client",
      price: "297",
      setup: "1000",
      features: [
        "Tout le Starter",
        "Landing page complète (Hero, témoignages, avantages, FAQ, CTA)",
        "Automatisations de suivi après RDV (email + SMS sur 7 jours)",
        "Widget d'avis Google intégré au site",
        "Statistiques de performance mensuelles",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "Elite",
      icon: "🔥",
      description: "Pour dominer le marché et automatiser tout le process",
      price: "497",
      setup: "1500",
      features: [
        "Tout le Growth",
        "Tunnel de vente multi-pages (Landing + Page produit + Merci)",
        "Automatisations IA pour suivi et relance des prospects",
        "Système de reviews avancé avec génération de témoignages vidéo",
        "Optimisation SEO de la page",
        "Tableau de bord de suivi leads en temps réel",
        "Support VIP + call stratégique mensuel"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <ScrollReveal delay={200}>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="gradient-text">Nos Offres</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choisissez la solution qui correspond à vos besoins et commencez à transformer 
                vos visiteurs en clients dès aujourd'hui.
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border ${
                  offer.popular 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border-gray-700'
                } hover:border-purple-400 transition-all duration-300 hover:scale-105 flex flex-col h-full`}
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-bg px-4 py-2 rounded-full text-sm font-semibold text-white">
                      Plus Populaire
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{offer.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{offer.price}</span>
                    <span className="text-gray-300 ml-2">€/mois</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Setup : {offer.setup} €
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-white font-semibold mb-4">Inclus :</h4>
                  <ul className="space-y-3">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    offer.popular
                      ? 'gradient-bg glow-button text-white hover:scale-105'
                      : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  Choisir {offer.name}
                </button>
              </div>
            ))}
            </div>
          </ScrollReveal>

          {/* Bottom CTA Section */}
          <ScrollReveal delay={600}>
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Besoin d'une solution sur mesure ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner et créer une solution parfaitement 
              adaptée à vos besoins spécifiques.
            </p>
            <Link href="/demo" className="inline-block">
              <button className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300">
                Contactez-nous
              </button>
            </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      
      <ScrollReveal delay={800}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
