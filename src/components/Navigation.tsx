'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">LeadFlow Studio</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="/offres" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Nos offres
              </Link>
              <Link 
                href="/processus-complet" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Processus
              </Link>
              <Link 
                href="/demo" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/demo" 
                className="gradient-bg glow-button px-4 py-2 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Demander une démo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 z-50 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="pt-20 pb-6 px-4 backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/offres" 
                className="text-gray-300 hover:text-white transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos offres
              </Link>
              <Link 
                href="/processus-complet" 
                className="text-gray-300 hover:text-white transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Processus
              </Link>
              <Link 
                href="/demo" 
                className="text-gray-300 hover:text-white transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/demo" 
                className="gradient-bg glow-button px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
