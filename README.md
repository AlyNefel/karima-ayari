# Portfolio Professionnel Multilingue & CV Format Canadien – Hajer Riahi

Un portfolio haut de gamme développé selon les standards d'ingénierie logicielle d'un **Lead / Senior Full-Stack Developer (15+ ans d'expérience)**, associant **React 18**, **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **MongoDB** et **Mongoose**.

Le portfolio intègre nativement une gestion **trilingue complète (Français 🇫🇷, Anglais 🇬🇧, Arabe 🇹🇳 avec prise en charge RTL)**, un **Curriculum Vitae au format officiel canadien (téléchargeable et imprimable en 3 langues)**, une **bulle de discussion WhatsApp interactive**, ainsi qu'une **plateforme d'administration sécurisée (/admin)** permettant de modifier dynamiquement chaque donnée et détail du site et des CVs.

---

## 🌟 Points Forts & Architecture Technique

### 1. Structure Modulaire & Clean Architecture
```
portfolio-hajer/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/page.tsx      # Authentification sécurisée de l'administration
│   │   │   └── page.tsx            # Dashboard d'administration complet
│   │   ├── api/
│   │   │   ├── admin/login/route.ts # Connexion & génération de cookie sécurisé
│   │   │   ├── admin/check/route.ts # Vérification de session active
│   │   │   ├── portfolio/route.ts  # API GET/POST MongoDB & Fallback mémoire
│   │   │   └── contact/route.ts    # API formulaire de contact
│   │   ├── cv/[lang]/page.tsx      # Page dédiée pour affichage & impression CV canadien
│   │   ├── globals.css             # Styles globaux, polices (Cairo & Plus Jakarta), CSS print
│   │   ├── layout.tsx              # Layout racine optimisé SEO et métadonnées multilingues
│   │   └── page.tsx                # Page d'accueil interactive avec Parallax et animations
│   ├── components/
│   │   ├── cv/
│   │   │   └── CanadianResume.tsx  # Composant CV Canadien haute fidélité (A4, ATS, PDF)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Hero interactif avec badges, stats et CTAs
│   │   │   ├── AboutSection.tsx    # Profil, ambition, disponibilité et mobilité
│   │   │   ├── ExperienceSection.tsx # Chronologie interactive avec filtres par domaine
│   │   │   ├── EducationSection.tsx  # Diplômes, ESSECT, AMADEUS, formations artisanales
│   │   │   ├── SkillsSection.tsx   # Matrice de compétences avec barres de maîtrise
│   │   │   ├── LanguagesSection.tsx # Compétences linguistiques & niveaux CECRL
│   │   │   ├── CanadianCvModal.tsx # Modal d'aperçu rapide & téléchargement 1-clic
│   │   │   └── ContactSection.tsx  # Formulaire direct & coordonnées complètes
│   │   └── ui/
│   │       ├── Navbar.tsx          # Barre de navigation sticky avec sélecteur de langue
│   │       ├── ParallaxBackground.tsx # Arrière-plan dynamique et mesh de lueurs
│   │       ├── WhatsAppBubble.tsx  # Bulle flottante interactive avec message prérempli
│   │       ├── LanguageSwitcher.tsx # Sélecteur trilingue FR / EN / AR
│   │       └── Footer.tsx          # Pied de page avec lien d'accès administration
│   ├── lib/
│   │   ├── types.ts                # Typage TypeScript strict pour chaque modèle de données
│   │   ├── initialData.ts          # Données initiales complètes traduites en FR, EN, AR
│   │   ├── mongodb.ts              # Gestionnaire de connexion MongoDB résilient avec cache
│   │   ├── portfolioService.ts     # Couche de service avec basculement automatique mémoire/DB
│   │   └── i18n/
│   │       └── translations.ts     # Dictionnaires UI pour les 3 langues
│   └── models/
│       └── PortfolioData.ts        # Schéma Mongoose complet pour MongoDB
├── .env.example
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🌍 Multilingue & Support RTL
- **Français (FR)** : Langue d'origine enrichie avec une terminologie professionnelle soutenue.
- **Anglais (EN)** : Traduction soignée conforme aux exigences de recrutement en Amérique du Nord (Canada) et en Europe.
- **Arabe (AR)** : Arabe moderne standard élégant avec inversion automatique de l'interface en **mode RTL (`dir="rtl"`)** et police typographique optimisée (**Cairo**).

---

## 🇨🇦 Format de CV Canadien Officiel
Le module de CV respecte scrupuleusement les exigences des employeurs et des normes canadiennes :
1. **Sans photo personnelle, sans âge, ni situation matrimoniale** (conformité stricte aux normes anti-discrimination du Canada).
2. **En-tête épuré** : Coordonnées professionnelles, résidence, téléphone, email direct.
3. **Sommaire professionnel & compétences clés** mis en avant en haut du CV.
4. **Ordre antéchronologique** des expériences avec verbes d'action percutants.
5. **Formation, perfectionnement & certifications**.
6. **Maîtrise des langues & outils bureautiques/ERP (Sage, Office)**.
7. **Téléchargement PDF 1-clic** via `html2canvas` et `jspdf`, et feuille de style d'impression intégrée (`@media print`).

---

## 💬 Bulle WhatsApp Flottante
- Positionnée avec soin en bas à droite (ou en bas à gauche en mode RTL arabe).
- Indicateur de disponibilité en temps réel (« En ligne | Réponse rapide »).
- Fenêtre de prévisualisation avec message d'accueil personnalisé.
- Ouvre directement WhatsApp sur le numéro **+216 52 784 629** avec un message professionnel pré-encodé.

---

## 🛡️ Espace d'Administration (/admin)
- **Accès sécurisé** : `/admin/login` (Mot de passe configuré : `admin2026`).
- **Édition intégrale en temps réel** dans les 3 langues :
  - Identité, titre, bio, coordonnées et disponibilité.
  - Expériences professionnelles (ajout, modification, suppression, missions).
  - Formations et certifications.
  - Compétences et pourcentages de maîtrise (curseurs dynamiques).
  - Langues et niveaux CECRL.
  - Personnalisation complète des textes du CV Canadien.
- **Résilience Base de Données** :
  - Si `MONGODB_URI` est configuré dans `.env.local`, toutes les modifications sont sauvegardées directement dans MongoDB.
  - Si MongoDB n'est pas encore configuré, l'application fonctionne immédiatement en mode mémoire/local haute résilience avec préchargement des données de Hajer Riahi !

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances (déjà effectuée)
```bash
npm install
```

### 2. Configuration de l'environnement
Éditez `.env.local` pour définir votre base de données MongoDB (optionnel) et votre mot de passe administrateur :
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/portfolio_hajer
ADMIN_PASSWORD=admin2026
```

### 3. Lancement en mode développement
```bash
npm run dev
```
Accédez au site sur [http://localhost:3000](http://localhost:3000).

### 4. Build de production & Lancement
```bash
npm run build
npm start
```

