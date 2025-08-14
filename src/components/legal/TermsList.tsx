import React from 'react';

interface TermsListProps {
  items: string[];
  className?: string;
}

export default function TermsList({ items, className = "" }: TermsListProps) {
  return (
    <ul className={`list-disc list-inside space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">
          {item}
        </li>
      ))}
    </ul>
  );
}
