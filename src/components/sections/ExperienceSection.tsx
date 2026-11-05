'use client';

import React, { useState } from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, Check } from 'lucide-react';

interface ExperienceSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(data.experiences[0]?.id || null);
  const t = translations[lang];

  const categories = [
    { key: 'all', label: t.experience.categories.all },
    { key: 'vip_hospitality', label: t.experience.categories.vip_hospitality },
    { key: 'management', label: t.experience.categories.management },
    { key: 'medical', label: t.experience.categories.medical },
    { key: 'childcare', label: t.experience.categories.childcare },
    { key: 'culinary', label: t.experience.categories.culinary },
  ];

  const filtered = selectedCategory === 'all'
    ? data.experiences
    : data.experiences.filter((exp) => exp.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.experience.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setSelectedCategory(c.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              selectedCategory === c.key
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-surface-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-800 ltr:ml-4 rtl:mr-4 ltr:md:ml-32 rtl:md:mr-32 space-y-8">
        <AnimatePresence>
          {filtered.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative ltr:pl-8 rtl:pr-8 group"
              >
                {/* Timeline Dot */}
                <span className="absolute -top-1 ltr:-left-[9px] rtl:-right-[9px] w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:scale-125 transition-transform duration-300" />

                {/* Card Container */}
                <div className="rounded-3xl bg-surface-900/80 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-all duration-300">
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
                          {exp.company[lang]}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location[lang]}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {exp.title[lang]}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        {exp.period[lang]}
                      </span>

                      <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-amber-400' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description[lang]}
                    </p>
                  )}

                  {/* Expandable Missions & Tasks */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 pt-5 border-t border-slate-800/80 space-y-4"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        {t.experience.tasksTitle}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.tasks[lang]?.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.skillsAcquired && exp.skillsAcquired.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-slate-400">
                            {t.experience.skillsTitle}
                          </span>
                          {exp.skillsAcquired.map((sk, skIdx) => (
                            <span
                              key={skIdx}
                              className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};


