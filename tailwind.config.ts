import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
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
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
