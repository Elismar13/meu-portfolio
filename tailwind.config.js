/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3490dc',
        yellow: '#ffed4a',
        red: '#e3342f',
        green: '#38c172',
        purple: '#6f42c1',
        indigo: '#6574cd',
        pink: '#f66d9b',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

