'use client';

import React, { useState, useEffect } from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { initialPortfolioData } from '@/lib/initialData';
import { Navbar } from '@/components/ui/Navbar';
import { ParallaxBackground } from '@/components/ui/ParallaxBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { LanguagesSection } from '@/components/sections/LanguagesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/ui/Footer';
import { WhatsAppBubble } from '@/components/ui/WhatsAppBubble';
import { CanadianCvModal } from '@/components/sections/CanadianCvModal';

export default function HomePage() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [lang, setLang] = useState<Language>('fr');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Fetch live updates from API if available
  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then((json) => {
        if (json.data) {
          setData(json.data);
        }
      })
      .catch((err) => console.log('Loaded with built-in data:', err));
  }, []);

  // Update HTML document direction and language attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Update Color Palette dynamically from Admin Settings and persist in localStorage
  useEffect(() => {
    const palette = data.themeSettings?.palette || 'amethyst-violet';
    document.documentElement.setAttribute('data-palette', palette);
    try {
      localStorage.setItem('portfolio_palette', palette);
    } catch (e) {}
  }, [data.themeSettings?.palette]);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen relative overflow-x-hidden ${
        lang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Dynamic Parallax Background with Ambient Glow */}
      <ParallaxBackground />

      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        personalInfo={data.personalInfo}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        <HeroSection
          data={data}
          lang={lang}
          onOpenCvModal={() => setCvModalOpen(true)}
        />

        <AboutSection
          data={data}
          lang={lang}
        />

        <ExperienceSection
          data={data}
          lang={lang}
        />

        <EducationSection
          data={data}
          lang={lang}
        />

        <SkillsSection
          data={data}
          lang={lang}
        />

        <LanguagesSection
          data={data}
          lang={lang}
        />

        <ContactSection
          data={data}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        data={data}
        lang={lang}
      />

      {/* Floating Interactive WhatsApp Bubble */}
      <WhatsAppBubble
        lang={lang}
        phone={data.personalInfo.whatsapp || data.personalInfo.phone}
      />

      {/* Canadian CV Modal (Download & Print in 3 languages) */}
      <CanadianCvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        data={data}
        initialLang={lang}
      />
    </div>
  );
}

