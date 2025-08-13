import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Grâce à LeadFlow Studio, j'ai doublé mes rendez-vous en un mois !",
      author: "Julie",
      role: "Coach sportif",
      avatar: "J",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      quote: "Mon site et mon système de réservation fonctionnent tout seuls. Un vrai gain de temps.",
      author: "Marc",
      role: "Salon de coiffure",
      avatar: "M",
      gradient: "from-pink-600 to-orange-600"
    },
    {
      quote: "Plus d'avis clients en quelques semaines qu'en une année entière.",
      author: "Sophie",
      role: "Esthéticienne",
      avatar: "S",
      gradient: "from-orange-600 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Ils nous font confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur activité avec LeadFlow Studio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Quote Icon */}
              <div className="relative mb-6">
                <svg className="w-12 h-12 text-gray-600 group-hover:text-gray-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="relative text-lg text-gray-300 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="relative flex items-center">
                {/* Avatar */}
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                
                {/* Author Details */}
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="relative flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold gradient-text mb-2">
              +200%
            </div>
            <div className="text-gray-300">
              Augmentation moyenne des rendez-vous
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold gradient-text mb-2">
              95%
            </div>
            <div className="text-gray-300">
              Taux de satisfaction client
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold gradient-text mb-2">
              24h
            </div>
            <div className="text-gray-300">
              Temps moyen de mise en ligne
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Rejoignez nos clients satisfaits dès aujourd'hui
          </p>
          <button className="gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
