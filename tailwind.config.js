/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#3490dc',
        customYellow: '#ffed4a',
        customRed: '#e3342f',
        customGreen: '#38c172',
        customPurple: '#6f42c1',
        customIndigo: '#6574cd',
        customPink: '#f66d9b',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

