import React from 'react';

export default function StepClientSatisfait() {
  return (
    <section className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-yellow-600/20 to-purple-600/20 rounded-2xl p-8 border border-yellow-500/30">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-white font-semibold mb-4">Système d'avis automatisé</h3>
                  <div className="space-y-4">
                    {/* Avis 1 */}
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-yellow-400 text-sm">★★★★★</div>
                        <div className="text-green-400 text-xs">Nouveau</div>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">"Excellent service, très professionnel!"</p>
                      <p className="text-gray-400 text-xs">- Jean M.</p>
                    </div>
                    
                    {/* Avis 2 */}
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-yellow-400 text-sm">★★★★★</div>
                        <div className="text-blue-400 text-xs">Publié</div>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">"Résultats au-delà de mes attentes!"</p>
                      <p className="text-gray-400 text-xs">- Sophie L.</p>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">4.9</div>
                        <div className="text-gray-400 text-xs">Note moyenne</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">127</div>
                        <div className="text-gray-400 text-xs">Avis collectés</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-purple-600/10 rounded-2xl blur-xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 min-w-16 gradient-bg rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
                4. Fidéliser et transformer en ambassadeur
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nous mettons en place un système automatisé pour obtenir et afficher 
              les avis clients, transformant vos clients satisfaits en ambassadeurs.
            </p>

            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Collecte d'avis automatisée après chaque service</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Affichage automatique sur votre site web</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Suivi personnalisé et relance intelligente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
