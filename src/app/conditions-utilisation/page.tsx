'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import TermsHero from '@/components/legal/TermsHero';
import TermsSection from '@/components/legal/TermsSection';
import TermsList from '@/components/legal/TermsList';
import TermsLastUpdate from '@/components/legal/TermsLastUpdate';
import TermsSummary from '@/components/legal/TermsSummary';

export default function ConditionsUtilisation() {
  const summaryItems = [
    { id: 'definitions', title: 'Définitions' },
    { id: 'acces-site', title: 'Accès au site' },
    { id: 'compte-securite', title: 'Compte & sécurité' },
    { id: 'prise-rendez-vous', title: 'Prise de rendez-vous' },
    { id: 'offres-prix', title: 'Offres, prix & facturation' },
    { id: 'commandes-contrat', title: 'Commandes & contrat' },
    { id: 'obligations-utilisateur', title: 'Obligations de l\'utilisateur' },
    { id: 'propriete-intellectuelle', title: 'Propriété intellectuelle' },
    { id: 'donnees-personnelles', title: 'Données personnelles' },
    { id: 'liens-contenus-tiers', title: 'Liens & contenus tiers' },
    { id: 'garanties-responsabilites', title: 'Garanties & responsabilités' },
    { id: 'force-majeure', title: 'Force majeure' },
    { id: 'mediation', title: 'Médiation (B2C)' },
    { id: 'droit-applicable', title: 'Droit applicable' },
    { id: 'contact', title: 'Contact' },
    { id: 'mise-a-jour', title: 'Mise à jour' }
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["TermsOfService", "WebPage"],
            "name": "Conditions d'utilisation - LeadFlow Studio",
            "description": "Conditions générales d'utilisation du site LeadFlow Studio",
            "url": "https://leadflow-studio.com/conditions-utilisation",
            "dateModified": "TODO: 2024-XX-XX",
            "publisher": {
              "@type": "Organization",
              "name": "LeadFlow Studio",
              "url": "https://leadflow-studio.com",
              "email": "TODO: contact@leadflow-studio.com",
              "telephone": "TODO: +33X XX XX XX XX",
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
            <TermsHero />
          </ScrollReveal>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            {/* Summary Navigation */}
            <ScrollReveal delay={200}>
              <TermsSummary items={summaryItems} />
            </ScrollReveal>

            {/* Introduction */}
            <ScrollReveal delay={300}>
              <TermsSection title="Objet">
                <p>
                  Les présentes Conditions d'utilisation (ci-après "CGU") encadrent l'accès et l'usage du site LeadFlow Studio et de ses services associés (formulaires, prise de rendez-vous, contenu, ressources). En accédant au site, vous acceptez sans réserve ces CGU et vous vous engagez à les respecter.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 1. Définitions */}
            <ScrollReveal delay={400}>
              <TermsSection id="definitions" title="1) Définitions">
                <div className="space-y-3">
                  <p><strong>Site :</strong> le site web accessible à l'adresse TODO: (URL).</p>
                  <p><strong>Services :</strong> prestations proposées par LeadFlow Studio (ex. landing page, prise de rendez-vous, avis clients, automatisations).</p>
                  <p><strong>Utilisateur :</strong> toute personne naviguant sur le Site.</p>
                  <p><strong>Client :</strong> toute entité ayant conclu un contrat de prestations avec LeadFlow Studio.</p>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 2. Accès au site */}
            <ScrollReveal delay={500}>
              <TermsSection id="acces-site" title="2) Accès au site">
                <p>
                  Le Site est accessible 24h/24 et 7j/7, sauf interruption planifiée ou non liée à la maintenance, une mise à jour ou un cas de force majeure. LeadFlow Studio met en œuvre les moyens raisonnables pour assurer la disponibilité du Site sans obligation de résultat.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 3. Compte & sécurité */}
            <ScrollReveal delay={600}>
              <TermsSection id="compte-securite" title="3) Compte & sécurité (si un espace client existe)">
                <p>
                  La création d'un compte peut être requise pour certains Services. L'Utilisateur s'engage à fournir des informations exactes et à maintenir la confidentialité de ses identifiants. Toute activité réalisée via le compte est réputée effectuée par son titulaire. En cas de suspicion d'usage frauduleux, contacter TODO: email support.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 4. Prise de rendez-vous */}
            <ScrollReveal delay={700}>
              <TermsSection id="prise-rendez-vous" title="4) Prise de rendez-vous & communications">
                <p>
                  Les fonctionnalités de réservation synchronisées avec l'agenda visent à faciliter l'échange entre l'Utilisateur et LeadFlow Studio. Des emails/SMS de rappel peuvent être envoyés. L'Utilisateur peut se désinscrire des communications marketing à tout moment via le lien de désabonnement.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 5. Offres, prix & facturation */}
            <ScrollReveal delay={800}>
              <TermsSection id="offres-prix" title="5) Offres, prix & facturation">
                <p>
                  Les informations tarifaires affichées (ex. Setup, Abonnement mensuel) sont exprimées en EUR et hors taxes, sauf mention contraire. LeadFlow Studio se réserve le droit de modifier ses prix à tout moment pour l'avenir. Les conditions spécifiques (périmètre, prix, échéancier) sont précisées au devis/bon de commande accepté par le Client.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 6. Commandes & formation du contrat */}
            <ScrollReveal delay={900}>
              <TermsSection id="commandes-contrat" title="6) Commandes & formation du contrat">
                <p>
                  Le contrat est conclu à la signature du devis/BC ou à la validation électronique du récapitulatif de commande, et/ou au paiement de l'acompte le cas échéant. L'acceptation vaut reconnaissance d'avoir lu et accepté les CGU et, le cas échéant, les Conditions Particulières jointes au devis.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 7. Obligations de l'utilisateur */}
            <ScrollReveal delay={1000}>
              <TermsSection id="obligations-utilisateur" title="7) Obligations de l'utilisateur / client">
                <p>Le Client s'engage à :</p>
                <TermsList 
                  items={[
                    "fournir toutes les informations nécessaires (contenus, accès techniques, validations) dans les délais convenus ;",
                    "respecter les lois et droits des tiers (marques, droits d'auteur, données personnelles) ;",
                    "ne pas perturber le fonctionnement du Site (scripts malveillants, tentatives d'intrusion)."
                  ]}
                  className="mt-4"
                />
                <p className="mt-4">
                  En cas de manquement grave, LeadFlow Studio pourra suspendre l'accès aux Services après notification.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 8. Propriété intellectuelle */}
            <ScrollReveal delay={1100}>
              <TermsSection id="propriete-intellectuelle" title="8) Propriété intellectuelle">
                <div className="space-y-4">
                  <p>
                    Les contenus, marques, logos, visuels, maquettes et la charte graphique "Gradient Premium" sont protégés par le droit d'auteur et le droit des marques.
                  </p>
                  <p>
                    Sauf mention contraire au contrat, LeadFlow Studio conserve les droits de propriété intellectuelle sur ses développements, composants et méthodes. Une licence d'utilisation limitée, non exclusive et non transférable est concédée au Client pour les besoins de l'exploitation du livrable.
                  </p>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 9. Données personnelles */}
            <ScrollReveal delay={1200}>
              <TermsSection id="donnees-personnelles" title="9) Données personnelles (RGPD)">
                <div className="space-y-4">
                  <p>
                    Le traitement des données personnelles est détaillé dans notre{' '}
                    <Link href="/politique-de-confidentialite" className="text-purple-400 hover:text-purple-300 underline">
                      Politique de confidentialité
                    </Link>.
                  </p>
                  <p>
                    L'Utilisateur peut exercer ses droits RGPD (accès, rectification, effacement, opposition, portabilité, limitation) à TODO: email RGPD. Autorité de contrôle : CNIL (cnil.fr).
                  </p>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 10. Liens & contenus tiers */}
            <ScrollReveal delay={1300}>
              <TermsSection id="liens-contenus-tiers" title="10) Liens & contenus tiers">
                <p>
                  Le Site peut contenir des liens vers des sites tiers. LeadFlow Studio n'exerce aucun contrôle sur ces ressources et ne saurait être responsable de leur contenu, disponibilité ou sécurité.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 11. Garanties & responsabilités */}
            <ScrollReveal delay={1400}>
              <TermsSection id="garanties-responsabilites" title="11) Garanties & responsabilités">
                <div className="space-y-4">
                  <p>
                    Les Services sont fournis "en l'état". LeadFlow Studio n'accorde aucune garantie implicite de performance commerciale.
                  </p>
                  <p>
                    La responsabilité de LeadFlow Studio ne peut être engagée qu'en cas de faute prouvée et est limitée aux montants effectivement payés par le Client au titre de la période litigieuse. Sont exclus les pertes de profit, de chiffre d'affaires, données, image ou tout dommage indirect.
                  </p>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 12. Force majeure */}
            <ScrollReveal delay={1500}>
              <TermsSection id="force-majeure" title="12) Force majeure">
                <p>
                  Aucune partie ne pourra être tenue responsable d'un manquement dû à un événement de force majeure au sens de l'article 1218 du Code civil (pannes réseau/énergie, cyber-attaques massives, catastrophes naturelles, etc.).
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 13. Médiation */}
            <ScrollReveal delay={1600}>
              <TermsSection id="mediation" title="13) Médiation de la consommation (si B2C)">
                <div className="space-y-4">
                  <p>
                    Conformément aux articles L.612-1 et suivants du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur :
                  </p>
                  <div className="space-y-2">
                    <p><strong>Organisme de médiation :</strong> TODO (nom, site, adresse)</p>
                    <p><strong>Préalable :</strong> réclamation écrite auprès du service client.</p>
                    <p>
                      <strong>Plateforme RLL :</strong>{' '}
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        https://ec.europa.eu/consumers/odr/
                      </a>
                    </p>
                  </div>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 14. Droit applicable */}
            <ScrollReveal delay={1700}>
              <TermsSection id="droit-applicable" title="14) Droit applicable & juridiction">
                <p>
                  Les présentes CGU sont soumises au droit français. Tout litige relatif à leur validité, interprétation ou exécution sera soumis aux juridictions matériellement et territorialement compétentes du ressort de TODO: Ville (sauf dispositions d'ordre public contraires).
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* 15. Contact */}
            <ScrollReveal delay={1800}>
              <TermsSection id="contact" title="15) Contact">
                <div className="space-y-3">
                  <p><strong>LeadFlow Studio</strong> — TODO: forme juridique, RCS/SIREN/SIRET</p>
                  <p><strong>Adresse :</strong> TODO</p>
                  <p><strong>Email :</strong> TODO</p>
                  <p><strong>Téléphone :</strong> TODO</p>
                </div>
              </TermsSection>
            </ScrollReveal>

            {/* 16. Mise à jour */}
            <ScrollReveal delay={1900}>
              <TermsSection id="mise-a-jour" title="16) Mise à jour des CGU">
                <p>
                  LeadFlow Studio peut modifier les CGU à tout moment. La version applicable est celle en ligne à la date de consultation. Les modifications substantielles peuvent faire l'objet d'une notification.
                </p>
              </TermsSection>
            </ScrollReveal>

            {/* Last Update */}
            <ScrollReveal delay={2000}>
              <TermsLastUpdate date="TODO: jj/mm/aaaa" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2100}>
            <Footer />
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
