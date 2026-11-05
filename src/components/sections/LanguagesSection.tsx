'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

interface LanguagesSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ data, lang }) => {
  const t = translations[lang];

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.languages.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.languages.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.languages.map((l, index) => (
          <motion.div
            key={l.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-3xl bg-surface-900/60 border border-slate-800 hover:border-amber-500/40 p-6 backdrop-blur-md shadow-xl text-center group transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
              {l.language[lang]}
            </h3>

            <p className="text-xs text-amber-300 font-medium mb-3">
              {l.level[lang]}
            </p>

            {l.cefrCode && (
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 mb-4">
                {l.cefrCode}
              </span>
            )}

            {/* Proficiency Meter */}
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.proficiencyScore}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


