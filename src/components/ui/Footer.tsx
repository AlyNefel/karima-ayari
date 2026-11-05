'use client';

import React from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { ArrowUp, Shield } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  data: PortfolioData;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ data, lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-surface-950/80 py-12 px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl text-white font-black flex items-center justify-center text-sm shadow-md" style={{ background: 'var(--palette-primary, #8B5CF6)', boxShadow: '0 2px 10px var(--palette-glow-1)' }}>
            K
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{data.personalInfo.name[lang]}</h4>
            <p className="text-xs text-slate-400">{data.personalInfo.headline[lang]}</p>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} {data.personalInfo.name[lang]}. {t.footer.rights}
          <div className="mt-1 text-slate-600">{t.footer.designedWith}</div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[var(--palette-primary)] px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{t.footer.adminLink}</span>
          </Link>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

