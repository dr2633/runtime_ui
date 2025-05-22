// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './index.tsx',
    './App.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          100: '#f5f5f5',
          300: '#d4d4d4',
          500: '#a3a3a3',
          700: '#525252',
          900: '#1a1a1a',
          DEFAULT: '#0D0D0D',
          light: '#1A1A1A',
        },
        neon: {
          green: '#00FF88',
          greenDim: '#2be212',
          yellow: '#faff00',
          pink: '#ff00cc',
        },
        mint: {
          100: '#e6fff4',
          300: '#7ee8c3',
          400: '#5ed8b0',
          500: '#2bd2a4',
          700: '#137a64',
          900: '#064e3b',
        },
        ocean: {
          100: '#e0f7fa',
          300: '#4dd0e1',
          400: '#00bcd4',
          500: '#00acc1',
          600: '#0097a7',
          800: '#006064',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 8px #00FF88, 0 0 16px #00FF88',
      },
    },
  },
  plugins: [],
};

export default config;
