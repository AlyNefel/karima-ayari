'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PortfolioData, Language } from '@/lib/types';
import { translations } from '@/lib/i18n/translations';
import { Printer, Download, Mail, Phone, MapPin } from 'lucide-react';

interface CanadianResumeProps {
  data: PortfolioData;
  lang: Language;
  onLanguageChange?: (lang: Language) => void;
  showControls?: boolean;
}

export const CanadianResume: React.FC<CanadianResumeProps> = ({
  data,
  lang,
  onLanguageChange,
  showControls = true,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'both' | 'p1' | 'p2'>('both');
  const t = translations[lang];

  const isRtl = lang === 'ar';

  // Section titles and static labels localized across all 3 languages
  const labels = {
    fr: {
      about: 'A propos de moi',
      softSkills: 'Compétences transverses :',
      techSkills: 'Compétences techniques :',
      education: 'FORMATION',
      experience: 'EXPERIENCES PROFESSIONNELLES ET STAGES',
      engagements: 'ENGAGEMENTS ET ATTESTATIONS PROFESSIONNELLES',
      languages: 'LANGUES',
      page1: 'Page 1 sur 2',
      page2: 'Page 2 sur 2',
      page1Footer: '1 / 2',
      page2Footer: '2 / 2',
      aboutLead: '\u2018Dot\u00e9e d\u2019un excellent relationnel, d\u2019un sens pouss\u00e9 de l\u2019organisation et d\u2019une grande capacit\u00e9 d\u2019adaptation, je suis imm\u00e9diatement disponible pour m\u2019investir pleinement au sein de votre structure.',
      softSkillsText: 'Sens de l\u2019organisation, Polyvalence, Capacit\u00e9 d\u2019adaptation, Discr\u00e9tion & D\u00e9ontologie, Esprit d\u2019\u00e9quipe, Rigueur, Communication professionnelle, Aisance relationnelle.',
      techSkillsCols: [
        ['\u2022 Word, Excel, PowerPoint', '\u2022 Outlook & Messagerie', '\u2022 Logiciel de gestion Sage', '\u2022 R\u00e9seaux sociaux & web'],
        ['\u2022 Accueil VIP & Protocole', '\u2022 Standard t\u00e9l\u00e9phonique', '\u2022 Gestion d\u2019agendas & RDV', '\u2022 Syst\u00e8me AMADEUS (GDS)'],
        ['\u2022 Secr\u00e9tariat m\u00e9dical', '\u2022 Suivi des dossiers & Archivage', '\u2022 Boulangerie & Hygi\u00e8ne HACCP', '\u2022 Animation petite enfance'],
      ],
      engagementsList: [
        { label: "Attestations d'exp\u00e9riences & Certificats : ", text: 'Disponibles en version originale pour chaque poste mentionn\u00e9.' },
        { label: 'Mobilit\u00e9 internationale : ', text: 'Passeport valide, disponibilit\u00e9 imm\u00e9diate pour opportunit\u00e9s en Europe et au Canada.' },
        { label: 'R\u00e9f\u00e9rences professionnelles : ', text: 'Fournies sur demande (contacts des employeurs et superviseurs).' },
      ],
      languagesList: [
        { name: 'Français', level: 'Bon niveau professionnel (C1)' },
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Allemand', level: 'Niveau A2 (Élémentaire)' },
        { name: 'Anglais', level: 'Niveau débutant (A1)' },
      ],
      bannerNote: 'Pour une qualité optimale du PDF : cliquez sur Imprimer → Enregistrer en PDF dans votre navigateur.',
      btnDownload: 'Télécharger PDF (2 Pages A4)',
      btnGenerating: 'Génération en cours...',
      btnPrint: 'Imprimer / Enregistrer PDF',
    },
    en: {
      about: 'About Me',
      softSkills: 'Core Competencies:',
      techSkills: 'Technical & Professional Skills:',
      education: 'EDUCATION & CERTIFICATIONS',
      experience: 'PROFESSIONAL EXPERIENCE',
      engagements: 'COMMENDATIONS & PROFESSIONAL REFERENCES',
      languages: 'LANGUAGES',
      page1: 'Page 1 of 2',
      page2: 'Page 2 of 2',
      page1Footer: '1 / 2',
      page2Footer: '2 / 2',
      aboutLead: 'Equipped with exceptional interpersonal abilities, sharp organizational acumen, and swift adaptability, I am immediately available to fully commit to the success of your organization.',
      softSkillsText: 'High Organizational Sense, Multitasking & Versatility, Rapid Adaptability, Professional Ethics & Confidentiality, Teamwork, Rigor, Professional Communication.',
      techSkillsCols: [
        ['• MS Word, Excel, PowerPoint', '• Outlook & Business Email', '• Sage ERP / Commercial Software', '• Social Media Coordination'],
        ['• VIP Lounge Protocol & Reception', '• Switchboard & Telephone Etiquette', '• Calendar & Meeting Scheduling', '• AMADEUS GDS Ticketing System'],
        ['• Medical Clinic Administration', '• Administrative Filing & Archiving', '• Artisanal Bakery & HACCP Hygiene', '• Early Childhood Education & Care'],
      ],
      engagementsList: [
        { label: 'Work Experience Credentials & Diplomas: ', text: 'Available in original verifiable formats for all positions held.' },
        { label: 'International Mobility: ', text: 'Valid passport, immediate availability for career opportunities in Europe and Canada.' },
        { label: 'Professional References: ', text: 'Provided upon request (contacts of previous supervisors and directors).' },
      ],
      languagesList: [
        { name: 'Arabic', level: 'Native proficiency' },
        { name: 'French', level: 'Full professional proficiency (C1)' },
        { name: 'German', level: 'Elementary proficiency (A2)' },
        { name: 'English', level: 'Beginner in progress (A1)' },
      ],
      bannerNote: 'For best PDF quality: click Print → Save as PDF in your browser.',
      btnDownload: 'Download PDF (2 A4 Pages)',
      btnGenerating: 'Generating...',
      btnPrint: 'Print / Save as PDF',
    },
    de: {
      about: 'Über mich',
      softSkills: 'Soziale & organisatorische Kompetenzen:',
      techSkills: 'Fachliche & technische Kenntnisse:',
      education: 'AUSBILDUNG & ZERTIFIZIERUNGEN',
      experience: 'BERUFSERFAHRUNG',
      engagements: 'REFERENZEN & PROFESSIONELLE ZEUGNISSE',
      languages: 'SPRACHKENNTNISSE',
      page1: 'Seite 1 von 2',
      page2: 'Seite 2 von 2',
      page1Footer: '1 / 2',
      page2Footer: '2 / 2',
      aboutLead: 'Ausgestattet mit ausgezeichnetem Kommunikationstalent, ausgeprägtem Organisationssinn und rascher Anpassungsfähigkeit bin ich sofort verfügbar, um mich vollständig in Ihrem Unternehmen einzubringen.',
      softSkillsText: 'Organisationstalent, Vielseitigkeit, Anpassungsfähigkeit, Diskretion & Berufsethik, Teamgeist, Präzision, professionelle Kommunikation, soziale Kompetenz.',
      techSkillsCols: [
        ['• MS Word, Excel, PowerPoint', '• Outlook & geschäftliche E-Mail', '• Sage ERP / kaufm. Software', '• Social-Media-Verwaltung'],
        ['• VIP-Empfang & Protokoll', '• Telefonzentrale & Kommunikation', '• Kalender- & Terminverwaltung', '• AMADEUS-GDS-Buchungssystem'],
        ['• Medizinisches Sekretariat', '• Dokumentenablage & Archivierung', '• Bäckerei & Lebensmittelhygiene', '• Frühkindliche Betreuung & Bildung'],
      ],
      engagementsList: [
        { label: 'Arbeitszeugnisse & Zertifikate: ', text: 'In originaler, verifizierbarer Form für alle genannten Positionen vorhanden.' },
        { label: 'Internationale Mobilität: ', text: 'Gültiger Reisepass, sofortige Verfügbarkeit für Karrieremöglichkeiten in Deutschland, Europa und Kanada.' },
        { label: 'Professionelle Referenzen: ', text: 'Auf Anfrage erhältlich (Kontaktdaten früherer Vorgesetzter und Direktoren).' },
      ],
      languagesList: [
        { name: 'Arabisch', level: 'Muttersprache (fließend)' },
        { name: 'Französisch', level: 'Fließend / verhandlungssicher (C1)' },
        { name: 'Deutsch', level: 'Grundkenntnisse (A2)' },
        { name: 'Englisch', level: 'Grundkenntnisse / Anfänger (A1)' },
      ],
      bannerNote: 'Für beste PDF-Qualität: Drucken → Als PDF speichern im Browser verwenden.',
      btnDownload: 'PDF herunterladen (2 A4-Seiten)',
      btnGenerating: 'Wird generiert...',
      btnPrint: 'Drucken / Als PDF speichern',
    },
    ar: {
      about: '\u0646\u0628\u0630\u0629 \u0639\u0646\u064a',
      softSkills: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629 :',
      techSkills: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064a\u0629 :',
      education: '\u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0623\u0643\u0627\u062f\u064a\u0645\u064a \u0648\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a',
      experience: '\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0648\u0627\u0644\u062a\u0631\u0628\u0635\u0627\u062a',
      engagements: '\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u0645\u0631\u0627\u062c\u0639 \u0627\u0644\u0645\u0647\u0646\u064a\u0629',
      languages: '\u0627\u0644\u0644\u063a\u0627\u062a \u0627\u0644\u0645\u062a\u0642\u0646\u0629',
      page1: '\u0627\u0644\u0635\u0641\u062d\u0629 1 \u0645\u0646 2',
      page2: '\u0627\u0644\u0635\u0641\u062d\u0629 2 \u0645\u0646 2',
      page1Footer: '\u0661 / \u0662',
      page2Footer: '\u0662 / \u0662',
      aboutLead: '\u0623\u062a\u0645\u062a\u0639 \u0628\u0645\u0647\u0627\u0631\u0627\u062a \u062a\u0648\u0627\u0635\u0644 \u0631\u0641\u064a\u0639\u0629\u060c \u0648\u062d\u0633 \u062a\u0646\u0638\u064a\u0645\u064a \u0639\u0627\u0644\u064d\u060c \u0648\u0642\u062f\u0631\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u062a\u0643\u064a\u0641 \u0627\u0644\u0633\u0631\u064a\u0639\u060c \u0645\u0639 \u062c\u0627\u0647\u0632\u064a\u0629 \u062a\u0627\u0645\u0629 \u0648\u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0648\u0627\u0644\u0639\u0645\u0644 \u0628\u0643\u0644 \u062a\u0641\u0627\u0646\u064d \u0648\u0625\u062e\u0644\u0627\u0635 \u0641\u064a \u0645\u0624\u0633\u0633\u062a\u0643\u0645 \u0627\u0644\u0645\u0648\u0642\u0631\u0629.',
      softSkillsText: '\u0627\u0644\u062f\u0642\u0629 \u0641\u064a \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u060c \u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0648\u0627\u0644\u0642\u062f\u0631\u0629 \u0627\u0644\u0641\u0627\u0626\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u062a\u0643\u064a\u0641\u060c \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645 \u0628\u0623\u062e\u0644\u0627\u0642\u064a\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u0629 \u0648\u0627\u0644\u0633\u0631\u064a\u0629 \u0627\u0644\u062a\u0627\u0645\u0629\u060c \u0631\u0648\u062d \u0627\u0644\u0641\u0631\u064a\u0642 \u0648\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0627\u0644\u0628\u0646\u0651\u0627\u0621\u060c \u0627\u0644\u0644\u0628\u0627\u0642\u0629 \u0648\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0647\u0646\u064a \u0627\u0644\u0631\u0627\u0642\u064a\u060c \u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637 \u0648\u0627\u0644\u062a\u062d\u0644\u064a \u0628\u0631\u0648\u062d \u0627\u0644\u0645\u0628\u0627\u062f\u0631\u0629 \u0648\u062a\u062d\u0645\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0629.',
      techSkillsCols: [
        ['\u2022 \u0645\u0627\u064a\u0643\u0631\u0648\u0633\u0648\u0641\u062a \u0648\u0648\u0631\u062f\u060c \u0625\u0643\u0633\u064a\u0644\u060c \u0628\u0627\u0648\u0631\u0628\u0648\u064a\u0646\u062a', '\u2022 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0623\u0648\u062a\u0644\u0648\u0643 \u0648\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0639\u0645\u0644', '\u2022 \u0628\u0631\u0645\u062c\u064a\u0629 \u0627\u0644\u062a\u0635\u0631\u0641 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u0633\u064a\u062c (Sage)', '\u2022 \u0625\u062f\u0627\u0631\u0629 \u0634\u0628\u0643\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a'],
        ['\u2022 \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0643\u0628\u0627\u0631 \u0627\u0644\u0634\u062e\u0635\u064a\u0627\u062a VIP \u0648\u0627\u0644\u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644', '\u2022 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0628\u062f\u0627\u0644\u0629 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0647\u0627\u062a\u0641\u064a\u0629', '\u2022 \u062a\u0646\u0638\u064a\u0645 \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0648\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644', '\u2022 \u0646\u0638\u0627\u0645 \u0627\u0644\u062d\u062c\u0632 \u0627\u0644\u0639\u0627\u0644\u0645\u064a \u0623\u0645\u0627\u062f\u064a\u0648\u0633 (AMADEUS)'],
        ['\u2022 \u0627\u0644\u0633\u0643\u0631\u062a\u0627\u0631\u064a\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 \u0648\u062d\u0641\u0638 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u0631\u0636\u0649', '\u2022 \u0627\u0644\u0623\u0631\u0634\u0641\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0648\u0627\u0644\u0645\u0631\u0627\u0633\u0644\u0627\u062a \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629', '\u2022 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u0639\u062c\u0646\u0627\u062a \u0648\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 (HACCP)', '\u2022 \u0627\u0644\u062a\u0646\u0634\u064a\u0637 \u0627\u0644\u062a\u0631\u0628\u0648\u064a \u0648\u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a \u0644\u0644\u0637\u0641\u0648\u0644\u0629'],
      ],
      engagementsList: [
        { label: '\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0645\u0648\u062b\u0642\u0629 : ', text: '\u0645\u062a\u0648\u0641\u0631\u0629 \u0628\u0646\u0633\u062e\u0647\u0627 \u0627\u0644\u0623\u0635\u0644\u064a\u0629 \u0648\u0627\u0644\u0645\u0648\u062b\u0642\u0629 \u0644\u0643\u0627\u0641\u0629 \u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629.' },
        { label: '\u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629 \u0648\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0644\u062f\u0648\u0644\u064a : ', text: '\u062c\u0648\u0627\u0632 \u0633\u0641\u0631 \u0633\u0627\u0631\u064a \u0627\u0644\u0645\u0641\u0639\u0648\u0644\u060c \u0648\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u062a\u0627\u0645 \u0648\u0641\u0648\u0631\u064a \u0644\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0648\u0627\u0644\u0639\u0645\u0644 \u0641\u064a \u0623\u0648\u0631\u0648\u0628\u0627 \u0648\u0643\u0646\u062f\u0627.' },
        { label: '\u0627\u0644\u0645\u0631\u0627\u062c\u0639 \u0648\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u062a\u0632\u0643\u064a\u0629 \u0627\u0644\u0645\u0647\u0646\u064a\u0629 : ', text: '\u062a\u064f\u0642\u062f\u0651\u0645 \u0641\u0648\u0631\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628 (\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0645\u0634\u0631\u0641\u064a\u0646 \u0648\u0627\u0644\u0645\u062f\u064a\u0631\u064a\u0646 \u0627\u0644\u0633\u0627\u0628\u0642\u064a\u0646).' },
      ],
      languagesList: [
        { name: 'العربية', level: 'اللغة الأم (طلاقة تامة)' },
        { name: 'الفرنسية', level: 'مستوى متقدم بطلاقة مهنية ممتازة (C1)' },
        { name: 'الألمانية', level: 'المستوى الأساسي (A2)' },
        { name: 'الإنجليزية', level: 'المستوى الابتدائي قيد التطوير (A1)' },
      ],
      bannerNote: 'للحصول على أفضل جودة PDF: انقر على طباعة ← حفظ كـ PDF في متصفحك.',
      btnDownload: 'تحميل ملف PDF (صفحتان A4)',
      btnGenerating: 'جاري الإعداد...',
      btnPrint: 'طباعة / حفظ كـ PDF',
    },
  }[lang];

  // Page 1: first 2 recent experiences; Page 2: remaining
  const page1Experiences = data.experiences.slice(0, 2);
  const page2Experiences = data.experiences.slice(2);

  // ─── PDF DOWNLOAD via print window ─────────────────────────────────────────
  // Opens a styled print-ready HTML page in a new window, then triggers
  // window.print(). Browser renders Arabic/RTL perfectly — no canvas glitch.
  const handleDownloadPdf = () => {
    setDownloading(true);

    const fontFamily = isRtl
      ? "'Cairo', 'Tahoma', 'Segoe UI', Arial, sans-serif"
      : "'Calibri', Arial, Helvetica, sans-serif";
    const direction = isRtl ? 'rtl' : 'ltr';
    const textAlign = isRtl ? 'right' : 'left';

    const name = data.personalInfo.name[lang] ?? 'Hajer Riahi';
    const phone = data.personalInfo.phone ?? '+216 52 784 629';
    const email = data.personalInfo.email ?? 'contact.riahihajer@gmail.com';
    const residence = data.personalInfo.residence?.[lang] ?? 'Tunisie';
    const bio = (data.personalInfo.fullBio?.[lang] || data.personalInfo.bio?.[lang]) ?? '';

    const educationHtml = data.education.map(edu => `
      <div style="margin-bottom:6px;line-height:1.3;">
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:8.5pt;">
          <span>${edu.degree[lang] ?? ''}</span>
          <span dir="ltr">[${edu.period[lang] ?? ''}]</span>
        </div>
        <div style="color:#374151;font-weight:600;">${edu.institution[lang] ?? ''} - ${edu.location[lang] ?? ''}</div>
        ${edu.description ? `<div style="color:#6B7280;font-style:italic;font-size:8pt;">(${edu.description[lang] ?? ''})</div>` : ''}
      </div>
    `).join('');

    const buildExpHtml = (exps: typeof data.experiences) => exps.map(exp => `
      <div style="margin-bottom:10px;line-height:1.3;font-size:8.5pt;">
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:9pt;color:#111827;">
          <span>${exp.title[lang] ?? ''}</span>
          <span dir="ltr" style="white-space:nowrap;">[${exp.period[lang] ?? ''}]</span>
        </div>
        <div style="color:#374151;font-weight:600;margin-bottom:3px;">&bull; ${exp.company[lang] ?? ''} - ${exp.location[lang] ?? ''}</div>
        <ul style="margin:0;padding-${isRtl ? 'right' : 'left'}:8px;color:#1F2937;list-style:none;">
          ${(exp.tasks[lang] ?? []).map(task => `<li style="margin-bottom:2px;">&bull; ${task}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const techColsHtml = labels.techSkillsCols.map(col => `
      <div>
        <ul style="margin:0;padding:0;list-style:none;">
          ${col.map(item => `<li style="margin-bottom:2px;">${item}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const engagementsHtml = labels.engagementsList.map(item => `
      <div style="margin-bottom:4px;line-height:1.3;">
        <span style="font-weight:700;">${item.label}</span><span>${item.text}</span>
      </div>
    `).join('');

    const languagesHtml = labels.languagesList.map(item => `
      <div style="margin-bottom:3px;line-height:1.4;">
        <span style="font-weight:700;">&bull; ${item.name} : </span><span>${item.level}</span>
      </div>
    `).join('');

    const sT = (txt: string) => `<h2 style="font-size:11pt;font-weight:700;text-transform:uppercase;border-bottom:1.5px solid #111827;padding-bottom:2px;margin:0 0 6px 0;letter-spacing:${isRtl ? '0' : '0.04em'};">${txt}</h2>`;

    const htmlContent = `<!DOCTYPE html>
<html lang="${lang}" dir="${direction}">
<head>
<meta charset="UTF-8"/>
<title>CV_Hajer_Riahi_${lang.toUpperCase()}</title>
${isRtl ? `<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet"/>` : ''}
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{font-family:${fontFamily};font-size:10pt;color:#111827;background:#fff;direction:${direction};text-align:${textAlign};}
  .page{width:210mm;min-height:297mm;max-height:297mm;padding:13mm 16mm 10mm 16mm;box-sizing:border-box;overflow:hidden;page-break-after:always;position:relative;background:#fff;}
  .page:last-child{page-break-after:auto;}
  h1{font-size:20pt;font-weight:900;letter-spacing:normal;line-height:1.2;margin-bottom:4px;}
  .footer{position:absolute;bottom:8px;${isRtl ? 'left' : 'right'}:16mm;font-size:7.5pt;color:#9CA3AF;}
  section{margin-bottom:10px;}
  @media print{
    html,body{margin:0;padding:0;}
    .page{margin:0;box-shadow:none;border:none;page-break-after:always;}
    .page:last-child{page-break-after:auto;}
    @page{size:A4 portrait;margin:0;}
  }
</style>
</head>
<body>
<div class="page">
  <header style="text-align:center;margin-bottom:12px;">
    <h1 style="font-family:${fontFamily};">${name}</h1>
    <div style="font-size:10pt;font-weight:700;direction:ltr;unicode-bidi:isolate;margin-bottom:2px;">${phone}</div>
    <div style="font-size:9.5pt;color:#1D4ED8;font-weight:600;margin-bottom:2px;">${email}</div>
    <div style="font-size:9pt;color:#1D4ED8;text-decoration:underline;margin-bottom:2px;">https://portfolio-hajer.vercel.app</div>
    <div style="font-size:9.5pt;color:#374151;font-weight:500;">${residence}</div>
  </header>
  <section>${sT(labels.about)}<div style="font-size:9pt;line-height:1.4;text-align:justify;"><p style="margin-bottom:4px;">${bio}</p><p style="font-style:italic;color:#4B5563;">${labels.aboutLead}</p></div></section>
  <section style="margin-bottom:8px;"><div style="font-size:9pt;line-height:1.4;"><span style="font-weight:700;">${labels.softSkills} </span><span>${labels.softSkillsText}</span></div></section>
  <section>
    <div style="font-weight:700;font-size:9pt;margin-bottom:4px;">${labels.techSkills}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:8.5pt;">${techColsHtml}</div>
  </section>
  <section>${sT(labels.education)}<div style="font-size:8.5pt;">${educationHtml}</div></section>
  <section style="margin-bottom:0;">${sT(labels.experience)}<div style="font-size:8.5pt;">${buildExpHtml(page1Experiences)}</div></section>
  <div class="footer">${labels.page1Footer}</div>
</div>
<div class="page">
  <section><div style="font-size:8.5pt;">${buildExpHtml(page2Experiences)}</div></section>
  <section>${sT(labels.engagements)}<div style="font-size:8.5pt;">${engagementsHtml}</div></section>
  <section>${sT(labels.languages)}<div style="font-size:8.5pt;color:#111827;">${languagesHtml}</div></section>
  <div class="footer">${labels.page2Footer}</div>
</div>
</body>
</html>`;

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
      alert(lang === 'ar'
        ? 'الرجاء السماح بالنوافذ المنبثقة لتحميل PDF'
        : lang === 'fr'
          ? 'Veuillez autoriser les fenêtres popup pour télécharger le PDF'
          : lang === 'de'
            ? 'Bitte Popups im Browser erlauben, um das PDF herunterzuladen'
            : 'Please allow popups to download PDF');
      setDownloading(false);
      return;
    }

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    const triggerPrint = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.onafterprint = () => printWindow.close();
        setDownloading(false);
      }, isRtl ? 2000 : 800);
    };

    if ((printWindow.document as any).fonts?.ready) {
      (printWindow.document as any).fonts.ready.then(triggerPrint);
    } else {
      triggerPrint();
    }
  };

  const handlePrint = () => window.print();

  const cvPageStyle: React.CSSProperties = {
    width: '210mm',
    height: '297mm',
    padding: '13mm 16mm 10mm 16mm',
    boxSizing: 'border-box',
    fontFamily: isRtl
      ? "'Cairo', 'Tahoma', 'Segoe UI', Arial, sans-serif"
      : "'Calibri', Arial, Helvetica, sans-serif",
    fontSize: '10pt',
    lineHeight: '1.3',
    letterSpacing: '0px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  };

  const sectionHeaderStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '11pt',
    textTransform: 'uppercase',
    borderBottom: '1.5px solid #111827',
    paddingBottom: '2px',
    marginBottom: '6px',
    letterSpacing: isRtl ? '0px' : '0.04em',
  };

  return (
    <div className="w-full flex flex-col items-center">
      {showControls && (
        <div className="no-print w-full max-w-4xl mb-6 p-4 rounded-2xl bg-surface-900 border border-slate-700 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              {(t as any).canadianCv?.selectLang ?? 'Langue / Language / اللغة'}
            </span>
            {onLanguageChange && (
              <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700">
                {(['fr', 'en', 'ar', 'de'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => onLanguageChange(l)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      lang === l ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex sm:hidden items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
            {(['both', 'p1', 'p2'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 text-xs rounded-md font-semibold ${activeTab === tab ? 'bg-amber-500 text-slate-950' : 'text-slate-300'}`}
              >
                {tab === 'both' ? (lang === 'ar' ? 'الكل' : lang === 'de' ? 'Alle' : 'Tout') : tab === 'p1' ? (lang === 'ar' ? 'ص١' : lang === 'de' ? 'S.1' : 'P.1') : (lang === 'ar' ? 'ص٢' : lang === 'de' ? 'S.2' : 'P.2')}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>{labels.btnPrint}</span>
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? labels.btnGenerating : labels.btnDownload}</span>
            </button>
          </div>
        </div>
      )}

      <div className="no-print mb-4 text-center px-4">
        <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/30">
          💡 {labels.bannerNote}
        </span>
      </div>

      <div className="w-full overflow-x-auto flex flex-col items-center gap-8 pb-12">

        {/* PAGE 1 */}
        {(activeTab === 'both' || activeTab === 'p1') && (
          <div className="flex flex-col items-center">
            <div className="no-print text-xs font-bold text-amber-400 mb-2 self-start">📄 {labels.page1}</div>
            <div
              id="cv-page-1"
              dir={isRtl ? 'rtl' : 'ltr'}
              className="cv-a4-page shadow-2xl border border-slate-300 text-slate-950"
              style={cvPageStyle}
            >
              <header className="text-center mb-3">
                <h1 style={{ fontSize: '20pt', fontWeight: 900, letterSpacing: 'normal', fontFamily: isRtl ? "'Cairo','Tahoma','Segoe UI',Arial,sans-serif" : 'inherit', lineHeight: '1.25', marginBottom: '4px' }}>
                  {data.personalInfo.name[lang]}
                </h1>
                <div style={{ fontSize: '10pt', fontWeight: 700, direction: 'ltr', unicodeBidi: 'isolate', marginBottom: '2px' }}>
                  {data.personalInfo.phone}
                </div>
                <div style={{ fontSize: '9.5pt', color: '#1D4ED8', fontWeight: 600, marginBottom: '2px' }}>
                  <a href={`mailto:${data.personalInfo.email}`}>{data.personalInfo.email}</a>
                </div>
                <div style={{ fontSize: '9pt', color: '#1D4ED8', textDecoration: 'underline', marginBottom: '2px' }}>
                  https://portfolio-hajer.vercel.app
                </div>
                <div style={{ fontSize: '9.5pt', color: '#374151', fontWeight: 500 }}>
                  {data.personalInfo.residence?.[lang]}
                </div>
              </header>

              <section className="mb-3">
                <h2 style={sectionHeaderStyle}>{labels.about}</h2>
                <div style={{ fontSize: '9pt', color: '#111827', lineHeight: '1.4', textAlign: 'justify' }}>
                  <p style={{ marginBottom: '4px' }}>{data.personalInfo.fullBio?.[lang] || data.personalInfo.bio?.[lang]}</p>
                  <p style={{ fontStyle: 'italic', color: '#4B5563' }}>{labels.aboutLead}</p>
                </div>
              </section>

              <section className="mb-2.5">
                <div style={{ fontSize: '9pt', lineHeight: '1.4' }}>
                  <span style={{ fontWeight: 700 }}>{labels.softSkills} </span>
                  <span style={{ color: '#111827' }}>{labels.softSkillsText}</span>
                </div>
              </section>

              <section className="mb-3">
                <div style={{ fontWeight: 700, fontSize: '9pt', marginBottom: '4px' }}>{labels.techSkills}</div>
                <div className="grid grid-cols-3 gap-2" style={{ fontSize: '8.5pt', color: '#111827' }}>
                  {labels.techSkillsCols.map((col, cIdx) => (
                    <div key={cIdx}>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {col.map((item, itemIdx) => (
                          <li key={itemIdx} style={{ marginBottom: '2px' }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-3">
                <h2 style={sectionHeaderStyle}>{labels.education}</h2>
                <div style={{ fontSize: '8.5pt' }}>
                  {data.education.map((edu) => (
                    <div key={edu.id} style={{ marginBottom: '6px', lineHeight: '1.3' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                        <span>{edu.degree[lang]}</span>
                        <span dir="ltr" style={{ whiteSpace: 'nowrap' }}>[{edu.period[lang]}]</span>
                      </div>
                      <div style={{ color: '#374151', fontWeight: 600 }}>{edu.institution[lang]} - {edu.location[lang]}</div>
                      {edu.description && (
                        <div style={{ color: '#6B7280', fontStyle: 'italic', fontSize: '8pt' }}>({edu.description[lang]})</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-2">
                <h2 style={sectionHeaderStyle}>{labels.experience}</h2>
                <div style={{ fontSize: '8.5pt' }}>
                  {page1Experiences.map((exp) => (
                    <div key={exp.id} style={{ marginBottom: '8px', lineHeight: '1.3' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9pt' }}>
                        <span>{exp.title[lang]}</span>
                        <span dir="ltr" style={{ whiteSpace: 'nowrap' }}>[{exp.period[lang]}]</span>
                      </div>
                      <div style={{ color: '#374151', fontWeight: 600, marginBottom: '2px' }}>• {exp.company[lang]} - {exp.location[lang]}</div>
                      <ul style={{ listStyle: 'none', padding: 0, paddingInlineStart: '8px', color: '#1F2937' }}>
                        {exp.tasks[lang]?.map((task, tIdx) => (
                          <li key={tIdx} style={{ marginBottom: '1px' }}>• {task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <div style={{ position: 'absolute', bottom: '8px', [isRtl ? 'left' : 'right']: '16mm', fontSize: '7.5pt', color: '#9CA3AF' }}>
                {labels.page1Footer}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2 */}
        {(activeTab === 'both' || activeTab === 'p2') && (
          <div className="flex flex-col items-center">
            <div className="no-print text-xs font-bold text-amber-400 mb-2 self-start">📄 {labels.page2}</div>
            <div
              id="cv-page-2"
              dir={isRtl ? 'rtl' : 'ltr'}
              className="cv-a4-page cv-page-2 shadow-2xl border border-slate-300 text-slate-950"
              style={cvPageStyle}
            >
              <section className="mb-4">
                <div style={{ fontSize: '8.5pt' }}>
                  {page2Experiences.map((exp) => (
                    <div key={exp.id} style={{ marginBottom: '10px', lineHeight: '1.3' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '9pt' }}>
                        <span>{exp.title[lang]}</span>
                        <span dir="ltr" style={{ whiteSpace: 'nowrap' }}>[{exp.period[lang]}]</span>
                      </div>
                      <div style={{ color: '#374151', fontWeight: 600, marginBottom: '3px' }}>• {exp.company[lang]} - {exp.location[lang]}</div>
                      <ul style={{ listStyle: 'none', padding: 0, paddingInlineStart: '8px', color: '#1F2937' }}>
                        {exp.tasks[lang]?.map((task, tIdx) => (
                          <li key={tIdx} style={{ marginBottom: '2px' }}>• {task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-4">
                <h2 style={sectionHeaderStyle}>{labels.engagements}</h2>
                <div style={{ fontSize: '8.5pt', color: '#111827' }}>
                  {labels.engagementsList.map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '4px', lineHeight: '1.3' }}>
                      <span style={{ fontWeight: 700 }}>{item.label}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-4">
                <h2 style={sectionHeaderStyle}>{labels.languages}</h2>
                <div style={{ fontSize: '8.5pt', color: '#111827' }}>
                  {labels.languagesList.map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '3px', lineHeight: '1.4' }}>
                      <span style={{ fontWeight: 700 }}>• {item.name} : </span>
                      <span>{item.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div style={{ position: 'absolute', bottom: '8px', [isRtl ? 'left' : 'right']: '16mm', fontSize: '7.5pt', color: '#9CA3AF' }}>
                {labels.page2Footer}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
