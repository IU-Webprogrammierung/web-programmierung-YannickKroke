/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#4299e1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 