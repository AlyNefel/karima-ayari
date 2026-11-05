'use client';

import React, { useState } from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, lang }) => {
  const t = translations[lang];
  const { personalInfo } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.contact.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-3xl bg-surface-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {t.contact.directContactTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {personalInfo.tagline[lang]}
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* WhatsApp direct card */}
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(t.whatsapp.presetMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 hover:bg-emerald-900/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-bold block">WhatsApp Direct</span>
                  <span className="font-semibold text-white">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Email direct */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">{t.about.email}</span>
                  <span className="font-semibold text-white group-hover:text-amber-400 transition-colors break-all">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone direct */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">{t.about.phone}</span>
                  <span className="font-semibold text-white">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">{t.about.residence}</span>
                  <span className="font-semibold text-slate-200">{personalInfo.residence[lang]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400">
            {personalInfo.availability[lang]}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl bg-surface-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Merci pour votre message !</h3>
              <p className="text-slate-300 text-sm max-w-md">
                {t.contact.successMsg}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t.contact.errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-surface-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-surface-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-surface-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-surface-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
                <span>{status === 'loading' ? t.contact.sendingBtn : t.contact.sendBtn}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};


