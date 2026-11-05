'use client';

import React, { useState, useEffect } from 'react';
import { Language, PersonalInfo } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, FileDown, Shield } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  personalInfo: PersonalInfo;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  personalInfo,
  onOpenCvModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { href: '#skills', label: t.nav.skills },
    { href: '#languages', label: t.nav.languages },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--palette-primary, #8B5CF6), var(--palette-500, #8B5CF6))', boxShadow: '0 4px 15px var(--palette-glow-1, rgba(139,92,246,0.3))' }}>
              K
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight transition-colors" style={{ color: undefined }}>
                {personalInfo.name[lang]}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'ar' ? 'ملف مهني دولي' : lang === 'de' ? 'Internationales Profil' : 'International Profile'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[var(--palette-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />

            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0" style={{ background: 'var(--palette-primary, #8B5CF6)', boxShadow: '0 4px 12px var(--palette-glow-1, rgba(139,92,246,0.3))' }}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{t.hero.ctaCv}</span>
            </button>

            <Link
              href="/admin"
              title={t.nav.admin}
              className="p-2 rounded-full text-slate-400 hover:text-[var(--palette-primary)] hover:bg-slate-800/60 transition-colors"
            >
              <Shield className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} compact />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[var(--palette-primary)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white font-bold text-sm shadow-md" style={{ background: 'var(--palette-primary, #8B5CF6)' }}
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.ctaCv}</span>
              </button>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-[var(--palette-primary)] text-xs font-semibold"
              >
                <Shield className="w-4 h-4" />
                <span>{t.nav.admin}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

