import React from 'react';

interface SummaryItem {
  id: string;
  title: string;
}

interface TermsSummaryProps {
  items: SummaryItem[];
}

export default function TermsSummary({ items }: TermsSummaryProps) {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-4">
          Sommaire
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, index) => (
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
  );
}
