import { PaletteId } from './types';

export interface DesignerPalette {
  id: PaletteId;
  name: { fr: string; en: string; ar: string; de: string };
  tagline: { fr: string; en: string; ar: string; de: string };
  description: { fr: string; en: string; ar: string; de: string };
  designerNote: { fr: string; en: string; ar: string; de: string };
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    glow: string;
  };
}

export const DESIGNER_PALETTES: DesignerPalette[] = [
  {
    id: 'amethyst-violet',
    name: {
      fr: 'Améthyste Royale & Violet Électrique',
      en: 'Royal Amethyst & Electric Violet',
      ar: 'جمشت ملكي وبنفسجي ساطع',
      de: 'Königlicher Amethyst & Elektrisches Violett',
    },
    tagline: {
      fr: 'Créativité, Prestige & Élégance Contemporaine',
      en: 'Creativity, Prestige & Modern Elegance',
      ar: 'الإبداع، الفخامة والأناقة العصرية',
      de: 'Kreativität, Prestige & Moderne Eleganz',
    },
    description: {
      fr: 'Un contraste saisissant aux nuances de violet profond et de lavande néon. Conçu pour inspirer l’innovation, le luxe moderne et l’audace professionnelle.',
      en: 'A striking contrast of deep royal purple and neon lavender. Crafted to inspire modern luxury, forward-thinking innovation, and bold leadership.',
      ar: 'تناغم بصري استثنائي يجمع بين البنفسجي الملكي العميق واللافندر المشع، مصمم لإلهام الابتكار والريادة والأناقة المتميزة.',
      de: 'Ein eindrucksvoller Kontrast aus tiefem Königsviolett und leuchtendem Lavendel. Entwickelt für moderne Führungsstärke und kreative Exzellenz.',
    },
    designerNote: {
      fr: 'Palette par défaut pour Karima. Idéale pour se démarquer avec une signature visuelle mémorable et haut de gamme.',
      en: 'Karima’s default signature palette. Perfect for standing out with memorable, high-end visual distinction.',
      ar: 'اللوحة الافتراضية لكريمة. مثالية لإبراز التميز الفردي والتأثير الراقي.',
      de: 'Standardpalette für Karima. Ideal für einen unvergesslichen, erstklassigen Auftritt.',
    },
    colors: {
      primary: '#8B5CF6',
      accent: '#C084FC',
      background: '#090714',
      surface: '#130F26',
      glow: '#8B5CF6',
    },
  },
  {
    id: 'cyan-ocean',
    name: {
      fr: 'Océan Cyber & Cyan Azur',
      en: 'Cyber Ocean & Azure Cyan',
      ar: 'محيط سيبراني وسيان سماوي',
      de: 'Cyber-Ozean & Azurblau',
    },
    tagline: {
      fr: 'Technologie, Précision & Clarté Stratégique',
      en: 'Technology, Precision & Strategic Clarity',
      ar: 'التكنولوجيا، الدقة والوضوح الاستراتيجي',
      de: 'Technologie, Präzision & Strategische Klarheit',
    },
    description: {
      fr: 'Une ambiance futuriste et épurée inspirée des abysses marins et des technologies quantiques. Transmet fraîcheur, maîtrise technique et modernité.',
      en: 'A sleek, futuristic atmosphere inspired by deep ocean depths and quantum interfaces. Conveys clarity, technical agility, and precision.',
      ar: 'طابع مستقبلي نقي ومميز مستوحى من أعماق المحيط والتقنيات الرقمية المتقدمة. يعكس النضارة والوضوح والاحترافية.',
      de: 'Eine futuristische, klare Atmosphäre inspiriert von Ozeantiefen und digitaler Innovation. Vermittelt Frische und höchste Präzision.',
    },
    designerNote: {
      fr: 'Excellente pour valoriser des profils axés sur les projets d’envergure, l’organisation méthodique et les environnements digitaux.',
      en: 'Great for highlighting project leadership, methodical organization, and modern digital ecosystems.',
      ar: 'ممتازة لإبراز إدارة المشاريع، التنظيم المنهجي والبيئات الحديثة.',
      de: 'Hervorragend geeignet für Projektorganisation, methodische Stärke und zukunftsorientierte Arbeitsbereiche.',
    },
    colors: {
      primary: '#06B6D4',
      accent: '#14B8A6',
      background: '#040E17',
      surface: '#0A1C2C',
      glow: '#06B6D4',
    },
  },
  {
    id: 'rose-copper',
    name: {
      fr: 'Rose Poudré & Cuivre Flamboyant',
      en: 'Powder Rose & Radiant Copper',
      ar: 'وردي مخملي ونحاس مشرق',
      de: 'Puderrose & Strahlendes Kupfer',
    },
    tagline: {
      fr: 'Chaleur Humaine, Raffinement & Charisme',
      en: 'Human Warmth, Sophistication & Charisma',
      ar: 'الدفء الإنساني، الرقي والجاذبية',
      de: 'Menschliche Wärme, Raffinesse & Charisma',
    },
    description: {
      fr: 'Une palette chaleureuse et captivante aux accords de rose poudré et de cuivre étincelant. Apporte douceur, confiance et proximité relationnelle.',
      en: 'A warm, captivating palette balancing subtle blush rose and shimmering warm copper. Emanates empathy, trust, and approachable elegance.',
      ar: 'لوحة دافئة وجذابة تمزج بين الوردي المخملي والنحاس البراق. تبث مشاعر الثقة والدفء الإنساني والتألق الراقي.',
      de: 'Eine warme, faszinierende Palette aus zartem Rosé und glänzendem Kupfer. Strahlt Empathie, Vertrauen und Eleganz aus.',
    },
    designerNote: {
      fr: 'Idéale pour les métiers centrés sur le contact humain, les relations publiques, le conseil et l’accompagnement.',
      en: 'Ideal for client-facing relationships, consulting, leadership empathy, and communications.',
      ar: 'مثالية للمهن التي تعتمد على العلاقات الإنسانية والتواصل والاستشارات.',
      de: 'Ideal für Beratung, Kundenbeziehungen, Coaching und Führung mit Empathie.',
    },
    colors: {
      primary: '#F43F5E',
      accent: '#FB923C',
      background: '#12060B',
      surface: '#220B15',
      glow: '#F43F5E',
    },
  },
];
