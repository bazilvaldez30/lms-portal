import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        custom: {
          1: '#A7252F',
          2: '#D9C02F',
          3: '#002366',
          4: '#4C3327',
          5: '#B29600',
          6: '#232B2B',
          7: '#E5E5E5',
          8: '#FBFBFA',
          9: '#BC434F',
          10: '#FAFAE9',
          11: '#838DA0',
        },
        muted: '#818181',
      },
      minHeight: {
        'screen-dvh': '100dvh',
      },
      minWidth: {
        16: '4rem',
        32: '8rem',
      },
      backgroundImage: {
        aboutUs: 'url("/images/about-us-bg.png")',
        timeline: 'url("/images/timeline-bg.png")',
        donate: 'url("/images/donate.webp")',
        appointment: 'url("/images/appointment.webp")',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        brand: ['Florentia', 'Avenir Next', 'sans-serif'],
        code: ['Courier New', 'monospace'],
        header: ['Myriad Pro', 'Inter', 'sans-serif'], // for Markdown
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'soft-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'soft-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'soft-out': 'cubic-bezier(0, 0, 0.58, 1)',
      },
      boxShadow: {
        'input-outline': '0 0 0 2px #93c5fd',
      },
      zIndex: {
        60: 'z-index: 60',
      },
      /* keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      }, */
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
