import React from 'react';

export default function StepProspect() {
  return (
    <section className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-2xl p-8 border border-pink-500/30">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-300 text-sm italic">"Service exceptionnel, résultats au-delà de mes attentes!"</p>
                  <p className="text-gray-400 text-xs mt-2">- Marie D., Cliente satisfaite</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Confiance</span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full">
                      <div className="w-full h-2 gradient-bg rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Engagement</span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full">
                      <div className="w-4/5 h-2 gradient-bg rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-2xl blur-xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
                2. Susciter l'intérêt
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nous optimisons vos contenus et vos preuves sociales pour convaincre 
              et engager vos visiteurs.
            </p>

            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Mise en avant des témoignages clients authentiques</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Éléments de réassurance et preuves sociales</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Appel à l'action clair et irrésistible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
