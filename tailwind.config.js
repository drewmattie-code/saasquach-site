/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0faf9',
          100: '#d0ede9',
          200: '#a6d9d3',
          300: '#72bdb5',
          400: '#3d9b93',
          500: '#0D6B65',
          600: '#0b5e58',
          700: '#08504a',
          800: '#06403b',
          900: '#04302d',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
