/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte BNP Paribas Banque Privée
        bnp: {
          green: {
            50: '#f0f9f4',
            100: '#dcf2e4',
            200: '#bce5cd',
            300: '#8dd3ae',
            400: '#5ab888',
            500: '#00965e', // Vert principal BNP
            600: '#007a4d',
            700: '#006240',
            800: '#004d34',
            900: '#00402b',
          },
          dark: {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#1a1a1a', // Noir élégant
          },
          gold: {
            50: '#fefcf3',
            100: '#fdf8e1',
            200: '#fbefc2',
            300: '#f7e098',
            400: '#f2c865',
            500: '#edb13f',
            600: '#d89326',
            700: '#b47220',
            800: '#92591f',
            900: '#78491d',
          }
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'bnp': '0 4px 20px rgba(0, 150, 94, 0.1)',
        'bnp-lg': '0 10px 40px rgba(0, 150, 94, 0.15)',
      }
    },
  },
  plugins: [],
}
