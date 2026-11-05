'use client';

import React, { useState } from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { CanadianResume } from '../cv/CanadianResume';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CanadianCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  initialLang: Language;
}

export const CanadianCvModal: React.FC<CanadianCvModalProps> = ({
  isOpen,
  onClose,
  data,
  initialLang,
}) => {
  const [cvLang, setCvLang] = useState<Language>(initialLang);

  React.useEffect(() => {
    setCvLang(initialLang);
  }, [initialLang]);

  const t = translations[cvLang];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-surface-950 border border-slate-700 rounded-3xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Modal Header */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-surface-900/60">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {t.canadianCv.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`/cv/${cvLang}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.canadianCv.openFullPage}</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={t.canadianCv.closeModal}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-1 bg-surface-950/40">
            <CanadianResume
              data={data}
              lang={cvLang}
              onLanguageChange={setCvLang}
              showControls={true}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};


