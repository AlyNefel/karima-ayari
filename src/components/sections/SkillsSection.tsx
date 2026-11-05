'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';
import { Laptop, Award, FileText, Users, Star } from 'lucide-react';

interface SkillsSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data, lang }) => {
  const t = translations[lang];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-amber-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-emerald-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          {t.skills.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.skills.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="rounded-3xl bg-surface-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {category.name[lang]}
              </h3>
            </div>

            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      {skill.name[lang]}
                      {skill.isKeySkill && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          {t.skills.keySkillBadge}
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-bold text-amber-400">{skill.level}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


