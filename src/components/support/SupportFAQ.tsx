'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SupportFAQProps {
  items: FAQItem[];
}

export default function SupportFAQ({ items }: SupportFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl border border-gray-600">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-300 rounded-xl"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white pr-4">
              {item.question}
            </h3>
            <svg 
              className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
