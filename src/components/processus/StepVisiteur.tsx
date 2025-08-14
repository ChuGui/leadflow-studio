import React from 'react';

export default function StepVisiteur() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
                1. Attirer l'attention
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nous créons une landing page au design premium qui attire l'œil, 
              incite à cliquer et capte du trafic qualifié.
            </p>

            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Landing page optimisée pour la conversion</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">CTA stratégiques positionnés aux bons endroits</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Suivi des campagnes et optimisation continue</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">Landing Page</div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-600 rounded w-full"></div>
                  <div className="h-3 bg-gray-600 rounded w-5/6"></div>
                  <div className="mt-4 h-8 gradient-bg rounded text-center flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">CTA Principal</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
