import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Container */}
        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 md:p-16 border border-gray-700 overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-600/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-600/10 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            {/* Title */}
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Prêt à booster</span>
              <br />
              <span className="text-white">votre activité ?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Réservez votre appel découverte et découvrez comment nous pouvons 
              transformer votre acquisition clients.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Audit gratuit</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Stratégie personnalisée</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Sans engagement</span>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="mb-8">
              <button className="gradient-bg glow-button px-12 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
                Réserver mon appel
              </button>
            </div>

            {/* Secondary Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Appel de 30 minutes
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                100% gratuit
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Résultats garantis
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Ils nous ont fait confiance :</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="bg-gray-700 rounded-lg px-6 py-3 text-gray-400 text-sm">
              Client Logo 1
            </div>
            <div className="bg-gray-700 rounded-lg px-6 py-3 text-gray-400 text-sm">
              Client Logo 2
            </div>
            <div className="bg-gray-700 rounded-lg px-6 py-3 text-gray-400 text-sm">
              Client Logo 3
            </div>
            <div className="bg-gray-700 rounded-lg px-6 py-3 text-gray-400 text-sm">
              Client Logo 4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
