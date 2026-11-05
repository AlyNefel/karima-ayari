'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PortfolioData, Language, PaletteId } from '@/lib/types';
import { DESIGNER_PALETTES } from '@/lib/themePalettes';
import {
  Save,
  LogOut,
  Database,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Globe2,
  FileText,
  Palette,
  Check,
  Sparkles,
  Plus,
  Trash2,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CalendarClock,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  GripVertical,
  ToggleLeft,
  ToggleRight,
  Settings2,
  ListChecks,
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [dbSource, setDbSource] = useState<'mongodb' | 'memory'>('memory');
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education' | 'skills' | 'languages' | 'cv' | 'palette' | 'booking'>('profile');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);
  const [editLang, setEditLang] = useState<Language>('fr');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Verify admin session
    fetch('/api/admin/check')
      .then((res) => {
        if (!res.ok) {
          router.push('/admin/login');
        }
      })
      .catch(() => router.push('/admin/login'));

    // 2. Fetch current portfolio data
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setDbSource(res.source || 'memory');
          if (res.data.themeSettings?.palette) {
            document.documentElement.setAttribute('data-palette', res.data.themeSettings.palette);
            try {
              localStorage.setItem('portfolio_palette', res.data.themeSettings.palette);
            } catch (e) {}
          }
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    setSaveSuccess(false);

    // Immediately cache selected palette in localStorage
    if (data.themeSettings?.palette) {
      try {
        localStorage.setItem('portfolio_palette', data.themeSettings.palette);
        document.documentElement.setAttribute('data-palette', data.themeSettings.palette);
      } catch (e) {}
    }

    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSaveSuccess(true);
        if (result.source) setDbSource(result.source);
        setTimeout(() => setSaveSuccess(false), 4000);
      }
    } catch (err) {
      console.error('Error saving data:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-surface-950 flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full border-t-transparent animate-spin" style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--palette-primary, #8B5CF6) transparent transparent transparent' }} />
          <span className="text-sm font-semibold text-slate-300">Chargement de l’espace d’administration...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-950 text-slate-100 pb-24">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-surface-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="w-10 h-10 rounded-xl text-white font-black flex items-center justify-center text-xl shadow-md" style={{ background: 'var(--palette-primary, #8B5CF6)', boxShadow: '0 4px 15px var(--palette-glow-1, rgba(139,92,246,0.25))' }}
            >
              K
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white">Administration du Portfolio</h1>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full border font-semibold" style={{ background: 'var(--palette-glow-1, rgba(139,92,246,0.1))', color: 'var(--palette-300, #c4b5fd)', borderColor: 'var(--palette-border, rgba(139,92,246,0.3))' }}>
                  Mode Éditeur
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Gérez dynamiquement le contenu, les compétences et les CV en 3 langues
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Database indicator */}
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                dbSource === 'mongodb'
                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                  : 'bg-amber-950/40 border-amber-800 text-amber-300'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>
                {dbSource === 'mongodb'
                  ? 'MongoDB Connecté & Actif'
                  : 'Stockage Local / Mémoire (Prêt MongoDB)'}
              </span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Voir le site en direct</span>
            </Link>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 transition-colors"
              title="Déconnexion"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Success Alert Banner */}
        {saveSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 text-sm flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="font-semibold">Modifications enregistrées avec succès dans la base de données !</span>
            </div>
            <span className="text-xs text-emerald-400">Tous les affichages et CV sont synchronisés.</span>
          </div>
        )}

        {/* Global Save Action Bar */}
        <div className="mb-8 p-4 rounded-2xl bg-surface-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Langue d’édition des champs :</span>
            {(['fr', 'en', 'ar', 'de'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setEditLang(l)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  editLang === l
                    ? 'text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {l.toUpperCase()} {l === 'fr' ? '🇫🇷' : l === 'en' ? '🇬🇧' : l === 'ar' ? '🇹🇳' : '🇩🇪'}
              </button>
            ))}
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-bold text-sm shadow-xl transition-all disabled:opacity-50" style={{ background: 'var(--palette-primary, #8B5CF6)', boxShadow: '0 4px 20px var(--palette-glow-1, rgba(139,92,246,0.3))' }}
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Enregistrement...' : 'Enregistrer toutes les modifications'}</span>
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          {[
            { id: 'profile', label: 'Profil & Coordonnées', icon: User },
            { id: 'experience', label: 'Expériences (5)', icon: Briefcase },
            { id: 'education', label: 'Formations (5)', icon: GraduationCap },
            { id: 'skills', label: 'Compétences & Outils', icon: Wrench },
            { id: 'languages', label: 'Langues (4)', icon: Globe2 },
            { id: 'cv', label: 'CV Canadien (2 Pages)', icon: FileText },
            { id: 'palette', label: 'Palette & Design', icon: Palette },
            { id: 'booking', label: 'Étapes de Réservation', icon: CalendarClock },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 border shadow-md' + ' text-[var(--palette-primary)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PROFILE & CONTACTS */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <User className="w-4 h-4" style={{ color: 'var(--palette-primary, #8B5CF6)' }} />
                <span>Informations Générales ({editLang.toUpperCase()})</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Nom complet</label>
                  <input
                    type="text"
                    value={data.personalInfo.name[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          name: { ...data.personalInfo.name, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Titre Professionnel</label>
                  <input
                    type="text"
                    value={data.personalInfo.headline[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          headline: { ...data.personalInfo.headline, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Slogan / Devise</label>
                  <input
                    type="text"
                    value={data.personalInfo.tagline[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          tagline: { ...data.personalInfo.tagline, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Résidence</label>
                  <input
                    type="text"
                    value={data.personalInfo.residence[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          residence: { ...data.personalInfo.residence, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Nationalité</label>
                  <input
                    type="text"
                    value={data.personalInfo.nationality[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          nationality: { ...data.personalInfo.nationality, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Disponibilité</label>
                  <input
                    type="text"
                    value={data.personalInfo.availability[editLang]}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          availability: { ...data.personalInfo.availability, [editLang]: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Courte Bio (Hero)</label>
                <textarea
                  rows={2}
                  value={data.personalInfo.bio[editLang]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      personalInfo: {
                        ...data.personalInfo,
                        bio: { ...data.personalInfo.bio, [editLang]: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Profil Complet (Présentation)</label>
                <textarea
                  rows={4}
                  value={data.personalInfo.fullBio[editLang]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      personalInfo: {
                        ...data.personalInfo,
                        fullBio: { ...data.personalInfo.fullBio, [editLang]: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                />
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Coordonnées de Contact Direct</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={data.personalInfo.email}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: { ...data.personalInfo, email: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Téléphone</label>
                  <input
                    type="text"
                    value={data.personalInfo.phone}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: { ...data.personalInfo, phone: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Numéro WhatsApp (sans +)</label>
                  <input
                    type="text"
                    value={data.personalInfo.whatsapp}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: { ...data.personalInfo, whatsapp: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EXPERIENCES */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">
                Liste des Expériences Professionnelles ({editLang.toUpperCase()})
              </h3>
              <button
                onClick={() => {
                  const newExp = {
                    id: `exp-${Date.now()}`,
                    title: { fr: 'Nouveau Poste', en: 'New Role', ar: 'وظيفة جديدة', de: 'Neue Stelle' },
                    company: { fr: 'Entreprise', en: 'Company', ar: 'الشركة', de: 'Unternehmen' },
                    location: { fr: 'Tunisie', en: 'Tunisia', ar: 'تونس', de: 'Tunesien' },
                    period: { fr: '2026', en: '2026', ar: '2026', de: '2026' },
                    order: data.experiences.length + 1,
                    category: 'management' as const,
                    tasks: {
                      fr: ['Nouvelle mission...'],
                      en: ['New task...'],
                      ar: ['مهمة جديدة...'],
                      de: ['Neue Aufgabe...'],
                    },
                  };
                  setData({ ...data, experiences: [newExp, ...data.experiences] });
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter une expérience</span>
              </button>
            </div>

            <div className="space-y-6">
              {data.experiences.map((exp, idx) => (
                <div key={exp.id} className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold" style={{ color: 'var(--palette-primary)' }}>Expérience #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const updated = data.experiences.filter((e) => e.id !== exp.id);
                        setData({ ...data, experiences: updated });
                      }}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Supprimer</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Poste / Titre</label>
                      <input
                        type="text"
                        value={exp.title[editLang]}
                        onChange={(e) => {
                          const updated = [...data.experiences];
                          updated[idx].title[editLang] = e.target.value;
                          setData({ ...data, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Entreprise / Organisme</label>
                      <input
                        type="text"
                        value={exp.company[editLang]}
                        onChange={(e) => {
                          const updated = [...data.experiences];
                          updated[idx].company[editLang] = e.target.value;
                          setData({ ...data, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Période (ex: 2018 – 2023)</label>
                      <input
                        type="text"
                        value={exp.period[editLang]}
                        onChange={(e) => {
                          const updated = [...data.experiences];
                          updated[idx].period[editLang] = e.target.value;
                          setData({ ...data, experiences: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Missions & Tâches (une par ligne)
                    </label>
                    <textarea
                      rows={4}
                      value={exp.tasks[editLang]?.join('\n') || ''}
                      onChange={(e) => {
                        const lines = e.target.value.split('\n');
                        const updated = [...data.experiences];
                        updated[idx].tasks[editLang] = lines;
                        setData({ ...data, experiences: updated });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs font-mono leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATION */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">
                Formations & Certifications ({editLang.toUpperCase()})
              </h3>
              <button
                onClick={() => {
                  const newEdu = {
                    id: `edu-${Date.now()}`,
                    degree: { fr: 'Nouvelle Formation', en: 'New Degree', ar: 'شهادة جديدة', de: 'Neue Ausbildung' },
                    institution: { fr: 'Institution', en: 'Institution', ar: 'المؤسسة', de: 'Institution' },
                    location: { fr: 'Tunis', en: 'Tunis', ar: 'تونس', de: 'Tunis' },
                    period: { fr: '2026', en: '2026', ar: '2026', de: '2026' },
                    year: '2026',
                    order: data.education.length + 1,
                    type: 'certification' as const,
                  };
                  setData({ ...data, education: [newEdu, ...data.education] });
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter une formation</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.education.map((edu, idx) => (
                <div key={edu.id} className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold" style={{ color: 'var(--palette-primary)' }}>Formation #{idx + 1}</span>
                    <button
                      onClick={() => {
                        const updated = data.education.filter((e) => e.id !== edu.id);
                        setData({ ...data, education: updated });
                      }}
                      className="text-xs text-rose-400 hover:text-rose-300"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Intitulé du Diplôme / Formation</label>
                    <input
                      type="text"
                      value={edu.degree[editLang]}
                      onChange={(e) => {
                        const updated = [...data.education];
                        updated[idx].degree[editLang] = e.target.value;
                        setData({ ...data, education: updated });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Établissement</label>
                      <input
                        type="text"
                        value={edu.institution[editLang]}
                        onChange={(e) => {
                          const updated = [...data.education];
                          updated[idx].institution[editLang] = e.target.value;
                          setData({ ...data, education: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Année / Période</label>
                      <input
                        type="text"
                        value={edu.period[editLang]}
                        onChange={(e) => {
                          const updated = [...data.education];
                          updated[idx].period[editLang] = e.target.value;
                          setData({ ...data, education: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SKILLS */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white">
              Édition des Compétences & Niveaux ({editLang.toUpperCase()})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skillCategories.map((cat, catIdx) => (
                <div key={cat.id} className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
                  <h4 className="text-sm font-bold border-b border-slate-800 pb-2" style={{ color: 'var(--palette-primary)' }}>
                    {cat.name[editLang]}
                  </h4>

                  <div className="space-y-3">
                    {cat.skills.map((skill, skIdx) => (
                      <div key={skill.id} className="p-3 rounded-xl bg-surface-950 border border-slate-800/80 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            value={skill.name[editLang]}
                            onChange={(e) => {
                              const updated = [...data.skillCategories];
                              updated[catIdx].skills[skIdx].name[editLang] = e.target.value;
                              setData({ ...data, skillCategories: updated });
                            }}
                            className="flex-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                          />
                          <span className="text-xs font-bold w-10 text-right" style={{ color: 'var(--palette-primary)' }}>
                            {skill.level}%
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={skill.level}
                            onChange={(e) => {
                              const updated = [...data.skillCategories];
                              updated[catIdx].skills[skIdx].level = parseInt(e.target.value, 10);
                              setData({ ...data, skillCategories: updated });
                            }}
                            className="flex-1 cursor-pointer" style={{ accentColor: 'var(--palette-primary, #8B5CF6)' }}
                          />
                          <label className="text-[11px] text-slate-400 flex items-center gap-1 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={skill.isKeySkill || false}
                              onChange={(e) => {
                                const updated = [...data.skillCategories];
                                updated[catIdx].skills[skIdx].isKeySkill = e.target.checked;
                                setData({ ...data, skillCategories: updated });
                              }}
                              className="rounded" style={{ accentColor: 'var(--palette-primary, #8B5CF6)' }}
                            />
                            <span>Clé</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: LANGUAGES */}
        {activeTab === 'languages' && (
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white">
              Édition des Langues ({editLang.toUpperCase()})
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.languages.map((l, lIdx) => (
                <div key={l.id} className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Nom de la langue</label>
                    <input
                      type="text"
                      value={l.language[editLang]}
                      onChange={(e) => {
                        const updated = [...data.languages];
                        updated[lIdx].language[editLang] = e.target.value;
                        setData({ ...data, languages: updated });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Niveau / Mention</label>
                    <input
                      type="text"
                      value={l.level[editLang]}
                      onChange={(e) => {
                        const updated = [...data.languages];
                        updated[lIdx].level[editLang] = e.target.value;
                        setData({ ...data, languages: updated });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Code CECRL (ex: C1, A2)</label>
                      <input
                        type="text"
                        value={l.cefrCode || ''}
                        onChange={(e) => {
                          const updated = [...data.languages];
                          updated[lIdx].cefrCode = e.target.value;
                          setData({ ...data, languages: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Score Maîtrise ({l.proficiencyScore}%)</label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={l.proficiencyScore}
                        onChange={(e) => {
                          const updated = [...data.languages];
                          updated[lIdx].proficiencyScore = parseInt(e.target.value, 10);
                          setData({ ...data, languages: updated });
                        }}
                        className="w-full mt-2 cursor-pointer" style={{ accentColor: 'var(--palette-primary, #8B5CF6)' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: CANADIAN CV CUSTOMIZATION */}
        {activeTab === 'cv' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Personnalisation du CV Canadien ({editLang.toUpperCase()})
                  </h3>
                  <p className="text-xs text-slate-400">
                    Modifiez le titre cible, le sommaire exécutif et les points forts du modèle canadien
                  </p>
                </div>
                <Link
                  href={`/cv/${editLang}`}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Aperçu PDF / Plein écran</span>
                </Link>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  En-tête / Titre Ciblé du CV Canadien
                </label>
                <input
                  type="text"
                  value={data.canadianCv.headline[editLang]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      canadianCv: {
                        ...data.canadianCv,
                        headline: { ...data.canadianCv.headline, [editLang]: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Sommaire Professionnel (Profil Exécutif Canadien)
                </label>
                <textarea
                  rows={4}
                  value={data.canadianCv.summary[editLang]}
                  onChange={(e) =>
                    setData({
                      ...data,
                      canadianCv: {
                        ...data.canadianCv,
                        summary: { ...data.canadianCv.summary, [editLang]: e.target.value },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Points Forts & Compétences Clés Clôturées (Une ligne par puce)
                </label>
                <textarea
                  rows={5}
                  value={data.canadianCv.keyStrengths[editLang]?.join('\n') || ''}
                  onChange={(e) =>
                    setData({
                      ...data,
                      canadianCv: {
                        ...data.canadianCv,
                        keyStrengths: {
                          ...data.canadianCv.keyStrengths,
                          [editLang]: e.target.value.split('\n'),
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-xs font-mono leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  Mention de bas de page (ex: Références fournies sur demande)
                </label>
                <input
                  type="text"
                  value={data.canadianCv.customFooter?.[editLang] || ''}
                  onChange={(e) =>
                    setData({
                      ...data,
                      canadianCv: {
                        ...data.canadianCv,
                        customFooter: {
                          ...data.canadianCv.customFooter,
                          [editLang]: e.target.value,
                        },
                      },
                    })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: DESIGNER PALETTES */}
        {activeTab === 'palette' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Palette className="w-5 h-5" style={{ color: 'var(--palette-primary)' }} />
                    <span>Sélection des Palettes Créateur (3 Choix de Designer)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Choisissez l’ambiance chromatique du portfolio et des reflets de lumière. Chaque palette a été composée par un designer senior pour valoriser les différents aspects de votre profil.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full border font-semibold" style={{ background: 'var(--palette-glow-1)', borderColor: 'var(--palette-border)', color: 'var(--palette-300)' }}>
                  Palette active : {data.themeSettings?.palette || 'amethyst-violet'}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                {DESIGNER_PALETTES.map((palette) => {
                  const isSelected = (data.themeSettings?.palette || 'amethyst-violet') === palette.id;
                  return (
                    <div
                      key={palette.id}
                      onClick={() => {
                        setData({
                          ...data,
                          themeSettings: { palette: palette.id },
                        });
                        document.documentElement.setAttribute('data-palette', palette.id);
                        try {
                          localStorage.setItem('portfolio_palette', palette.id);
                        } catch (e) {}
                      }}
                      className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border relative ${
                        isSelected
                          ? 'bg-slate-900/90 shadow-2xl scale-[1.02] ring-2 ring-[var(--palette-primary)]/40 border-[var(--palette-primary)] bord00/40'
                          : 'bg-surface-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                      }`}
                    >
                      {/* Active badge */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-black shadow-md" style={{ background: 'var(--palette-primary)' }}>
                          <Check className="w-3.5 h-3.5" />
                          <span>ACTIVE</span>
                        </div>
                      )}

                      <div>
                        {/* Color Swatches */}
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white/20 shadow-md"
                            style={{ backgroundColor: palette.colors.primary }}
                            title="Couleur Principale"
                          />
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white/20 shadow-md"
                            style={{ backgroundColor: palette.colors.accent }}
                            title="Couleur d'Accent"
                          />
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white/20 shadow-md"
                            style={{ backgroundColor: palette.colors.surface }}
                            title="Fond de Carte"
                          />
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white/20 shadow-md"
                            style={{ backgroundColor: palette.colors.background }}
                            title="Arrière-plan"
                          />
                        </div>

                        <h4 className="text-base font-bold text-white mb-1">
                          {palette.name[editLang]}
                        </h4>
                        <div
                          className="text-xs font-semibold mb-3"
                          style={{ color: palette.colors.primary }}
                        >
                          {palette.tagline[editLang]}
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {palette.description[editLang]}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80">
                        <div className="text-[11px] text-slate-400 italic mb-4">
                          <span className="font-semibold text-slate-300 block not-italic">Note du Designer :</span>
                          {palette.designerNote[editLang]}
                        </div>

                        <button
                          type="button"
                          className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                            isSelected
                              ? 'text-white shadow-md'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                          }`}
                        >
                          {isSelected ? '✓ Palette Actuellement Activée' : 'Choisir cette Palette'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB: BOOKING STEPS MANAGEMENT */}
        {activeTab === 'booking' && (
          <div className="space-y-6">
            {/* Booking Settings Panel */}
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Settings2 className="w-4 h-4" style={{ color: 'var(--palette-primary)' }} />
                <span>Paramètres Globaux de Réservation</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Email de Notification</label>
                  <input
                    type="email"
                    value={data.bookingSettings?.notificationEmail || ''}
                    onChange={(e) => setData({ ...data, bookingSettings: { ...(data.bookingSettings || { enabled: true, whatsappRecipient: '' }), notificationEmail: e.target.value } })}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                    placeholder="email@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">WhatsApp Destinataire (numéro international)</label>
                  <input
                    type="text"
                    value={data.bookingSettings?.whatsappRecipient || ''}
                    onChange={(e) => setData({ ...data, bookingSettings: { ...(data.bookingSettings || { enabled: true, notificationEmail: '' }), whatsappRecipient: e.target.value } })}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                    placeholder="21650000000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Message de Confirmation Auto ({editLang.toUpperCase()})</label>
                  <textarea
                    value={data.bookingSettings?.autoConfirmMessage?.[editLang] || ''}
                    onChange={(e) => setData({ ...data, bookingSettings: { ...(data.bookingSettings || { enabled: true, notificationEmail: '', whatsappRecipient: '' }), autoConfirmMessage: { ...(data.bookingSettings?.autoConfirmMessage || { fr: '', en: '', ar: '', de: '' }), [editLang]: e.target.value } } })}
                    rows={2}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                    placeholder="Message envoyé automatiquement après soumission..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setData({ ...data, bookingSettings: { ...(data.bookingSettings || { notificationEmail: '', whatsappRecipient: '' }), enabled: !data.bookingSettings?.enabled } })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${data.bookingSettings?.enabled ? 'bg-emerald-900/40 border border-emerald-700 text-emerald-300' : 'bg-slate-800 border border-slate-700 text-slate-400'}`}
                >
                  {data.bookingSettings?.enabled ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                  {data.bookingSettings?.enabled ? 'Réservation en Ligne Activée' : 'Réservation Désactivée'}
                </button>
              </div>
            </div>

            {/* Booking Steps List */}
            <div className="p-6 rounded-3xl bg-surface-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ListChecks className="w-4 h-4" style={{ color: 'var(--palette-primary)' }} />
                  <span>Étapes du Parcours de Réservation ({data.bookingSteps?.length || 0} étapes)</span>
                </h3>
                <button
                  onClick={() => {
                    const newStep = {
                      id: 'step-' + Date.now(),
                      order: (data.bookingSteps?.length || 0) + 1,
                      title: { fr: 'Nouvelle Étape', en: 'New Step', ar: 'خطوة جديدة', de: 'Neuer Schritt' },
                      subtitle: { fr: '', en: '', ar: '', de: '' },
                      description: { fr: '', en: '', ar: '', de: '' },
                      estimatedDuration: { fr: '', en: '', ar: '', de: '' },
                      badgeText: { fr: 'Étape ' + ((data.bookingSteps?.length || 0) + 1), en: 'Step ' + ((data.bookingSteps?.length || 0) + 1), ar: 'المرحلة ' + ((data.bookingSteps?.length || 0) + 1), de: 'Schritt ' + ((data.bookingSteps?.length || 0) + 1) },
                      icon: 'star',
                      isActive: true,
                      fields: [],
                    };
                    setData({ ...data, bookingSteps: [...(data.bookingSteps || []), newStep] });
                    setExpandedStepId(newStep.id);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold transition-all"
                  style={{ background: 'var(--palette-primary, #8B5CF6)', boxShadow: '0 2px 10px var(--palette-glow-1)' }}
                >
                  <Plus className="w-4 h-4" />
                  Ajouter une Étape
                </button>
              </div>

              {/* Steps List */}
              <div className="space-y-3">
                {(data.bookingSteps || []).sort((a, b) => a.order - b.order).map((step, stepIdx) => (
                  <div key={step.id} className={`rounded-2xl border transition-all ${step.isActive ? 'border-slate-700 bg-slate-900/60' : 'border-slate-800 bg-slate-900/30 opacity-60'}`}>
                    {/* Step Header */}
                    <div className="flex items-center gap-3 p-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black text-white shrink-0" style={{ background: 'var(--palette-primary, #8B5CF6)' }}>
                        {step.order}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm truncate">{step.title[editLang] || step.title.fr}</div>
                        <div className="text-xs text-slate-400 truncate">{step.fields.length} champ(s) · {step.isActive ? 'Actif' : 'Désactivé'}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {/* Toggle active */}
                        <button
                          onClick={() => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, isActive: !s.isActive } : s) })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                          title={step.isActive ? 'Désactiver' : 'Activer'}
                        >
                          {step.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                        {/* Move up */}
                        <button
                          onClick={() => {
                            if (stepIdx === 0) return;
                            const steps = [...(data.bookingSteps || [])].sort((a,b) => a.order - b.order);
                            const temp = steps[stepIdx].order;
                            steps[stepIdx].order = steps[stepIdx-1].order;
                            steps[stepIdx-1].order = temp;
                            setData({ ...data, bookingSteps: steps });
                          }}
                          disabled={stepIdx === 0}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-30"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        {/* Move down */}
                        <button
                          onClick={() => {
                            const steps = [...(data.bookingSteps || [])].sort((a,b) => a.order - b.order);
                            if (stepIdx === steps.length - 1) return;
                            const temp = steps[stepIdx].order;
                            steps[stepIdx].order = steps[stepIdx+1].order;
                            steps[stepIdx+1].order = temp;
                            setData({ ...data, bookingSteps: steps });
                          }}
                          disabled={stepIdx === (data.bookingSteps?.length || 0) - 1}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-30"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Delete */}
                        <button
                          onClick={() => setData({ ...data, bookingSteps: data.bookingSteps!.filter(s => s.id !== step.id) })}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        {/* Expand/Collapse */}
                        <button
                          onClick={() => setExpandedStepId(expandedStepId === step.id ? null : step.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {expandedStepId === step.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Step Editor (Expanded) */}
                    {expandedStepId === step.id && (
                      <div className="px-4 pb-4 border-t border-slate-800 pt-4 space-y-5">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Titre de l'Étape ({editLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={step.title[editLang]}
                              onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, title: { ...s.title, [editLang]: e.target.value } } : s) })}
                              className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Sous-titre ({editLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={step.subtitle[editLang]}
                              onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, subtitle: { ...s.subtitle, [editLang]: e.target.value } } : s) })}
                              className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Description ({editLang.toUpperCase()})</label>
                            <textarea
                              value={step.description[editLang]}
                              onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, description: { ...s.description, [editLang]: e.target.value } } : s) })}
                              rows={2}
                              className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-1">Durée Estimée ({editLang.toUpperCase()})</label>
                            <input
                              type="text"
                              value={step.estimatedDuration?.[editLang] || ''}
                              onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, estimatedDuration: { ...(s.estimatedDuration || { fr: '', en: '', ar: '', de: '' }), [editLang]: e.target.value } } : s) })}
                              className="w-full px-3 py-2.5 rounded-xl bg-surface-950 border border-slate-800 text-white text-sm"
                              placeholder="ex: 30 à 45 min"
                            />
                          </div>
                        </div>

                        {/* Fields Sub-Manager */}
                        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                              <ListChecks className="w-3.5 h-3.5 text-slate-400" />
                              Champs de ce Formulaire ({step.fields.length})
                            </h4>
                            <button
                              onClick={() => {
                                const newField = {
                                  id: 'field-' + Date.now(),
                                  name: 'newField_' + Date.now(),
                                  label: { fr: 'Nouveau Champ', en: 'New Field', ar: 'حقل جديد', de: 'Neues Feld' },
                                  type: 'text' as const,
                                  required: false,
                                  placeholder: { fr: '', en: '', ar: '', de: '' },
                                };
                                setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: [...s.fields, newField] } : s) });
                              }}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all"
                              style={{ background: 'var(--palette-primary, #8B5CF6)' }}
                            >
                              <Plus className="w-3.5 h-3.5" />
                              Ajouter un Champ
                            </button>
                          </div>

                          {step.fields.length === 0 && (
                            <p className="text-xs text-slate-500 italic text-center py-3">Aucun champ défini. Cliquez sur "Ajouter un Champ".</p>
                          )}

                          <div className="space-y-3">
                            {step.fields.map((field, fieldIdx) => (
                              <div key={field.id} className="bg-slate-800/60 rounded-xl border border-slate-700 p-3 space-y-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Champ #{fieldIdx + 1}</span>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{field.type}</span>
                                  <button
                                    onClick={() => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.filter(f => f.id !== field.id) } : s) })}
                                    className="ml-auto p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/20 transition-colors"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">Libellé ({editLang.toUpperCase()})</label>
                                    <input
                                      type="text"
                                      value={field.label[editLang]}
                                      onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.map(f => f.id === field.id ? { ...f, label: { ...f.label, [editLang]: e.target.value } } : f) } : s) })}
                                      className="w-full px-2.5 py-2 rounded-lg bg-surface-950 border border-slate-700 text-white text-xs"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">Nom Technique (clé API)</label>
                                    <input
                                      type="text"
                                      value={field.name}
                                      onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.map(f => f.id === field.id ? { ...f, name: e.target.value } : f) } : s) })}
                                      className="w-full px-2.5 py-2 rounded-lg bg-surface-950 border border-slate-700 text-white text-xs font-mono"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">Type de Champ</label>
                                    <select
                                      value={field.type}
                                      onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.map(f => f.id === field.id ? { ...f, type: e.target.value as any } : f) } : s) })}
                                      className="w-full px-2.5 py-2 rounded-lg bg-surface-950 border border-slate-700 text-white text-xs"
                                    >
                                      <option value="text">Texte Libre</option>
                                      <option value="email">Email</option>
                                      <option value="phone">Téléphone</option>
                                      <option value="number">Nombre</option>
                                      <option value="date">Date</option>
                                      <option value="time">Heure</option>
                                      <option value="select">Liste Déroulante</option>
                                      <option value="textarea">Zone de Texte</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">Placeholder ({editLang.toUpperCase()})</label>
                                    <input
                                      type="text"
                                      value={field.placeholder?.[editLang] || ''}
                                      onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.map(f => f.id === field.id ? { ...f, placeholder: { ...(f.placeholder || { fr: '', en: '', ar: '', de: '' }), [editLang]: e.target.value } } : f) } : s) })}
                                      className="w-full px-2.5 py-2 rounded-lg bg-surface-950 border border-slate-700 text-white text-xs"
                                    />
                                  </div>
                                  <div className="flex items-center gap-2 pt-5">
                                    <input
                                      type="checkbox"
                                      id={`req-${field.id}`}
                                      checked={field.required}
                                      onChange={(e) => setData({ ...data, bookingSteps: data.bookingSteps!.map(s => s.id === step.id ? { ...s, fields: s.fields.map(f => f.id === field.id ? { ...f, required: e.target.checked } : f) } : s) })}
                                      className="w-4 h-4 accent-purple-500 rounded"
                                    />
                                    <label htmlFor={`req-${field.id}`} className="text-xs text-slate-300 font-medium cursor-pointer">Obligatoire</label>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

