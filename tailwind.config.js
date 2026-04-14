/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },
        border: 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        'border-solid': 'var(--border-solid)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        brand: {
          DEFAULT: 'var(--brand)',
          emphasis: 'var(--brand-emphasis)',
          hover: 'var(--brand-hover)',
          subtle: 'var(--brand-subtle)',
        },
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-quaternary': 'var(--text-quaternary)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-hover': 'var(--surface-hover)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontWeight: {
        'display': '510',
        'semibold': '590',
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-1.584px', fontWeight: '510' }],
        'display-lg': ['4rem', { lineHeight: '1', letterSpacing: '-1.408px', fontWeight: '510' }],
        'display': ['3rem', { lineHeight: '1', letterSpacing: '-1.056px', fontWeight: '510' }],
        'h1': ['2rem', { lineHeight: '1.13', letterSpacing: '-0.704px', fontWeight: '400' }],
        'h2': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.288px', fontWeight: '400' }],
        'h3': ['1.25rem', { lineHeight: '1.33', letterSpacing: '-0.24px', fontWeight: '590' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.165px', fontWeight: '400' }],
        'body-emphasis': ['1.0625rem', { lineHeight: '1.6', fontWeight: '590' }],
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
        'card': '0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        'brand': '0 0 20px rgba(94, 106, 210, 0.4)',
      },
      borderRadius: {
        'subtle': '0.375rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}