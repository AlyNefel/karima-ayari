import React from 'react';
import { getPortfolioData } from '@/lib/portfolioService';
import { Language } from '@/lib/types';
import { CanadianResume } from '@/components/cv/CanadianResume';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }, { lang: 'ar' }, { lang: 'de' }];
}

export default async function CvPage({ params }: Props) {
  const { lang } = params;

  if (lang !== 'fr' && lang !== 'en' && lang !== 'ar' && lang !== 'de') {
    notFound();
  }

  const { data } = await getPortfolioData();
  const currentLang = lang as Language;

  const backLabels = {
    fr: 'Retour au Portfolio',
    en: 'Back to Portfolio',
    ar: 'العودة إلى الموقع',
    de: 'Zurück zum Portfolio',
  };

  const headerNotes = {
    fr: 'Format Canadien Officiel (Exactement 2 Pages A4 • FR)',
    en: 'Official Canadian Format (Exactly 2 A4 Pages • EN)',
    ar: 'النموذج الكندي المعتمد (صفحتان A4 بالضبط • AR)',
    de: 'Offizielles kanadisches Format (Exakt 2 A4-Seiten • DE)',
  };

  return (
    <div
      data-palette={data.themeSettings?.palette || 'amber-gold'}
      className="min-h-screen bg-slate-950 py-8 px-2 sm:px-6"
    >
      <div className="max-w-4xl mx-auto mb-6 no-print flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-400 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{backLabels[currentLang]}</span>
        </Link>
        <div className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
          {headerNotes[currentLang]}
        </div>
      </div>

      <CanadianResume
        data={data}
        lang={currentLang}
        showControls={true}
      />
    </div>
  );
}

