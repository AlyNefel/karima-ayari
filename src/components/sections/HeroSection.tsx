'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';
import { FileDown, Mail, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  data: PortfolioData;
  lang: Language;
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  lang,
  onOpenCvModal,
}) => {
  const t = translations[lang];
  const { personalInfo } = data;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(t.whatsapp.presetMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--palette-500)]/10 border border-[var(--palette-500)]/30 text-[var(--palette-400)] text-xs sm:text-sm font-semibold mb-8 shadow-inner shadow-[var(--palette-primary)]/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--palette-primary)' }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'var(--palette-primary)' }} />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[var(--palette-primary)]" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* Candidate Name with luxury gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {personalInfo.name[lang]}
          </span>
        </motion.h1>

        {/* Headline & Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-bold text-[var(--palette-primary)] max-w-3xl mb-4 leading-relaxed"
        >
          {personalInfo.headline[lang]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal"
        >
          {personalInfo.bio[lang]}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {/* Canadian CV Download Trigger */}
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-300" style={{ background: 'linear-gradient(135deg, var(--palette-primary), var(--palette-600))', boxShadow: '0 8px 25px var(--palette-glow-1, rgba(139,92,246,0.3))' }}
          >
            <FileDown className="w-4 h-4" />
            <span>{t.hero.ctaCv}</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 shadow-lg hover:border-slate-500 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 text-[var(--palette-primary)]" />
            <span>{t.hero.ctaContact}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={openWhatsApp}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-700/20 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.hero.ctaWhatsapp}</span>
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalInfo.stats.map((st) => (
            <div
              key={st.id}
              className="p-5 rounded-2xl bg-surface-900/60 border border-slate-800/80 backdrop-blur-md hover:border-[var(--palette-500)]/40 transition-all duration-300 text-center group"
            >
              <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[var(--palette-primary)] transition-colors">
                {st.value}
                {st.suffix && <span className="text-[var(--palette-primary)] text-2xl">{st.suffix}</span>}
              </div>
              <div className="text-xs sm:text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                {st.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

