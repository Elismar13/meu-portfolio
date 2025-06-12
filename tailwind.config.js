/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        CUSTOM_BLUE: '#3490dc',
        CUSTOM_YELLOW: '#ffed4a',
        CUSTOM_RED: '#d62828',
        CUSTOM_GREEN: '#38c172',
        CUSTOM_PURPLE: '#6f42c1',
        CUSTOM_ORANGE: '#f6993f',
        CUSTOM_CYAN: '#00bcd4',
        CUSTOM_MAGENTA: '#e91e63',
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        'bounce-smooth': 'button-bounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': { opacity: '0' },
          '0.1%': { opacity: '1' },
          '50%': { opacity: '1' },
          '50.1%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        'button-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
