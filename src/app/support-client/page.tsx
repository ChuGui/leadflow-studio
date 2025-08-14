'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SupportHero from '@/components/support/SupportHero';
import SupportSection from '@/components/support/SupportSection';
import SupportContactCard from '@/components/support/SupportContactCard';
import SupportFAQ from '@/components/support/SupportFAQ';
import SupportForm from '@/components/support/SupportForm';
import SupportLastUpdate from '@/components/support/SupportLastUpdate';
import Link from 'next/link';

export default function SupportClientPage() {
  const faqItems = [
    {
      question: "Comment suivre l'avancement de mon projet ?",
      answer: "Vous recevrez un accès à notre tableau de suivi client et serez informé à chaque étape clé par email ou téléphone."
    },
    {
      question: "Quels sont les délais moyens ?",
      answer: "Cela dépend du pack choisi et de la complexité du projet. En moyenne, un projet Starter est livré en 1 à 2 semaines."
    },
    {
      question: "Comment modifier ou annuler un rendez-vous ?",
      answer: "Utilisez le lien présent dans votre email de confirmation ou contactez-nous directement."
    },
    {
      question: "Proposez-vous un support technique après livraison ?",
      answer: "Oui, le support technique est inclus dans tous nos abonnements."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F9FAFB]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Support client - LeadFlow Studio",
            "description": "Besoin d'aide ? Notre équipe est là pour vous accompagner.",
            "url": "https://leadflow-studio.com/support-client",
            "mainEntity": {
              "@type": "Organization",
              "name": "LeadFlow Studio",
              "url": "https://leadflow-studio.com",
              "email": "TODO@leadflow-studio.com",
              "telephone": "TODO",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "TODO",
                "addressLocality": "TODO",
                "postalCode": "TODO",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "TODO",
                "contactType": "customer service",
                "availableLanguage": "French",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            }
          })
        }}
      />

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <ScrollReveal delay={0}>
          <SupportHero />
        </ScrollReveal>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          
          {/* Contact Direct Section */}
          <ScrollReveal delay={200}>
            <SupportSection id="contact-direct" title="Contact direct">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SupportContactCard
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  value="TODO@leadflow-studio.com"
                  type="email"
                />
                
                <SupportContactCard
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Téléphone"
                  value="TODO"
                  type="phone"
                />
                
                <SupportContactCard
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Adresse"
                  value="TODO - Adresse complète"
                  type="address"
                />
                
                <SupportContactCard
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Horaires"
                  value="TODO - Lun–Ven, 9h–18h, heure de Paris"
                  type="hours"
                />
              </div>
            </SupportSection>
          </ScrollReveal>

          {/* FAQ Section */}
          <ScrollReveal delay={400}>
            <SupportSection id="faq" title="FAQ — Questions fréquentes">
              <SupportFAQ items={faqItems} />
            </SupportSection>
          </ScrollReveal>

          {/* Contact Form Section */}
          <ScrollReveal delay={600}>
            <SupportSection id="contact-form" title="Formulaire de contact">
              <SupportForm />
            </SupportSection>
          </ScrollReveal>

          {/* Useful Resources Section */}
          <ScrollReveal delay={800}>
            <SupportSection id="ressources" title="Ressources utiles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  href="/mentions-legales" 
                  className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg p-4 border border-gray-600 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-purple-400 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Mentions légales</span>
                </Link>

                <Link 
                  href="/politique-de-confidentialite" 
                  className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg p-4 border border-gray-600 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-blue-400 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Politique de confidentialité</span>
                </Link>

                <Link 
                  href="/conditions-utilisation" 
                  className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg p-4 border border-gray-600 hover:border-orange-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-orange-400 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Conditions d'utilisation</span>
                </Link>

                <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-lg p-4 border border-gray-600 opacity-50">
                  <div className="text-gray-500 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-gray-500 font-medium">Base de connaissances</span>
                  <div className="text-xs text-gray-600 mt-1">(Bientôt disponible)</div>
                </div>
              </div>
            </SupportSection>
          </ScrollReveal>

          {/* Last Update */}
          <ScrollReveal delay={1000}>
            <SupportLastUpdate date="TODO (jj/mm/aaaa)" />
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
