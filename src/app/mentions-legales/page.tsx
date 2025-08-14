'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import LegalHero from '@/components/legal/LegalHero';
import LegalSection from '@/components/legal/LegalSection';
import LegalContactCard from '@/components/legal/LegalContactCard';
import LegalLastUpdate from '@/components/legal/LegalLastUpdate';

export default function MentionsLegales() {
  const summaryItems = [
    { id: 'editeur', title: 'Éditeur' },
    { id: 'hebergeur', title: 'Hébergeur' },
    { id: 'service-client', title: 'Service client' },
    { id: 'propriete-intellectuelle', title: 'Propriété intellectuelle' },
    { id: 'liens-hypertextes', title: 'Liens hypertextes' },
    { id: 'responsabilites', title: 'Responsabilités' },
    { id: 'donnees-personnelles', title: 'Données personnelles' },
    { id: 'mediation', title: 'Médiation' },
    { id: 'assurance', title: 'Assurance' },
    { id: 'droit-applicable', title: 'Droit applicable' }
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebSite", "Organization"],
            "name": "LeadFlow Studio",
            "url": "https://leadflow-studio.com",
            "description": "Système complet de génération de leads automatisé",
            "telephone": "TODO: +33X XX XX XX XX",
            "email": "TODO: contact@leadflow-studio.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "TODO: Adresse complète",
              "addressLocality": "TODO: Ville",
              "postalCode": "TODO: Code postal",
              "addressCountry": "FR"
            },
            "sameAs": [
              "https://linkedin.com/company/leadflow-studio",
              "https://twitter.com/leadflowstudio"
            ]
          })
        }}
      />

      <main className="min-h-screen bg-[#09090B] text-white">
        <Navigation />
        <div className="pt-20">
          <ScrollReveal delay={100}>
            <LegalHero />
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
              <LegalSection title="À propos de ce site">
                <p>
                  Ce site est édité par LeadFlow Studio. Les informations ci-dessous sont fournies conformément aux articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN) et aux dispositions du Code de la consommation applicables.
                </p>
              </LegalSection>
            </ScrollReveal>

            {/* 1. Éditeur du site */}
            <ScrollReveal delay={400}>
              <LegalSection id="editeur" title="1) Éditeur du site">
                <div className="space-y-3">
                  <p><strong>Dénomination sociale :</strong> LeadFlow Studio</p>
                  <p><strong>Forme juridique :</strong> TODO: (ex. SAS / SARL / EI)</p>
                  <p><strong>Capital social :</strong> TODO: (ex. 5 000 €)</p>
                  <p><strong>Siège social :</strong> TODO: (adresse complète)</p>
                  <p><strong>Immatriculation :</strong> TODO: (RCS Ville – n° RCS / SIREN / SIRET)</p>
                  <p><strong>N° TVA intracommunautaire :</strong> TODO: (ex. FRXXXXXXXXXXX)</p>
                  <p><strong>Directeur de la publication :</strong> TODO: (nom, fonction)</p>
                  <p><strong>Contact :</strong> TODO: (email pro) — TODO: (téléphone pro)</p>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 2. Hébergeur */}
            <ScrollReveal delay={500}>
              <LegalSection id="hebergeur" title="2) Hébergeur">
                <div className="space-y-3">
                  <p><strong>Hébergeur :</strong> TODO: (Raison sociale)</p>
                  <p><strong>Adresse :</strong> TODO: (adresse complète)</p>
                  <p><strong>Téléphone :</strong> TODO:</p>
                  <p><strong>Site web :</strong> TODO:</p>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 3. Service client */}
            <ScrollReveal delay={600}>
              <LegalSection id="service-client" title="3) Service client">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p><strong>Email :</strong> TODO:</p>
                    <p><strong>Horaires :</strong> TODO: (ex. Lun–Ven, 9h–18h, heure de Paris)</p>
                    <p><strong>Adresse postale :</strong> TODO:</p>
                  </div>
                  <LegalContactCard
                    title="Contactez-nous"
                    email="TODO: contact@leadflow-studio.com"
                    phone="TODO: +33X XX XX XX XX"
                    address="TODO: Adresse complète"
                    hours="TODO: Lun–Ven, 9h–18h"
                  />
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 4. Propriété intellectuelle */}
            <ScrollReveal delay={700}>
              <LegalSection id="propriete-intellectuelle" title="4) Propriété intellectuelle">
                <div className="space-y-4">
                  <p>
                    L'ensemble des contenus de ce site (textes, graphismes, vidéos, logos, icônes, mises en page, ainsi que la charte graphique « Gradient Premium ») est protégé par le droit d'auteur et/ou le droit des marques.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, adaptation, redistribution ou exploitation, totale ou partielle, sans autorisation écrite préalable de LeadFlow Studio, est interdite.
                  </p>
                  <p>
                    Les marques et logos de tiers cités restent la propriété de leurs titulaires respectifs.
                  </p>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 5. Liens hypertextes */}
            <ScrollReveal delay={800}>
              <LegalSection id="liens-hypertextes" title="5) Liens hypertextes">
                <p>
                  Les liens sortants sont fournis à titre informatif. LeadFlow Studio n'exerce aucun contrôle sur les contenus édités par des tiers et décline toute responsabilité quant à leur accessibilité, leur exactitude ou leur légalité.
                </p>
              </LegalSection>
            </ScrollReveal>

            {/* 6. Responsabilités */}
            <ScrollReveal delay={900}>
              <LegalSection id="responsabilites" title="6) Responsabilités">
                <div className="space-y-4">
                  <p>
                    LeadFlow Studio met en œuvre tous les moyens raisonnables pour assurer l'exactitude et la mise à jour des informations publiées.
                  </p>
                  <p>
                    Le site peut toutefois comporter des imprécisions ou omissions : l'utilisateur est invité à signaler toute erreur constatée.
                  </p>
                  <p>
                    L'éditeur ne saurait être tenu pour responsable des dommages directs ou indirects résultant de l'accès au site, de son utilisation ou de l'impossibilité d'y accéder (pannes, interruptions, virus, etc.).
                  </p>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 7. Données personnelles & cookies (RGPD) */}
            <ScrollReveal delay={1000}>
              <LegalSection id="donnees-personnelles" title="7) Données personnelles & cookies (RGPD)">
                <div className="space-y-4">
                  <p>
                    La gestion des données personnelles et des cookies est détaillée dans notre{' '}
                    <Link href="/politique-de-confidentialite" className="text-purple-400 hover:text-purple-300 underline">
                      Politique de confidentialité
                    </Link>
                    {' '}et notre Politique Cookies (si distincte).
                  </p>
                  <div className="space-y-3">
                    <p><strong>Responsable de traitement :</strong> LeadFlow Studio</p>
                    <p><strong>Base légale :</strong> intérêt légitime, exécution d'un contrat, consentement si requis (ex. cookies de mesure/marketing).</p>
                    <p><strong>Droits des personnes :</strong> accès, rectification, effacement, limitation, opposition, portabilité.</p>
                    <p><strong>Exercer vos droits :</strong> TODO: (email dédié RGPD) + justificatif d'identité le cas échéant.</p>
                    <p><strong>Autorité de contrôle :</strong> CNIL (cnil.fr).</p>
                    <p><strong>Registre & DPO :</strong> TODO: (indiquer si un DPO est désigné).</p>
                  </div>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 8. Médiation de la consommation */}
            <ScrollReveal delay={1100}>
              <LegalSection id="mediation" title="8) Médiation de la consommation (si B2C)">
                <div className="space-y-4">
                  <p>
                    Conformément aux articles L.612-1 et suivants du Code de la consommation, le client consommateur peut recourir gratuitement à un médiateur de la consommation.
                  </p>
                  <div className="space-y-3">
                    <p><strong>Organisme de médiation :</strong> TODO: (nom, site, adresse)</p>
                    <p><strong>Préalable :</strong> le client doit d'abord adresser une réclamation écrite au service client.</p>
                    <p>
                      <strong>Plateforme RLL :</strong>{' '}
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                  </div>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 9. Assurance & activité */}
            <ScrollReveal delay={1200}>
              <LegalSection id="assurance" title="9) Assurance & activité (si applicable)">
                <div className="space-y-3">
                  <p><strong>Assurance RC Pro :</strong> TODO: (assureur, n° police, couverture géographique)</p>
                  <p><strong>Activité réglementée :</strong> TODO: (ordre/profession/autorité, règles applicables)</p>
                </div>
              </LegalSection>
            </ScrollReveal>

            {/* 10. Droit applicable — Juridiction */}
            <ScrollReveal delay={1300}>
              <LegalSection id="droit-applicable" title="10) Droit applicable — Juridiction">
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d'accord amiable, compétence est attribuée aux tribunaux français matériellement et territorialement compétents.
                </p>
              </LegalSection>
            </ScrollReveal>

            {/* Last Update */}
            <ScrollReveal delay={1400}>
              <LegalLastUpdate date="TODO: jj/mm/aaaa" />
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
