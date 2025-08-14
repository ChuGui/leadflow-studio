import React from 'react';

interface LegalLastUpdateProps {
  date: string;
}

export default function LegalLastUpdate({ date }: LegalLastUpdateProps) {
  return (
    <div className="text-center py-8">
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 inline-block">
        <div className="flex items-center justify-center">
          <svg className="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-300 font-medium">
            Dernière mise à jour : <span className="text-white">{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
