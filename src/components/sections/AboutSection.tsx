'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';
import { MapPin, Globe, Phone, Mail, Clock, Compass, Target, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data, lang }) => {
  const t = translations[lang];
  const { personalInfo, canadianCv } = data;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.about.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.about.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Quick Facts / Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-3xl bg-surface-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6"
        >
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 flex items-center justify-center font-black text-slate-950 text-2xl shadow-xl shadow-amber-500/20">
              HR
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{personalInfo.name[lang]}</h3>
              <p className="text-xs text-amber-400 font-semibold mt-0.5">
                {personalInfo.nationality[lang]}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {personalInfo.residence[lang]}
              </p>
            </div>
          </div>

          {/* Quick specs */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 text-amber-400 shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">{t.about.targetRole}</span>
                <span className="font-semibold text-white">{personalInfo.targetRole[lang]}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 text-amber-400 shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">{t.about.targetLocation}</span>
                <span className="font-semibold text-white">{personalInfo.targetLocation[lang]}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 text-emerald-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">{t.about.availability}</span>
                <span className="font-semibold text-emerald-300">{personalInfo.availability[lang]}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 text-amber-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">{t.about.email}</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 text-amber-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-xs">{t.about.phone}</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="font-semibold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Strengths */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="rounded-3xl bg-surface-900/40 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              {personalInfo.tagline[lang]}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
              {personalInfo.fullBio[lang]}
            </p>
          </div>

          {/* Key Strengths list */}
          <div className="rounded-3xl bg-surface-900/40 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              {t.about.keyStrengthsTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {canadianCv.keyStrengths[lang]?.map((strength, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


