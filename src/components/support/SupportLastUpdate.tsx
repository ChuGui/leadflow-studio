import React from 'react';

interface SupportLastUpdateProps {
  date: string;
}

export default function SupportLastUpdate({ date }: SupportLastUpdateProps) {
  return (
    <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl p-4 border border-green-500/30 text-center">
      <div className="flex items-center justify-center">
        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-300 text-sm">
          Dernière mise à jour : <span className="text-green-400 font-medium">{date}</span>
        </span>
      </div>
    </div>
  );
}
