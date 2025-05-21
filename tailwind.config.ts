// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // Adjust if you're using a different base directory
  ],
  darkMode: 'class', // Enables dark theme via `class="dark"`
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0D0D0D',
          light: '#1A1A1A',
        },
        neon: {
          green: '#00FF88',
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
}

export default config
