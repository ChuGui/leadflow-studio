import React from 'react';
import Link from 'next/link';

export default function Offer() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-8">
          <span className="gradient-text">Votre pack clé en main</span>
        </h2>

        {/* Section Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Nous créons pour vous un écosystème complet qui transforme les visiteurs en clients. 
          Du premier clic jusqu'à l'avis client positif, tout est pensé pour maximiser vos conversions.
        </p>

        {/* Visual Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 w-full md:w-64">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visiteur</h3>
            <p className="text-gray-400 text-sm">Arrive sur votre site</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block">
            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-2xl p-8 border border-pink-500/30 w-full md:w-64">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Prospect</h3>
            <p className="text-gray-400 text-sm">Devient intéressé</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block">
            <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl p-8 border border-orange-500/30 w-full md:w-64">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rendez-vous</h3>
            <p className="text-gray-400 text-sm">Prend rendez-vous</p>
          </div>

          {/* Arrow 3 */}
          <div className="hidden md:block">
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-br from-yellow-600/20 to-purple-600/20 rounded-2xl p-8 border border-yellow-500/30 w-full md:w-64">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Client Satisfait</h3>
            <p className="text-gray-400 text-sm">Laisse un avis positif</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Link href="/processus-complet">
            <button className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
              Découvrir le processus complet
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
