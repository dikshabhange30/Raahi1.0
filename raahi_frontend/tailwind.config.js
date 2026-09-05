/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raahi: {
          primary: '#E07A5F',       // Terracotta warm heart
          primaryHover: '#D06346',
          sand: '#F7F4EA',          // Soft warm background
          clay: '#F2CC8F',          // Peach / Clay highlight
          sage: '#81B29A',          // Calming sage green
          sageDark: '#608B74',
          dark: '#2D3142',          // Warm dark text
          accent: '#4F5D75',
          cream: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(224, 122, 95, 0.15)',
        'soft': '0 4px 20px -2px rgba(45, 49, 66, 0.06)',
        'float': '0 20px 40px -10px rgba(45, 49, 66, 0.12)',
      }
    },
  },
  plugins: [],
}
