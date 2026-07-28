import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Poppins', 'sans-serif'] },
      colors: { brand: { primary: '#0f172a', secondary: '#0d9488', accent: '#14b8a6' } }
    }
  },
  plugins: []
} satisfies Config;
