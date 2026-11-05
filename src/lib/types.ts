export type Language = 'fr' | 'en' | 'ar' | 'de';

export interface LocalizedString {
  fr: string;
  en: string;
  ar: string;
  de: string;
}

export interface LocalizedList {
  fr: string[];
  en: string[];
  ar: string[];
  de: string[];
}

export interface StatItem {
  id: string;
  label: LocalizedString;
  value: string;
  suffix?: string;
}

export interface PersonalInfo {
  name: LocalizedString;
  headline: LocalizedString;
  tagline: LocalizedString;
  bio: LocalizedString;
  fullBio: LocalizedString;
  email: string;
  phone: string;
  whatsapp: string;
  residence: LocalizedString;
  nationality: LocalizedString;
  availability: LocalizedString;
  targetRole: LocalizedString;
  targetLocation: LocalizedString;
  avatarUrl?: string;
  stats: StatItem[];
}

export interface ExperienceItem {
  id: string;
  title: LocalizedString;
  company: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  order: number;
  category: 'medical' | 'management' | 'vip_hospitality' | 'childcare' | 'culinary' | 'other';
  description?: LocalizedString;
  tasks: LocalizedList;
  skillsAcquired?: string[];
}

export interface EducationItem {
  id: string;
  degree: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  year: string;
  order: number;
  type: 'diploma' | 'certification' | 'workshop' | 'academic';
  description?: LocalizedString;
}

export interface SkillCategory {
  id: string;
  name: LocalizedString;
  icon: string;
  skills: {
    id: string;
    name: LocalizedString;
    level: number; // 0 to 100
    isKeySkill?: boolean;
  }[];
}

export interface LanguageItem {
  id: string;
  language: LocalizedString;
  level: LocalizedString;
  proficiencyScore: number;
  cefrCode?: string;
}

export interface CanadianCvConfig {
  headline: LocalizedString;
  summary: LocalizedString;
  keyStrengths: LocalizedList;
  includeReferencesAvailable: boolean;
  customFooter: LocalizedString;
}

export type PaletteId = 'amethyst-violet' | 'cyan-ocean' | 'rose-copper';

export interface ThemeSettings {
  palette: PaletteId;
}

export type BookingFieldType =
  | 'text'
  | 'email'
  | 'phone'
  | 'date'
  | 'time'
  | 'select'
  | 'textarea'
  | 'number';

export interface BookingField {
  id: string;
  name: string;
  label: LocalizedString;
  type: BookingFieldType;
  placeholder?: LocalizedString;
  helperText?: LocalizedString;
  required: boolean;
  options?: LocalizedString[];
}

export interface BookingStep {
  id: string;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  estimatedDuration?: LocalizedString;
  badgeText?: LocalizedString;
  icon: string;
  isActive: boolean;
  fields: BookingField[];
}

export interface BookingSettings {
  enabled: boolean;
  notificationEmail: string;
  whatsappRecipient: string;
  autoConfirmMessage?: LocalizedString;
}

export interface PortfolioData {
  _id?: string;
  updatedAt?: string;
  themeSettings?: ThemeSettings;
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  languages: LanguageItem[];
  canadianCv: CanadianCvConfig;
  bookingSteps?: BookingStep[];
  bookingSettings?: BookingSettings;
}
