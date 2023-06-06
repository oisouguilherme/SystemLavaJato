/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1132px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        azul: {
          1: '#0F62FE',
          2: '#001D6C',
        },
        cinza: {
          1: '#F2F4F8',
          2: '#21272A',
          3: '#697077',
        },
        vermelho: {
          1: '#DA1E28'
        }
      }
    },
  },
  plugins: [],
}
