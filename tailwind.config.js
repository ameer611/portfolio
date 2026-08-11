/** @type {import('tailwindcss').Config} */

// Monochrome, taken from the logo. Depth comes from layered surfaces and
// radius rather than colour. Tokens are CSS variables (space-separated RGB)
// so light/dark swap by one class on <html>.
const token = name => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: token('page'),
        card: token('card'),
        'card-2': token('card-2'),
        ink: token('ink'),
        'ink-muted': token('ink-2'),
        'ink-faint': token('ink-3'),
        edge: token('edge'),
        'edge-strong': token('edge-2'),
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 7vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        section: ['clamp(1.75rem, 3.4vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        card: '1.25rem',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 10px 30px -18px rgb(0 0 0 / 0.18)',
        lift: '0 1px 2px rgb(0 0 0 / 0.05), 0 18px 40px -20px rgb(0 0 0 / 0.28)',
      },
      maxWidth: {
        shell: '75rem',
        readable: '40rem',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        halo: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '80%, 100%': { transform: 'scale(2.6)', opacity: '0' },
        },
      },
      animation: {
        rise: 'rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        halo: 'halo 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
