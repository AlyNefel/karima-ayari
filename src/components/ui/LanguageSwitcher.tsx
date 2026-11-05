'use client';

import React from 'react';
import { Language } from '@/lib/types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  compact?: boolean;
}

const languages: { code: Language; label: string; flag: string; localName: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷', localName: 'Français' },
  { code: 'en', label: 'EN', flag: '🇬🇧', localName: 'English' },
  { code: 'ar', label: 'AR', flag: '🇹🇳', localName: 'العربية' },
  { code: 'de', label: 'DE', flag: '🇩🇪', localName: 'Deutsch' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
  compact = false,
}) => {
  return (
    <div className="flex items-center gap-1 bg-surface-900/90 border border-slate-800 rounded-full p-1 shadow-inner backdrop-blur-md">
      {!compact && <Globe className="w-4 h-4 text-amber-500 ml-2 mr-1 rtl:ml-1 rtl:mr-2" />}
      {languages.map((l) => {
        const isActive = currentLang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => onLanguageChange(l.code)}
            title={l.localName}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-amber-500 text-slate-950 shadow-md font-bold scale-105'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </button>
        );
      })}
    </div>
  );
};

