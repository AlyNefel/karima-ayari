'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppBubbleProps {
  lang: Language;
  phone: string;
}

export const WhatsAppBubble: React.FC<WhatsAppBubbleProps> = ({ lang, phone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const t = translations[lang];

  // Clean phone number for WhatsApp link (digits only, e.g. 21652784629)
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  const handleSendMessage = () => {
    const textToSend = customMsg.trim() || t.whatsapp.presetMessage;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-surface-900 border border-slate-700 shadow-2xl overflow-hidden glass-panel"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-sm">
                    HR
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{t.whatsapp.chatHeader}</h4>
                  <p className="text-xs text-emerald-100 flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                    {t.whatsapp.chatSubheader}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-950/60 space-y-3">
              <div className="bg-surface-800/90 text-slate-200 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-sm border border-slate-700/60 shadow-sm leading-relaxed">
                {t.whatsapp.greeting}
              </div>

              {/* Quick Preset Suggestion */}
              <div
                onClick={() => setCustomMsg(t.whatsapp.presetMessage)}
                className="cursor-pointer bg-emerald-950/30 border border-emerald-700/30 text-emerald-300 text-xs p-2.5 rounded-xl hover:bg-emerald-900/40 transition-colors"
              >
                <span className="font-semibold block mb-0.5 text-emerald-400">💡 Message suggéré :</span>
                &quot;{t.whatsapp.presetMessage}&quot;
              </div>

              {/* Input & Send */}
              <div className="pt-2 flex items-center gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t.whatsapp.inputPlaceholder}
                  className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-600/30 transition-transform active:scale-95 flex items-center justify-center"
                  title={t.whatsapp.sendBtn}
                >
                  <Send className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.whatsapp.bubbleTooltip}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 border border-emerald-400/40 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
        <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-12" />
      </motion.button>
    </div>
  );
};

