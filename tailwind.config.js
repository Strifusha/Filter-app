/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-balance': {
            'text-wrap': 'balance',
          },
          '.select-custom': {
            color: '#374151',
            border: '1px solid #D1D5DB',
            'background-color': '#FFFFFF',
            padding: '0.75rem 1rem',
            'border-radius': '0.5rem',
            'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.15)',
            transition: 'border-color 0.2s ease-in-out',
            margin: '0.5rem 0',
          },
          '.btn': {
            'background-color': '#1E3A8A',
            color: '#FFFFFF',
            padding: '0.75rem 1.5rem',
            border: 'none',
            'border-radius': '0.5rem',
            'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          },
          '.btn:hover': {
            'background-color': '#264ab1',
            'box-shadow': '0 6px 8px rgba(0, 0, 0, 0.2)',
          },
          '.btn:disabled': {
            cursor: 'not-allowed',
            opacity: '0.5',
          },
          '.h1-custom': {
            color: '#343c49',
            'font-size': '1.875rem',
            'font-weight': '700',
            'margin-bottom': '1.5rem',
          },
          '.container': {
            'min-height': '100vh',
            padding: '1.5rem',
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
            margin: '0 auto',
          },
        },
        ['responsive', 'hover', 'focus', 'disabled']
      )
    },
  ],
}
