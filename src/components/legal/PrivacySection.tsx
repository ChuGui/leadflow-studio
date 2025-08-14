import React from 'react';

interface PrivacySectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export default function PrivacySection({ id, title, children }: PrivacySectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 sm:p-8 border border-gray-700">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-6">
          {title}
        </h2>
        <div className="text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
