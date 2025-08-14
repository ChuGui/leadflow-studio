'use client';

import React, { useState } from 'react';

export default function StepRendezVous() {
  const [selectedDay, setSelectedDay] = useState(15);
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white">
                3. Faciliter l'action
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Un système de prise de rendez-vous intégré et automatisé qui réduit 
              les no-shows et maximise vos conversions.
            </p>

            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Réservation en ligne simple et intuitive</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Rappels automatiques par email et SMS</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">Préqualification automatique des prospects</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-2xl p-8 border border-orange-500/30">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-white font-semibold mb-4">Calendrier de réservation</h3>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                      <div key={index} className="text-gray-400 text-xs text-center p-1">{day}</div>
                    ))}
                    {Array.from({length: 35}, (_, i) => {
                      const dayNumber = i > 6 && i < 28 ? i - 6 : null;
                      const isClickable = dayNumber !== null;
                      const isSelected = dayNumber === selectedDay;
                      
                      return (
                        <div 
                          key={i} 
                          className={`h-8 rounded text-xs flex items-center justify-center transition-all duration-200 ${
                            isSelected
                              ? 'gradient-bg text-white' 
                              : isClickable
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer hover:scale-105' 
                                : 'text-gray-600'
                          }`}
                          onClick={() => isClickable && setSelectedDay(dayNumber)}
                        >
                          {dayNumber || ''}
                        </div>
                      );
                    })}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                      <span className="text-gray-300 text-sm">09:00 - 10:00</span>
                      <span className="text-green-400 text-xs">Disponible</span>
                    </div>
                    <div className="flex items-center justify-between p-2 gradient-bg rounded">
                      <span className="text-white text-sm">14:00 - 15:00</span>
                      <span className="text-white text-xs">Sélectionné</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                      <span className="text-gray-300 text-sm">16:00 - 17:00</span>
                      <span className="text-green-400 text-xs">Disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
