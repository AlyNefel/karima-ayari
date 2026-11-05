import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        amber: {
          50: 'var(--palette-50, #fffbeb)',
          100: 'var(--palette-100, #fef3c7)',
          200: 'var(--palette-200, #fde68a)',
          300: 'var(--palette-300, #fcd34d)',
          400: 'var(--palette-400, #fbbf24)',
          500: 'var(--palette-500, #f59e0b)',
          600: 'var(--palette-600, #d97706)',
          700: 'var(--palette-700, #b45309)',
          800: 'var(--palette-800, #92400e)',
          900: 'var(--palette-900, #78350f)',
        },
        brand: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#b48c7d",
          600: "#9c7264",
          700: "#7c594e",
          800: "#5c4139",
          900: "#3d2a24",
          accent: "#D97706", // warm amber
          gold: "#F59E0B",
          teal: "#0D9488",
          indigo: "#4F46E5",
        },
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          800: "#1E293B",
          900: "#0F172A",
          950: "#080C14",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Cairo", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;

