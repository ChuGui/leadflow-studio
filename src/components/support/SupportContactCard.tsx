import React from 'react';

interface SupportContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  type?: 'email' | 'phone' | 'address' | 'hours';
}

export default function SupportContactCard({ icon, title, value, href, type }: SupportContactCardProps) {
  const getHref = () => {
    if (href) return href;
    if (type === 'email') return `mailto:${value}`;
    if (type === 'phone') return `tel:${value}`;
    return undefined;
  };

  const content = (
    <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-xl p-6 border border-green-500/30 h-full">
      <div className="flex items-start">
        <div className="text-green-400 mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white mb-2">
            {title}
          </h3>
          <div className={`text-gray-300 ${(type === 'email' || type === 'phone') ? 'hover:text-white transition-colors' : ''}`}>
            {value}
          </div>
        </div>
      </div>
    </div>
  );

  if (getHref()) {
    return (
      <a href={getHref()} className="block">
        {content}
      </a>
    );
  }

  return content;
}
