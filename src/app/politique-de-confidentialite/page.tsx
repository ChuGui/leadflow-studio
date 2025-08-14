'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import PrivacyHero from '@/components/legal/PrivacyHero';
import PrivacySection from '@/components/legal/PrivacySection';
import PrivacyContactCard from '@/components/legal/PrivacyContactCard';
import PrivacyLastUpdate from '@/components/legal/PrivacyLastUpdate';

export default function PolitiqueConfidentialite() {
  const summaryItems = [
    { id: 'responsable', title: 'Responsable de traitement' },
    { id: 'donnees-collectees', title: 'Données collectées' },
    { id: 'finalites', title: 'Finalités du traitement' },
    { id: 'base-legale', title: 'Base légale' },
    { id: 'duree-conservation', title: 'Durée de conservation' },
    { id: 'partage-donnees', title: 'Partage des données' },
    { id: 'cookies', title: 'Cookies et traceurs' },
    { id: 'droits-utilisateurs', title: 'Droits des utilisateurs' },
    { id: 'securite', title: 'Sécurité' },
    { id: 'contact-reclamation', title: 'Contact & réclamation' }
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["PrivacyPolicy", "WebPage"],
            "name": "Politique de confidentialité - LeadFlow Studio",
            "description": "Politique de protection des données personnelles de LeadFlow Studio conforme au RGPD",
            "url": "https://leadflow-studio.com/politique-de-confidentialite",
            "dateModified": "TODO: 2024-XX-XX",
            "publisher": {
              "@type": "Organization",
              "name": "LeadFlow Studio",
              "url": "https://leadflow-studio.com",
              "email": "TODO: contact@leadflow-studio.com",
              "telephone": "TODO: +33X XX XX XX XX"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "LeadFlow Studio",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "TODO: Adresse complète",
                "addressLocality": "TODO: Ville",
                "postalCode": "TODO: Code postal",
                "addressCountry": "FR"
              }
            }
          })
        }}
      />

      <main className="min-h-screen bg-[#09090B] text-white">
        <Navigation />
        <div className="pt-20">
          <ScrollReveal delay={100}>
            <PrivacyHero />
          </ScrollReveal>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            {/* Summary Navigation */}
            <ScrollReveal delay={200}>
              <div className="mb-12">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-4">
                    Sommaire
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {summaryItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {index + 1}. {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Introduction */}
            <ScrollReveal delay={300}>
              <PrivacySection title="Engagement">
                <p>
                  Chez LeadFlow Studio, nous attachons une grande importance à la protection de vos données personnelles. Cette politique vous explique comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française.
                </p>
              </PrivacySection>
            </ScrollReveal>

            {/* 1. Responsable de traitement */}
            <ScrollReveal delay={400}>
              <PrivacySection id="responsable" title="1) Responsable de traitement">
                <div className="space-y-3">
                  <p><strong>Nom de l'entreprise :</strong> LeadFlow Studio</p>
                  <p><strong>Forme juridique :</strong> TODO (SAS, SARL, EI…)</p>
                  <p><strong>Siège social :</strong> TODO (adresse complète)</p>
                  <p><strong>Email de contact :</strong> TODO (email dédié RGPD)</p>
                  <p><strong>Téléphone :</strong> TODO</p>
                  <p><strong>Représentant légal :</strong> TODO (nom et fonction)</p>
                </div>
              </PrivacySection>
            </ScrollReveal>

            {/* 2. Données collectées */}
            <ScrollReveal delay={500}>
              <PrivacySection id="donnees-collectees" title="2) Données collectées">
                <p>Nous pouvons collecter :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Informations d'identification (nom, prénom, entreprise, fonction)</li>
                  <li>Coordonnées (email, téléphone, adresse)</li>
                  <li>Données de navigation (pages vues, clics, adresse IP, type de navigateur)</li>
                  <li>Données nécessaires à la prestation de nos services (prise de rendez-vous, messages envoyés via formulaire, avis clients)</li>
                </ul>
              </PrivacySection>
            </ScrollReveal>

            {/* 3. Finalités du traitement */}
            <ScrollReveal delay={600}>
              <PrivacySection id="finalites" title="3) Finalités du traitement">
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Fournir et améliorer nos services</li>
                  <li>Gérer les demandes de contact et rendez-vous</li>
                  <li>Envoyer des communications liées à nos prestations</li>
                  <li>Effectuer des analyses statistiques pour optimiser nos campagnes</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </PrivacySection>
            </ScrollReveal>

            {/* 4. Base légale */}
            <ScrollReveal delay={700}>
              <PrivacySection id="base-legale" title="4) Base légale">
                <p>Selon l'article 6 du RGPD :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Exécution d'un contrat</strong> (ex. création de votre site, suivi de projet)</li>
                  <li><strong>Consentement</strong> (ex. envoi de newsletters, cookies marketing)</li>
                  <li><strong>Intérêt légitime</strong> (ex. prévention de fraude, statistiques internes)</li>
                  <li><strong>Obligation légale</strong> (ex. facturation, comptabilité)</li>
                </ul>
              </PrivacySection>
            </ScrollReveal>

            {/* 5. Durée de conservation */}
            <ScrollReveal delay={800}>
              <PrivacySection id="duree-conservation" title="5) Durée de conservation">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Données clients :</strong> conservées pendant la durée de la relation contractuelle + 3 ans</li>
                  <li><strong>Prospects :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Cookies :</strong> durée variable selon le type (voir Politique Cookies)</li>
                  <li><strong>Obligations légales :</strong> conservation plus longue si nécessaire (ex. factures : 10 ans)</li>
                </ul>
              </PrivacySection>
            </ScrollReveal>

            {/* 6. Partage des données */}
            <ScrollReveal delay={900}>
              <PrivacySection id="partage-donnees" title="6) Partage des données">
                <p>Nous partageons vos données uniquement avec :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Prestataires techniques (hébergeur, service d'emailing, CRM)</li>
                  <li>Partenaires intervenant dans la réalisation de nos prestations</li>
                  <li>Autorités administratives ou judiciaires si requis par la loi</li>
                </ul>
                <p className="mt-4">
                  Aucun transfert hors UE n'est effectué sans garanties appropriées.
                </p>
              </PrivacySection>
            </ScrollReveal>

            {/* 7. Cookies et traceurs */}
            <ScrollReveal delay={1000}>
              <PrivacySection id="cookies" title="7) Cookies et traceurs">
                <p>Nous utilisons des cookies pour :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Assurer le bon fonctionnement du site (cookies techniques)</li>
                  <li>Mesurer l'audience (cookies analytiques)</li>
                  <li>Proposer des contenus personnalisés et publicités ciblées (cookies marketing, soumis à votre consentement)</li>
                </ul>
                <p className="mt-4">
                  Vous pouvez gérer vos préférences à tout moment via notre bandeau cookies.
                </p>
              </PrivacySection>
            </ScrollReveal>

            {/* 8. Droits des utilisateurs */}
            <ScrollReveal delay={1100}>
              <PrivacySection id="droits-utilisateurs" title="8) Droits des utilisateurs">
                <p>Conformément au RGPD, vous disposez de :</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Droit d'accès, rectification, effacement</li>
                  <li>Droit à la limitation et à l'opposition</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-4">
                  <strong>Exercice des droits :</strong> contactez-nous à TODO email RGPD avec justificatif d'identité si nécessaire.
                </p>
              </PrivacySection>
            </ScrollReveal>

            {/* 9. Sécurité */}
            <ScrollReveal delay={1200}>
              <PrivacySection id="securite" title="9) Sécurité">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données (chiffrement, accès restreints, sauvegardes).
                </p>
              </PrivacySection>
            </ScrollReveal>

            {/* 10. Contact & réclamation */}
            <ScrollReveal delay={1300}>
              <PrivacySection id="contact-reclamation" title="10) Contact & réclamation">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p>Pour toute question ou demande liée à vos données :</p>
                    <div className="space-y-2">
                      <p><strong>Email :</strong> TODO</p>
                      <p><strong>Téléphone :</strong> TODO</p>
                      <p><strong>Adresse :</strong> TODO</p>
                    </div>
                    <p className="text-sm">
                      Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la{' '}
                      <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                        CNIL (www.cnil.fr)
                      </a>.
                    </p>
                  </div>
                  <PrivacyContactCard
                    title="Protection des données"
                    description="Contactez notre équipe pour toute question relative à vos données personnelles"
                    email="TODO: rgpd@leadflow-studio.com"
                    phone="TODO: +33X XX XX XX XX"
                    address="TODO: Adresse complète"
                  />
                </div>
              </PrivacySection>
            </ScrollReveal>

            {/* Last Update */}
            <ScrollReveal delay={1400}>
              <PrivacyLastUpdate date="TODO: jj/mm/aaaa" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1500}>
            <Footer />
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
