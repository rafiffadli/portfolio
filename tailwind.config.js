/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#07090e',
          card: 'rgba(13, 17, 26, 0.7)',
          border: 'rgba(56, 189, 248, 0.15)',
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          neon: '#00f2fe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass-glow': '0 8px 32px 0 rgba(0, 242, 254, 0.08)',
        'card-glow': '0 0 25px rgba(6, 182, 212, 0.15)',
        'cyan-glow': '0 0 35px rgba(6, 182, 212, 0.35)',
        'emerald-glow': '0 0 35px rgba(16, 185, 129, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
};
