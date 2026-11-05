'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Sparkles, MapPin } from 'lucide-react';

interface EducationSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ data, lang }) => {
  const t = translations[lang];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diploma':
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'certification':
        return <Award className="w-5 h-5 text-emerald-400" />;
      case 'workshop':
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'diploma':
        return { label: t.education.diplomaBadge, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
      case 'certification':
        return { label: t.education.certBadge, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
      case 'academic':
        return { label: t.education.academicBadge, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' };
      case 'workshop':
      default:
        return { label: t.education.workshopBadge, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' };
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.education.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.education.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.education.map((edu, idx) => {
          const badge = getTypeBadge(edu.type);
          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-3xl bg-surface-900/60 border border-slate-800 hover:border-amber-500/40 p-6 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getTypeIcon(edu.type)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>

                <div className="text-xs font-semibold text-amber-400 mb-1">
                  {edu.period[lang]}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {edu.degree[lang]}
                </h3>

                <p className="text-xs font-semibold text-slate-300 mb-1">
                  {edu.institution[lang]}
                </p>

                {edu.location[lang] && (
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {edu.location[lang]}
                  </p>
                )}

                {edu.description && (
                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                    {edu.description[lang]}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};


