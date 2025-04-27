/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dracula': {
          'bg': 'rgba(40, 42, 54, 0.9)',
          'current': '#f8f8f2',
          'selection': '#44475a',
          'purple': '#bd93f9',
          'pink': '#ff79c6',
          'cyan': '#8be9fd',
          'green': '#50fa7b',
          'orange': '#ffb86c',
          'red': '#ff5555',
          'yellow': '#f1fa8c',
          'comment': '#6272a4'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}