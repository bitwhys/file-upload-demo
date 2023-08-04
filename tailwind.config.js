/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
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
        border: 'var(--border)',
        'border-accent': 'var(--border-accent)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'background-inverted': 'var(--background-inverted)',
        'foreground-inverted': 'var(--foreground-inverted)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          muted: 'var(--secondary-muted)',
          foreground: 'var(--secondary-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          muted: 'var(--info-muted)',
          foreground: 'var(--info-foreground)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'var(--accent)',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      boxShadow: {
        1: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
        2: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        3: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
        4: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
        5: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
        6: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
