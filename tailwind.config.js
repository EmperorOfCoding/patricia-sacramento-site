/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './entry-*.jsx'],
  theme: {
    extend: {
      colors: {
        // Marfim / off-white: fundo principal (estetica de escritorio sobrio)
        ivory: {
          DEFAULT: '#F7F2E9',
          50: '#FCFAF5',
          100: '#F7F2E9',
          200: '#EFE7D7',
          300: '#E3D6BF',
        },
        // Mogno / marrom quente: cor de autoridade (extraida do retrato)
        mogno: {
          50: '#F4ECE6',
          100: '#E5D2C6',
          200: '#CBA995',
          300: '#AC7E66',
          400: '#8A573E',
          500: '#6B3B27',
          600: '#562E1E',
          700: '#452517',
          800: '#341B11',
          900: '#26130B',
        },
        // Tinta quente para titulos e textos de autoridade
        ink: '#241B14',
        // Champagne / dourado discreto: acento premium (uso pontual)
        champagne: {
          DEFAULT: '#BE9E63',
          light: '#DAC195',
          dark: '#9C7E45',
        },
        // Vinho profundo: secundaria pontual (selos, detalhes)
        wine: {
          DEFAULT: '#6E2436',
          dark: '#54192A',
        },
      },
      fontFamily: {
        // Display serifado elegante para titulos
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Sans moderno e legivel para textos
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widee: '0.22em',
      },
      boxShadow: {
        soft: '0 18px 50px -28px rgba(38, 19, 11, 0.30)',
        card: '0 28px 70px -34px rgba(38, 19, 11, 0.40)',
        gold: '0 0 0 1px rgba(190, 158, 99, 0.30), 0 24px 60px -30px rgba(108, 59, 39, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        // Textura sutil de papel/grao para dar profundidade ao marfim
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.7)', opacity: '0' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'floatY 7s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
