'use client';
import React, { useState } from 'react';

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      alert('Veuillez remplir tous les champs obligatoires et accepter le traitement des données.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/contact-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          consent: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl p-6 sm:p-8 border border-purple-500/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nom complet <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
            placeholder="Votre nom et prénom"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="support-technique">Support technique</option>
            <option value="facturation">Facturation</option>
            <option value="projet-en-cours">Projet en cours</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Décrivez votre demande en détail..."
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 mr-3 w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
          />
          <label htmlFor="consent" className="text-sm text-gray-300">
            <span className="text-red-400">*</span> J'accepte que mes données soient utilisées pour répondre à ma demande conformément à notre{' '}
            <a href="/politique-de-confidentialite" className="text-purple-400 hover:text-purple-300 underline">
              politique de confidentialité
            </a>.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full gradient-bg glow-button px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-center">
              ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-center">
              ❌ Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
