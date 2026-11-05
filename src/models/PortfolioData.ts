import mongoose, { Schema, Document } from 'mongoose';
import { PortfolioData as IPortfolioData } from '../lib/types';

export type PortfolioDocument = Omit<IPortfolioData, '_id'> & Document;

const LocalizedStringSchema = new Schema(
  {
    fr: { type: String, default: '' },
    en: { type: String, default: '' },
    ar: { type: String, default: '' },
    de: { type: String, default: '' },
  },
  { _id: false }
);

const LocalizedListSchema = new Schema(
  {
    fr: { type: [String], default: [] },
    en: { type: [String], default: [] },
    ar: { type: [String], default: [] },
    de: { type: [String], default: [] },
  },
  { _id: false }
);

const StatItemSchema = new Schema(
  {
    id: String,
    label: LocalizedStringSchema,
    value: String,
    suffix: String,
  },
  { _id: false }
);

const ExperienceItemSchema = new Schema(
  {
    id: String,
    title: LocalizedStringSchema,
    company: LocalizedStringSchema,
    location: LocalizedStringSchema,
    period: LocalizedStringSchema,
    order: Number,
    category: String,
    description: LocalizedStringSchema,
    tasks: LocalizedListSchema,
    skillsAcquired: [String],
  },
  { _id: false }
);

const EducationItemSchema = new Schema(
  {
    id: String,
    degree: LocalizedStringSchema,
    institution: LocalizedStringSchema,
    location: LocalizedStringSchema,
    period: LocalizedStringSchema,
    year: String,
    order: Number,
    type: String,
    description: LocalizedStringSchema,
  },
  { _id: false }
);

const SkillCategorySchema = new Schema(
  {
    id: String,
    name: LocalizedStringSchema,
    icon: String,
    skills: [
      {
        id: String,
        name: LocalizedStringSchema,
        level: Number,
        isKeySkill: Boolean,
      },
    ],
  },
  { _id: false }
);

const LanguageItemSchema = new Schema(
  {
    id: String,
    language: LocalizedStringSchema,
    level: LocalizedStringSchema,
    proficiencyScore: Number,
    cefrCode: String,
  },
  { _id: false }
);

const CanadianCvSchema = new Schema(
  {
    headline: LocalizedStringSchema,
    summary: LocalizedStringSchema,
    keyStrengths: LocalizedListSchema,
    includeReferencesAvailable: Boolean,
    customFooter: LocalizedStringSchema,
  },
  { _id: false }
);

const BookingFieldSchema = new Schema(
  {
    id: String,
    name: String,
    label: LocalizedStringSchema,
    type: { type: String, default: 'text' },
    placeholder: LocalizedStringSchema,
    helperText: LocalizedStringSchema,
    required: { type: Boolean, default: false },
    options: [LocalizedStringSchema],
  },
  { _id: false }
);

const BookingStepSchema = new Schema(
  {
    id: String,
    order: Number,
    title: LocalizedStringSchema,
    subtitle: LocalizedStringSchema,
    description: LocalizedStringSchema,
    estimatedDuration: LocalizedStringSchema,
    badgeText: LocalizedStringSchema,
    icon: { type: String, default: 'calendar' },
    isActive: { type: Boolean, default: true },
    fields: [BookingFieldSchema],
  },
  { _id: false }
);

const BookingSettingsSchema = new Schema(
  {
    enabled: { type: Boolean, default: true },
    notificationEmail: { type: String, default: '' },
    whatsappRecipient: { type: String, default: '' },
    autoConfirmMessage: LocalizedStringSchema,
  },
  { _id: false }
);

const PortfolioSchema = new Schema(
  {
    themeSettings: {
      palette: { type: String, default: 'amethyst-violet' },
    },
    personalInfo: {
      name: LocalizedStringSchema,
      headline: LocalizedStringSchema,
      tagline: LocalizedStringSchema,
      bio: LocalizedStringSchema,
      fullBio: LocalizedStringSchema,
      email: String,
      phone: String,
      whatsapp: String,
      residence: LocalizedStringSchema,
      nationality: LocalizedStringSchema,
      availability: LocalizedStringSchema,
      targetRole: LocalizedStringSchema,
      targetLocation: LocalizedStringSchema,
      avatarUrl: String,
      stats: [StatItemSchema],
    },
    experiences: [ExperienceItemSchema],
    education: [EducationItemSchema],
    skillCategories: [SkillCategorySchema],
    languages: [LanguageItemSchema],
    canadianCv: CanadianCvSchema,
    bookingSteps: [BookingStepSchema],
    bookingSettings: BookingSettingsSchema,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Portfolio || mongoose.model<PortfolioDocument>('Portfolio', PortfolioSchema);
